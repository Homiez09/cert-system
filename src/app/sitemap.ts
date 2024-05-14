import { IData, RequestApiProps } from '@/interfaces/RequestApiProps';
import axios from 'axios';

export default async function sitemap() {
    const posts = await axios.post(process.env.NEXT_PUBLIC_URL + '/api/news').then(res => res.data).catch(err => err.response.data) as RequestApiProps; 
    const post = posts.status === 200 ? posts.data.map((post: IData) => {
        return {
            url: process.env.NEXT_PUBLIC_URL + '/news/cybernews/' + post.id,
            lastModified: new Date(post.attributes.createdAt),
            changeFrequency: 'monthly',
            priority: 0.7,
        }
    }) : [];

    // Add static routes
    const routes = ["/", "/about-us", "/contact-us", "/informcyber", "/news/cybernews", "/news/search"];
    const pages = routes.map((route:string) => {
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