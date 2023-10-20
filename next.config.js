/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true
}

const { withContentlayer } = require('next-contentlayer')


  async redirects() {
    return [
      {
        source: '/c',
        destination: '/contact',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
