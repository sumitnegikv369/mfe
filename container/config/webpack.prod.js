const { merge } = require("webpack-merge");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const commonConfig = require("./webpack.common");
const packageJson = require("../package.json");
const deps = packageJson.dependencies;

const domain = process.env.PRODUCTION_DOMAIN;

const prodConfig = {
  mode: "production",
  output: {
    filename: "[name].[contenthash].js",
    clean: true,
  },
  // plugins: [
  //   new ModuleFederationPlugin({
  //     name: "container",
  //     remotes: {
  //       marketing: `marketing@${domain}/marketing/remoteEntry.js`,
  //     },
  //     shared: {
  //       ...deps,
  //     },
  //   }),
  // ],
};

module.exports = merge(commonConfig, prodConfig);
