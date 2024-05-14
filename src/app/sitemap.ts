import { IData, RequestApiProps } from '@/interfaces/RequestApiProps';
import axios from 'axios';

export default async function sitemap() {
    const posts = await axios.get(`${process.env.NEXT_PUBLIC_STRAPI_BASE_URL}/api/contents?populate=*&sort[0]=id:desc`, {
        headers: {
            Authorization: `Bearer ${process.env.STRAPI_TOKEN}`,
        },
    }).then(res => res.data) as RequestApiProps;

    const post = (posts) ? posts.data.map((item: IData) => {
        return {
            url: process.env.NEXT_PUBLIC_URL + '/news/cybernews/' + item.id,
            lastModified: new Date(item.attributes.createdAt),
            changeFrequency: 'monthly',
            priority: 0.7,
        }
    }) : [];

    // Add static routes
    const routes = ["/", "/about-us", "/contact-us", "/informcyber", "/news/cybernews", "/news/search"];
    const pages = routes.map((route: string) => {
        return {
            url: process.env.NEXT_PUBLIC_URL + route,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 1,
        }
    });
    return [
        ...pages,
        ...post,
    ]
}