/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: () => {
        config.external.push({});
    },
    images: {
        domains: ['uploadthing.com'],
    },
};

module.exports = nextConfig;
