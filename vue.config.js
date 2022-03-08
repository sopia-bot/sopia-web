const path = require('path');
const PrerenderSpaPlugin = require('prerender-spa-plugin');

const plugins = [];

if ( process.argv[2] === "build" ) {
	plugins.push(new PrerenderSpaPlugin({
		staticDir: path.join(__dirname, 'dist'),
		indexPath: path.join(__dirname, 'dist', 'index.html'),
		captureAfterTime: 5000,
		routes: [
			"/",
		],
	}));
}

module.exports = {
	configureWebpack: {
		plugins,
		resolve: {
			alias: {
				'@': path.join(__dirname, 'src/'),
				'#': path.join(__dirname, 'src/assets/docs/'),
			},
		},
		output: {
			filename: "dist/[name].js",
			chunkFilename: "dist/[name].js"
		},
		devServer: {
			headers: {
				"Access-Control-Allow-Origin": "*",
				"Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
				"Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"
			},
		},
	},
	transpileDependencies: ["vuetify"],
    runtimeCompiler: true,
};
