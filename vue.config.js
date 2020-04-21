const path = require('path');
const PrerenderSpaPlugin = require('prerender-spa-plugin');

const plugins = [];

if ( process.argv[2] === "build" ) {
	plugins.push(new PrerenderSpaPlugin({
		staticDir: path.join(__dirname, 'dist'),
		indexPath: path.join(__dirname, 'dist', 'index.html'),
		routes: [
			"/",
			"/docs/quick-start/install/",
			"/docs/quick-start/manager/",
			"/docs/quick-start/load-setting/",
			"/docs/quick-start/spoor-chat/",
			"/docs/menus/home/",
			"/docs/menus/code/",
			"/docs/menus/spoor-chat/",
			"/docs/menus/setting/",
			"/docs/menus/bundle/",
			"/docs/bundle/onoff/",
			"/docs/bundle/loop/",
			"/docs/bundle/signature/",
			"/docs/bundle/song-request/",
			"/docs/bundle/vote/",
			"/docs/api/start/",
			"/docs/api/sopia/",
			"/docs/api/var/",
			"/docs/api/config/",
			"/docs/api/itv/",
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
	},
	transpileDependencies: ["vuetify"],
    runtimeCompiler: true,
};
