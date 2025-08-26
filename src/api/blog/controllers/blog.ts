/**
 * blog controller
 */

import { factories } from '@strapi/strapi'

export default factories.createCoreController('api::blog.blog',
    () => ({
        async find(ctx: any) {
            const { data, meta } = await super.find(ctx);
            const transformed = data.map((item: any) => {
                const categories = item.blogs_categories ? item.blogs_categories.map((category: any) => ({
                    name: category.title,
                    slug: category.slug
                })) : [];
                const author = item.author_name ? { name: item.author_name.name || null, slug: item.author_name.slug || null } : null;
                return {
                    id: item.id,
                    title: item.title,
                    slug: item.slug,
                    author,
                    image_url: item.image ? item.image.url : null,
                    categories
                };
            });

            return { data: transformed, meta };
        },
    }));
