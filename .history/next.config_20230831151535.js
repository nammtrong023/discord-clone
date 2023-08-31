/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: () => {
        config.external.push({
            'utf-8'
        });
    },
    images: {
        domains: ['uploadthing.com'],
    },
};

module.exports = nextConfig;
