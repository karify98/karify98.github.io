/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
        unoptimized: true,
    },
    i18n: {
        locales: ['en', 'vi'],
        defaultLocale: 'en',
    },
    // Optional: Add basePath if your site is not at the root of the domain
    // basePath: '/your-repo-name',
};

module.exports = nextConfig;