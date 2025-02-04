/** @type {import('next').NextConfig} */
const nextConfig = {
  rewrites: () => [
    {
      source: "/admin/:path*",
      destination: "/api/admin/:path*",
    },
  ],
};

export default nextConfig;