'use strict';

import { Core } from '@strapi/strapi';

let isProcessing = false;
let lastCreatedEntryId: number | null = null;

interface City {
  id: number;
  name: string;
  slug: string;
}

interface ServicePage {
  id: number;
  createdAt: string;
  updatedAt: string;
  publishedAt?: string;
  slug?: string;
  documentId?: string;
  cities: City[];
  [key: string]: any;
}

export default {
  register({ strapi }: { strapi: Core.Strapi }) {
    // Register logic here
  },

  async bootstrap({ strapi }: { strapi: Core.Strapi }) {
    strapi.log.info('🚀 Registering lifecycle for service-page...');

    // Add a custom route to get the last created entry
    strapi.server.router.get('/api/service-page/last-created', async (ctx) => {
      if (lastCreatedEntryId) {
        ctx.body = { id: lastCreatedEntryId };
      } else {
        ctx.status = 404;
        ctx.body = { message: 'No recently created entry found' };
      }
    });

    strapi.db.lifecycles.subscribe({
      models: ['api::service-page.service-page'],

      async beforeUpdate(event) {
        const { params } = event;

        // List of fields that should not be editable
        const nonEditableFields = [
          'cities',
        ];

        // Remove non-editable fields from update data
        nonEditableFields.forEach(field => {
          if (params.data[field] !== undefined) {
            delete params.data[field];
          }
        });
      },


      async afterCreate(event: any) {
        if (isProcessing) {
          strapi.log.info('↩️ Skipping processing to prevent recursion');
          return;
        }

        const { result } = event;

        if (!result || !result.id) {
          strapi.log.warn('⚠️ No result ID available in afterCreate');
          return;
        }

        isProcessing = true;
        lastCreatedEntryId = null; // Reset last created ID

        try {
          strapi.log.info(`🔄 Processing entry ID: ${result.id}`);

          // Use db.query to avoid triggering lifecycles - populate city slug
          const fullEntry = await strapi.db.query('api::service-page.service-page').findOne({
            where: { id: result.id },
            populate: {
              cities: {
                fields: ['id', 'name', 'slug'] // Include slug field
              }
            },
          }) as ServicePage;

          if (!fullEntry) {
            strapi.log.warn('⚠️ Entry not found after creation');
            return;
          }

          const cities = fullEntry.cities || [];

          // No processing needed if there are 0 cities
          if (cities.length === 0) {
            strapi.log.info('📭 0 cities — no processing.');
            return;
          }

          // Extract clean data (remove system fields) BEFORE processing cities
          const {
            id,
            createdAt,
            updatedAt,
            publishedAt,
            cities: citiesField,
            documentId,
            ...cleanData
          } = fullEntry;

          // Process variable replacement function with both city name and slug
          const processCityVariables = (data: any, cityName: string, citySlug: string) => {
            const processedData: Record<string, any> = {};
            for (const [key, value] of Object.entries(data)) {
              if (typeof value === 'string') {
                let processedValue = value.replace(/{{city}}/gi, cityName);
                processedValue = processedValue.replace(/city-slug/gi, citySlug);
                processedData[key] = processedValue;
              } else {
                processedData[key] = value;
              }
            }
            return processedData;
          };

          // If only 1 city, process variable replacement but keep original
          if (cities.length === 1) {
            const city = cities[0];
            const cityName = city.name;
            const citySlug = city.slug;

            strapi.log.info(`🏙️ Only 1 city — processing variable replacement for: ${cityName} (${citySlug})`);

            const updatedData = processCityVariables(cleanData, cityName, citySlug);

            // Update the original entry with replaced variables
            await strapi.db.query('api::service-page.service-page').update({
              where: { id: result.id },
              data: updatedData,
            });

            // Set the last created entry ID to the updated original entry
            lastCreatedEntryId = result.id;
            strapi.log.info(`✅ Updated original entry with city variables: ${cityName}`);
            return;
          }

          // For 2+ cities, proceed with cloning process
          strapi.log.info(`🏙️ Found ${cities.length} cities, starting cloning process...`);

          // Store all creation promises and track the last created entry
          const creationPromises = [];
          const createdEntryIds: number[] = [];

          // Create individual entries for each city
          for (const city of cities) {
            const cityName = city.name;
            const citySlug = city.slug;
            const cityId = city.id;

            strapi.log.info(`🔧 Processing city: ${cityName} (${citySlug}) - ID: ${cityId}`);

            const clonedData = processCityVariables(cleanData, cityName, citySlug);

            // Add creation promise to array
            creationPromises.push(
              strapi.db.query('api::service-page.service-page').create({
                data: {
                  ...clonedData,
                  cities: [cityId],
                  publishedAt: null// Connect to single city
                },
              }).then((createdEntry: any) => {
                createdEntryIds.push(createdEntry.id);
                lastCreatedEntryId = createdEntry.id; // Update last created ID
                strapi.log.info(`✅ Created entry for city: ${cityName} (${citySlug}) - ID: ${createdEntry.id}`);
                return createdEntry;
              })
            );
          }

          // Wait for all creations to complete
          const createdEntries = await Promise.all(creationPromises);

          // Delete original multi-city entry using db.query AFTER all creations are done
          await strapi.db.query('api::service-page.service-page').delete({
            where: { id: result.id },
          });

          strapi.log.info(`🧹 Deleted original multi-city entry (ID: ${result.id})`);
          strapi.log.info(`📋 Last created entry ID: ${lastCreatedEntryId}`);
          strapi.log.info(`📋 All created entry IDs: ${createdEntryIds.join(', ')}`);

        } catch (error: any) {
          strapi.log.error('❌ Error in afterCreate lifecycle:', error.message);
          if (error.stack) {
            strapi.log.error(error.stack);
          }
        } finally {
          // Always reset processing flag
          isProcessing = false;
          strapi.log.info('🔄 Reset processing flag');
        }
      }
    });

    strapi.log.info('✅ Lifecycle registered successfully for service-page');
  },
};