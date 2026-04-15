const defaultConfig = require('@wordpress/scripts/config/webpack.config');
const path = require('path');

module.exports = {
	...defaultConfig,
	entry: {
		'team-cards-editor-script': path.resolve(__dirname, 'src/blocks/team-cards/index.js'),
		'team-cards-editor-style': path.resolve(__dirname, 'src/css/team-cards/editor.scss'),
		'team-cards-frontend-script': path.resolve(__dirname, 'src/blocks/team-cards/frontend.js'),
		'team-cards-frontend-style': path.resolve(__dirname, 'src/css/team-cards/frontend.scss'),
		'team-card-editor-script': path.resolve(__dirname, 'src/blocks/team-card/index.js'),
		'team-card-editor-style': path.resolve(__dirname, 'src/css/team-card/editor.scss'),
		'team-card-frontend-script': path.resolve(__dirname, 'src/blocks/team-card/frontend.js'),
		'team-card-frontend-style': path.resolve(__dirname, 'src/css/team-card/frontend.scss'),
	},
	output: {
		...defaultConfig.output,
		path: path.resolve(__dirname, 'build'),
		filename: '[name].js',
	},
};
