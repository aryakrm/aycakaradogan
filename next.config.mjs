/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  distDir: "build",
  output: "export", // Added 'output' field to export
};

export default nextConfig;
