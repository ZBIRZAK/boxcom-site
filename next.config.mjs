const isProd = process.env.NODE_ENV === "production";

/** @type {import('next').NextConfig} */
const nextConfig = {
  // A lockfile also exists above this repository on the development machine.
  // Keep Turbopack scoped to this project instead of scanning the parent tree.
  turbopack: {
    root: process.cwd(),
  },
  // reactStrictMode: true,
  // images: {
  //   unoptimized: true, // Disable default image optimization
  // },
  // assetPrefix: isProd ? "/boxcom_frontend/" : "",
  // basePath: isProd ? "/boxcom_frontend" : "",
  // output: "export",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*.cdninstagram.com",
        port: "",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/admin",
        destination: `${process.env.BACKEND_HOST}/wp-admin`,
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      // Prevent manifest from being cached too long
      {
        source: "/manifest.json",
        headers: [
          {
            key: "Cache-Control",
            value: "no-cache, no-store, must-revalidate",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
