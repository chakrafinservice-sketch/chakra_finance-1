/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "www.cashe.co.in",
      },
      {
        protocol: "https",
        hostname: "5.imimg.com",
      },
      {
        protocol: "https",
        hostname: "greenspacehousing.com",
      },
      {
        protocol: "https",
        hostname: "blogassets.airtel.in",
      },
      {
        protocol: "https",
        hostname: "encrypted-tbn1.gstatic.com",
      },
      {
        protocol: "https",
        hostname: "encrypted-tbn2.gstatic.com",
      },
      {
        protocol: "https",
        hostname: "sgaa.in",
      },
    ],
  },
};

export default nextConfig;
