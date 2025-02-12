const path = require('path');
const webpack = require('webpack');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'avatars.githubusercontent.com', pathname: '/*/**' },
      { protocol: 'https', hostname: 'github.com', pathname: '/*/**' },
      { protocol: 'https', hostname: 'www.apple.com', pathname: '/*/**' },
    ],
  },
  webpack: (config, options) => {
    // add null-loader for binary and xml files
    config.module.rules.push({
      oneOf: [
        { test: /\.lockb$/, use: 'null-loader' },
        { test: /\.xml$/, use: 'null-loader' },
      ],
    });
    // handle svg files
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    // handle markdown files – note: forcing esModule:false can fix issues
    config.module.rules.push({
      test: /\.md$/,
      use: { loader: 'raw-loader', options: { esModule: false } },
    });
    // restrict context for blog posts
    const blogPath = path.join(__dirname, 'data/blog');
    config.plugins.push(
      new webpack.ContextReplacementPlugin(
        /data\/blog/,
        blogPath,
        false,
        /\.md$/
      )
    );
    // refine rule for public directory files
    config.module.rules.push({
      resourceQuery: /\/public\/.+$/,
      use: 'null-loader',
    });
    return config;
  },
  experimental: {
    outputFileTracing: false,
  },
  output: 'export',
};

module.exports = nextConfig;
