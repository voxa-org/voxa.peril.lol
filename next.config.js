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
    // ignore binary and xml files
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
    // handle markdown files
    config.module.rules.push({
      test: /\.md$/,
      use: { loader: 'raw-loader', options: { esModule: false } },
    });
    // refine context for blog posts
    const blogPath = path.join(__dirname, 'data/blog');
    config.plugins.push(
      new webpack.ContextReplacementPlugin(
        /data\/blog/,
        blogPath,
        false,
        /\.md$/
      )
    );
    // ignore files from public directory if needed
    config.module.rules.push({
      resourceQuery: /\/public\/.+$/,
      use: 'null-loader',
    });
    // optionally, ignore .txt files if repomix-output.txt remains in your repo
    config.module.rules.push({
      test: /\.txt$/,
      use: 'null-loader',
    });
    return config;
  },
  experimental: {
    // remove unsupported keys like outputFileTracing if next.js 14 doesn't support them
  },
  output: 'export'
};

module.exports = nextConfig;