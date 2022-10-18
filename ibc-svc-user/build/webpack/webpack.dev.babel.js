import merge from 'webpack-merge';
import WebpackBaseConfiguration from './webpack.base.babel'

export default merge(
    WebpackBaseConfiguration, {
        mode: "development",
        entry: {
            index: "./index.dev.ts"
        }
    }
)