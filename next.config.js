// next.config.js
const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
});
module.exports = withMDX({
  pageExtensions: ["js", "jsx", "mdx"],
});
module.exports = {
  typescript: {
    ignoreBuildErrors: true,
  },
};
