/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    basePath: '/TestWebDeploy',
    images: {
        unoptimized: true,
    }
};

module.exports = nextConfig;
