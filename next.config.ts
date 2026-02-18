/** @type {import('next').NextConfig} */
const nextConfig = {
     experimental: {
    esmExternals: true,
    swcPlugins: [],
  },
};

// const withBundleAnalyzer = require("@next/bundle-analyzer")({
//   enabled: process.env.ANALYZE === "true",
// });

// module.exports = withBundleAnalyzer(nextConfig);
export default nextConfig
