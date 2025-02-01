/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    basePath: '/TestWebDeploy',
    images: {
        unoptimized: true,
    }
};

// ต้องใช้ module.exports ไม่ใช่ export default
module.exports = nextConfig;
