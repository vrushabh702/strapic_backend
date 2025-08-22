/**
 * blog-detail controller
 */

import { factories } from '@strapi/strapi'

export default factories.createCoreController('api::blog-detail.blog-detail',
    () => ({
        async find(ctx: any) {
            const { data, meta } = await super.find(ctx);
            const transformed = data.map((item: any) => {
                const faq = item.faq?.map((faq: any) => ({
                    question: faq.question,
                    answer: faq.answer
                })) || [];
                const blog_content = item.blog_content
                const blog = item.blog ? { title: item.blog.title || null, publishedAt: item.blog.publishedAt || null, meta_title: item.blog.meta_title, meta_description: item.blog.meta_description } : null;
                const author = item.blog ? { name: item.blog.author_name.name || null, slug: item.blog.author_name.slug || null } : null;
                return {
                    id: item.id,
                    blog,
                    blog_content,
                    author,
                    faq
                };
            });

            return { data: transformed };
        },
    }));
