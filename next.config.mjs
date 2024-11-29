/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.externals.push("pino-pretty", "lokijs", "encoding");
    return config;
  },
  images: {
    domains: ["vicuna-shared.fsn1.your-objectstorage.com"],
  },
};

export default nextConfig;
