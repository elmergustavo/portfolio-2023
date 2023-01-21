/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  images: {
    domains: [
      "cdn.discordapp.com",
      "i.ibb.co",
      "capture-website-api.herokuapp.com",
      "avatars.githubusercontent.com",
    ],
  },
};

module.exports = nextConfig;
