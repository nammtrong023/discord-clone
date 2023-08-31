/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: () => {
        config.external.push({
            'utf'
        });
    },
    images: {
        domains: ['uploadthing.com'],
    },
};

module.exports = nextConfig;
