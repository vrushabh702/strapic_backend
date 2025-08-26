import { factories } from '@strapi/strapi';

export default factories.createCoreController('api::service-page.service-page', () => ({
    async find(ctx: any) {
        const { data, meta } = await super.find(ctx);
        const transformed = data.map((item: any) => {
            const serviceName = item?.service ? item?.service?.name : null

            const cityName = item?.cities || item.cities ? item?.cities[0].name : null

            const whyOnlyPerticularTechnology = {
                title_and_description: item.benefits_of_technology_title_discription || null,
                cards: item.benefits_of_technology_card ? item.benefits_of_technology_card?.map((benefit: any) => ({
                    title: benefit.title,
                    description: benefit.description,
                })) : []
            }

            const reasonForChooseAppeak = {
                why_appeak: item.why_appeak,
                reasons: item.reasons_of_why_appeak ? item.reasons_of_why_appeak?.map((reason: any) => ({
                    title: reason.title,
                    description: reason.description,
                    icon: reason.icon.url
                })) : []
            }

            const benefitsOfAppeak = {
                title_and_description: item.benefits_of_appeak_title_discription || null,
                cards: item.reasons_of_why_appeak ? item.reasons_of_why_appeak?.map((benefit: any) => ({
                    title: benefit.title,
                    description: benefit.description,
                    icon: benefit.icon.url
                })) : []
            }

            const appeakServiceForTechnology = {
                title_and_description: item.appeak_service_for_technology_title_description || null,
                cards: item.appeak_service_for_technology ? item.appeak_service_for_technology?.map((service: any) => ({
                    title: service.title,
                    description: service.description,
                    icon: service.icon.url
                })) : []
            }

            const whyCityChooseAppeak = {
                title_and_description: item.why_city_choose_appeak_title_description || null,
                cards: item.why_city_choose_appeak ? item.why_city_choose_appeak?.map((reason: any) => ({
                    title: reason.title,
                    description: reason.description,
                    icon: reason.icon.url
                })) : []
            }

            const howToChooseAppeak = {
                title_and_description: item.how_choose_appeak_title_description || null,
                cards: item.how_to_choose_appeak ? item.how_to_choose_appeak?.map((step: any) => ({
                    title: step.title,
                    description: step.description,
                    icon: step.icon.url
                })) : []
            }

            const faq = item.faq?.map((faq: any) => ({
                question: faq.question,
                answer: faq.answer
            })) || [];

            return {
                id: item.id,
                serviceName,
                cityName,
                // diff section
                bannerDescription: item.banner_description,
                // diff section
                whyOnlyPerticularTechnology,
                // diff section
                reasonForChooseAppeak,
                // diff section
                benefitsOfAppeak,
                // diff section
                appeakServiceForTechnology,
                // diff section
                whyCityChooseAppeak,
                // diff section
                howToChooseAppeak,
                // diff section
                conclusion: item.conclusion,
                // diff section
                faq,
                // diff section
                slug: item.slug
            };
        });

        return { data: transformed };
    },
}))
