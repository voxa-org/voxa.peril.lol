const path = require('path');
const webpack = require('webpack');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'github.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.apple.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: '/install',
        destination: '/scripts/install',
      },
    ];
  },
  webpack: (config, options) => {
    // Add a rule to ignore the install script so it's not processed by webpack.
    config.module.rules.push({
      test: /public\/scripts\/install$/,
      use: 'null-loader',
    });
    
    // ignore binary files and xml files
    config.module.rules.push({
      oneOf: [
        { test: /\.lockb$/, use: 'null-loader' },
        { test: /\.xml$/, use: 'null-loader' },
      ],
    });
    // handle svg files with svgr
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    // load markdown files as raw strings
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
    // ignore files from the public directory if needed
    config.module.rules.push({
      resourceQuery: /\/public\/.+$/,
      use: 'null-loader',
    });
    // ignore repomix-output.txt (if still present)
    config.module.rules.push({
      test: /\.txt$/,
      use: 'null-loader',
    });
    return config;
  },
};

module.exports = nextConfig;