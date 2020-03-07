const path = require('path');

module.exports = {
	configureWebpack: {
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
};
