/** @type {import('next').NextConfig} */

const path = require('path');
const withLess = require('@zeit/next-less');
if (typeof require !== 'undefined') {
  require.extensions['.less'] = (file) => {};
}

module.exports = withLess({
  lessLoaderOptions: {
    javascriptEnabled: true,
  },
});

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    forceSwcTransforms: true,
  },
  webpack(config, { webpack }) {
    config.resolve = {
      alias: {
        '@pages': path.resolve(__dirname, 'src/pages'),
        '@styles': path.resolve(__dirname, 'src/styles'),
        '@utils': path.resolve(__dirname, 'src/utils'),
        '@components': path.resolve(__dirname, 'src/components'),
        '@types': path.resolve(__dirname, 'src/types'),
        '@layout': path.resolve(__dirname, 'src/layout'),
      },
      ...config.resolve,
    };
    return config;
  },
};

module.exports = nextConfig;
// module.exports = (phase) => nextConfig(phase);
