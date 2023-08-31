const { config } = require('process');

/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config) => {
        config.external.push({
            'utf-8-validate': 'commonjs utf-8-validate',
            bufferutil: 'commonjs bufferutil',
        });

        return config;
    },
    images: {
        domains: ['uploadthing.com'],
    },
};

module.exports = nextConfig;