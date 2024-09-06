const { merge } = require("webpack-merge");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const commonConfig = require("./webpack.common");
const packageJson = require("../package.json");
const deps = packageJson.dependencies;

const domain = 'https://mfe-45s4.vercel.app';

const prodConfig = {
  mode: "production",
  output: {
    filename: "[name].[contenthash].js",
    clean: true,
    publicPath: "/",
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "container",
      remotes: {
        marketing: `marketing@${domain}/remoteEntry.js`,
      },
      shared: {
        ...deps,
      },
    }),
  ],
};

module.exports = merge(commonConfig, prodConfig);
