/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
        ignoreDuringBuilds: true,
    },
    images: {
        domains: ['images.pexels.com'], // Allow images from pexels.com
    },
};

module.exports = nextConfig;
