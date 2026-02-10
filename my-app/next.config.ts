import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
   async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          // Remove DENY if you're setting it somewhere else (middleware / hosting).
          // You generally should NOT set X-Frame-Options at all if using frame-ancestors.

          {
            key: "Content-Security-Policy",
            value:
              "frame-ancestors 'self' https://*.sanity.studio https://*.sanity.io;",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
