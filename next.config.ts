import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "opengraph.githubassets.com",
                port: "",
                pathname: "/**",
            },
        ],
        minimumCacheTTL: 60,
    },
    compress: true,
    poweredByHeader: false,
    experimental: {
        optimizePackageImports: ["framer-motion", "lucide-react"],
    },
};

export default nextConfig;
