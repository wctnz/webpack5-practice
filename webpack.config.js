const path = require("path")
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const { CleanWebpackPlugin } = require("clean-webpack-plugin")

const isDevelopment = process.env.NODE_ENV !== 'production';

let mode = "development"
let target = "web"
const plugins = [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({
        template: "./src/index.html"
    })
]

if (process.env.NODE_ENV === "production") {
    target = "browserslist"
} else {
    plugins.push(new ReactRefreshWebpackPlugin())
}

module.exports = {
    mode: isDevelopment ? 'development' : 'production',
    target: target,

    entry: "./src/index.js",

    output: {
        path: path.resolve(__dirname, "dist"),
        assetModuleFilename: "images / [hash][ext][query]"
    },

    module: {
        rules: [
            {
                test: /\.(png|gpe?g|gif|svg)$/i,
                type: "asset/inline"
            },
            {
                test: /\.s?css$/i,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: ""
                        }
                    }, "css-loader", "postcss-loader", "sass-loader"]
            },
            {
                test: /\.jsx?$/,
                exclude: /node_module/,
                use: {
                    loader: "babel-loader"
                }
            }
        ]
    },

    plugins: plugins,

    resolve: {
        extensions: [".js", ".jsx"]
    },

    devtool: "source-map",
    devServer: {
        static: "./dist",
        hot: true
    }
}