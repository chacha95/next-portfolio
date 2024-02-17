const nextConfig = {
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  reactStrictMode: false,
  swcMinify: true,
  eslint: {
    // Disabling on production builds because we're running checks on PRs via GitHub Actions.
    ignoreDuringBuilds: true
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.w3.org',
        pathname: '**'
      },
      {
        protocol: 'https',
        hostname: '**.amazonaws.com',
        pathname: '**'
      }
    ]
  },
  async redirects() {
    return [
      {
        source: '/password',
        destination: '/',
        permanent: true
      }
    ];
  },
  compiler: {
    styledComponents: true
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        fs: false,
        net: false,
        dns: false,
        child_process: false,
        tls: false
      };
    }

    return config;
  },
  output: 'standalone',
  experimental: {
    esmExternals: false,
    serverMinification: false,
    serverActions: {
      bodySizeLimit: '100mb'
    }
  }
};

export default nextConfig;
// module.exports = withPlugins([withBundleAnalyzer], nextConfig);