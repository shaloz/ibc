import CopyWebpackPlugin from "copy-webpack-plugin";
import path from "path";
import { StatsWriterPlugin } from "webpack-stats-plugin";
import webpackNodeExternals from "webpack-node-externals";
import { description, name, version } from "../../package.json";
import { BannerPlugin, DefinePlugin } from "webpack";

export default {
  target: "node",
  devtool: "inline-source-map",
  context: path.join(__dirname, "../../src"),
  entry: {
    index: "./index.ts",
  },
  externals: [webpackNodeExternals()],
  output: {
    path: path.join(__dirname, "../../dist"),
    filename: "[name].js",
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: {
          loader: "ts-loader",
          options: {
            transpileOnly: true,
          },
        },
        exclude: /node_modules/,
      },
      {
        test: /\.js?$/,
        use: "babel-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  plugins: [
    new BannerPlugin({ banner: "(c) iBeautyConnect. All rights reserved" }),
    new DefinePlugin({
      "process.env.APPDESCRIPTION": JSON.stringify(description),
      "process.env.APPNAME": JSON.stringify(name),
      "process.env.APPVERSION": JSON.stringify(version),
    }),
    new CopyWebpackPlugin({
      patterns: ["../package.json", "../package-lock.json"],
    }),
    new StatsWriterPlugin({ filename: "../dist/stats-server.json", stats: { all: false, assets: true } }),
  ],
};
