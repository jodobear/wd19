const path = require('path');

module.exports = {
    entry: {
        app: './src/index.js'  // entry point to our app.
    },
    devServer: {
        hot: true,  // enables hot reloading
        compress: true  // optimazation
    },
    watch: true,  // so that we don't to restart webpack server all the time
    devtool: 'source-map',  // Has few options - source-map = maps code, transpired coce, minified code, etc. Understand how this works.
    output: {
        filename: `[name].bundle.js`,  // output name of the webpack bundle
        path: path.resolve(__dirname, 'dist')  // .resolve: get current dir and concatenates it with the files and such.
        // dist: output folder (also concatenated to current dir through path). Distribution directory containing bundles for production. Source will be in src
    },
}