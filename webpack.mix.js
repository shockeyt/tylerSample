let mix = require('laravel-mix');
let glob = require('glob');

let sassFiles = [];
let options = [];

mix.setResourceRoot('/');

// getJSFiles()
// 	.then(function(jsFiles){
// 		mix.babel(jsFiles, 'assets/scripts.js')
// 			.sourceMaps(false, 'source-map');
// 	});
	
mix.sass('scss/global.scss', 'assets/')
	.sourceMaps(true, 'source-map')


// async function getJSFiles(){
// 	let jsFiles = [];

// 	await glob.sync("assets/js/*.js").map(file => {
// 		jsFiles.push(file);
// 	});
// 	await glob.sync("components/**/*.js").map(file => {
// 		jsFiles.push(file);
// 	})
// 	await glob.sync("blocks/**/*.js").map(file => {
// 		jsFiles.push(file);
// 	});
// 	return jsFiles;
// }
