const { config } = require('process');

/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: () => {
        config
    }

    images: {
        domains: ['uploadthing.com'],
    },
};

module.exports = nextConfig;
