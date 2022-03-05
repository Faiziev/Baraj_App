const withTM = require("next-transpile-modules")(
  ["@ladifire-opensource/stylex"],
  { unstable_webpack5: true }
);
const withStylex = require("@ladifire-opensource/stylex-nextjs-plugin");

module.exports = withStylex({
  inject: true, // for nextjs, we must inject style to head
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
  images: {
    domains: ['i.ibb.co'],
  },
})(withTM());