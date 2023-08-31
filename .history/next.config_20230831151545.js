/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: () => {
        config.external.push({
            'utf-8-validate': "commonjs"
        });
    },
    images: {
        domains: ['uploadthing.com'],
    },
};

module.exports = nextConfig;
