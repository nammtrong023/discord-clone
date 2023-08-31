/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: () => {
        config.external
    }

    images: {
        domains: ['uploadthing.com'],
    },
};

module.exports = nextConfig;
