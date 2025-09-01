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
    },
};

export default nextConfig;
