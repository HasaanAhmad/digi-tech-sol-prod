/** @type {import('next').NextConfig} */

const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'palegoldenrod-kingfisher-770407.hostingersite.com',
            },
        ],
    },
    eslint: {
        ignoreDuringBuilds: true,
    },

};

export default nextConfig;
