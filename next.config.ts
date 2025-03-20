import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // next.config.js
    images: {
      domains: ['res.cloudinary.com'], // Adicione o domínio do Cloudinary aqui
    }

};

module.exports = nextConfig;