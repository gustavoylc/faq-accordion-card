const path = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const TerserWebpackPlugin = require("terser-webpack-plugin");
const CssMinimizerWebpackPlugin = require("css-minimizer-webpack-plugin");

module.exports = {
	entry: "./src/index.jsx",
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "bundle.js",
		publicPath: "/",
		assetModuleFilename: "assets/images/[hash][ext][query]",
	},
	mode: "development",
	resolve: {
		extensions: [".js", ".jsx"],
		alias: {
			"@components": path.resolve(__dirname, "src/components/"),
			"@pages": path.resolve(__dirname, "src/pages/"),
			"@images": path.resolve(__dirname, "src/assets/images"),
			"@hooks": path.resolve(__dirname, "src/hooks/"),
		},
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
				},
			},
			{
				test: /\.html$/,
				use: {
					loader: "html-loader",
				},
			},
			{
				test: /\.css$/,
				use: {
					loader: "css-loader",
				},
			},
			{
				test: /\.(png|jpg|svg)$/,
				type: "asset",
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: "./public/index.html",
			filename: "./index.html",
		}),
		new MiniCssExtractPlugin({
			filename: "assets/[name].css",
		}),
	],
	devServer: {
		historyApiFallback: true,
		allowedHosts: path.join(__dirname, "dist"),
		compress: true,
		port: 8080,
	},
	optimization: {
		minimize: true,
		minimizer: [new CssMinimizerWebpackPlugin(), new TerserWebpackPlugin()],
	},
};
