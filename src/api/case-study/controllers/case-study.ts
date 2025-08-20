import { factories } from '@strapi/strapi'

module.exports = factories.createCoreController(
    'api::case-study.case-study',
    () => ({
        async find(ctx: any) {
            const { data, meta } = await super.find(ctx);
            const transformed = data.map((item: any) => {
                const image_url = item.image?.url || null;
                const categories = item.case_study_categories?.map((category: any) => category.name) || [];
                return {
                    id: item.id,
                    title: item.title,
                    description: item.description,
                    slug: item.slug,
                    image_url,
                    categories
                };
            });

            return { data: transformed, meta };
        },
    })
);