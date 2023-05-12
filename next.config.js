/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        appDir: true
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'firebasestorage.googleapis.com'
            }
        ],
        minimumCacheTTL: 60,
    }
}

module.exports = nextConfig
