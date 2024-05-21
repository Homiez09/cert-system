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
                hostname: 'educert.ku.ac.th',
                pathname: '**',
            },
        ],
    },
    reactStrictMode: true,
};

export default nextConfig;
