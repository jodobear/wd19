# Webpack Dev Server

* Webpack takes all of our assets and outputs them to a production-ready bundle.
* Bundles JavaScripts into one file.
* Minimize http requests.
* Convert JSX or ES2015 or ES6 into vanilla JS which browsers understand.

Executes all the html, css & js on the fly, keeps in memory and displays it. Refreshes(hot reloading) on every code change.

If you don't have `index.html` then it will display the project directory.

Added `webpack.config.js` file. Read the comments there.

## Notes on webpack.config.js

In `devServer`, `open: 'google-chrome'`, `goolge-chrome` is browser application name, which is platform dependent. Don't hard code it in reusable modules. For example, 'Chrome' is `Google Chrome` on macOS, `google-chrome` on Linux and `chrome` on Windows.

`watch: true,`  to not restart webpack server every time we make code changes.
`devtool: 'source-map',` has few options - source-map = maps code, transpired coce, minified code, etc. Understand how this works.

In `output`:

`filename: '[name].bundle.js',` output name of the webpack bundle
`path: path.resolve(__dirname, 'dist')` here `.resolve` gets current dir and concatenates it with the files and such.
`dist` is the output folder. Distribution directory containing bundles for production. Source will be in src
