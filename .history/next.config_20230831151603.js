/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: () => {
        config.external.push({
            'utf-8-validate': 'commonjs utf-8-validate',
            buffer
        });
    },
    images: {
        domains: ['uploadthing.com'],
    },
};

module.exports = nextConfig;
