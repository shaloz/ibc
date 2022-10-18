import CopyWebpackPlugin from "copy-webpack-plugin";
import merge from "webpack-merge";
import WebpackBaseConfiguration from "./webpack.base.babel";

export default merge(WebpackBaseConfiguration, {
  mode: "production",
  externals: [
    function (context, request, callback) {
      if (/\deployments\/config\/config\.json$/.test(request)) {
        return callback(null, `commonjs /deployments/config/app/config.json`);
      }
      callback();
    },
  ],
  plugins: [
    new CopyWebpackPlugin([
      {
        from: "../config",
        to: "config",
      },
    ]),
  ],
});
