/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "firebasestorage.googleapis.com",
        port: "",
        pathname: "/v0/b/**",
      },
    ],
    unoptimized: process.env.NODE_ENV === "production", // OK if intentional
  },
  experimental: {
    serverExternalPackages: ["firebase", "firebase-admin"],
  },
};

export default nextConfig;
