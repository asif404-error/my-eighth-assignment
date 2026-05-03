const nextConfig = {
  serverExternalPackages: ["mongodb"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};

export default nextConfig;