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
        ],
    },
    publicRuntimeConfig: {
        STRAPI_BASE_URL: 'http://localhost:1337',
    },
};

export const strapi_base_url = process.env.STRAPI_BASE_URL;

export default nextConfig;
