import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "sthwdcewifbkqqlhzeui.supabase.co",
        port: "", // Leave empty if no specific port is used
        pathname: "/storage/v1/object/public/**",
      },
    ],
  },
};

export default nextConfig;
