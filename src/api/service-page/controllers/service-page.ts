import { factories } from '@strapi/strapi';

export default factories.createCoreController('api::service-page.service-page', () => ({
    async find(ctx: any) {
        const { data, meta } = await super.find(ctx);
        const transformed = data.map((item: any) => {

            const serviceName = item?.service ? item?.service?.name : null

            const cityName = item?.cities || item.cities.length !== 0 ? item?.cities[0].name : null

            const benefitsOfTechnology = item.benefits_of_technology_card?.map((benefit: any) => ({
                title: benefit.title,
                description: benefit.description,
            })) || [];

            const reasonsForChooseAppeak = item.reasons_of_why_appeak?.map((reason: any) => ({
                title: reason.title,
                description: reason.description,
                icon: reason.icon.url
            })) || [];

            const benefitsOfAppeak = item.reasons_of_why_appeak?.map((benefit: any) => ({
                title: benefit.title,
                description: benefit.description,
                icon: benefit.icon.url
            })) || [];

            const appeakServiceForTechnology = item.appeak_service_for_technology?.map((service: any) => ({
                title: service.title,
                description: service.description,
                icon: service.icon.url
            })) || []

            const whyCityChooseAppeak = item.why_city_choose_appeak?.map((reason: any) => ({
                title: reason.title,
                description: reason.description,
                icon: reason.icon.url
            })) || []

            const howToChooseAppeak = item.how_to_choose_appeak?.map((step: any) => ({
                title: step.title,
                description: step.description,
                icon: step.icon.url
            })) || []

            const faq = item.faq?.map((faq: any) => ({
                question: faq.question,
                answer: faq.answer
            })) || [];

            return {
                id: item.id,
                faq,
                bannerDescription: item.banner_description,
                whyOnlyThisTechnology: item.why_only_perticular_technology,
                whyAppeak: item.why_appeak,
                conclusion: item.conclusion,
                serviceName,
                cityName,
                benefitsOfTechnology,
                reasonsForChooseAppeak,
                benefitsOfAppeak,
                appeakServiceForTechnology,
                whyCityChooseAppeak,
                howToChooseAppeak
            };
        });

        return { data: transformed };
    },
}))
