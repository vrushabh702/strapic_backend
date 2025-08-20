/**
 * author controller
 */

import { factories } from '@strapi/strapi'

export default factories.createCoreController('api::author.author',
    () => ({
        async find(ctx: any) {
            const { data, meta } = await super.find(ctx);
            const transformed = data.map((item: any) => {
                return {
                    id: item.id,
                    name: item.name,
                    description: item.description,
                    designation: item.designation,
                    expertise: item.expertise,
                    email: item.email,
                    linkedin: item.linkedin,
                    image_url: item.image[0]?.url || null,
                };
            });

            return transformed[0] ;
        },
    }));
