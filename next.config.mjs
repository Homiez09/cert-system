/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'http',
                hostname: 'localhost',
                port: '1337',
                pathname: '/uploads/**',
            },
            {
                protocol: 'https',
                hostname: 'kucert.ku.ac.th',
                pathname: '/uploads/**',
            },
        ],
    },
};

export const strapi_base_url = process.env.STRAPI_BASE_URL;

export default nextConfig;
