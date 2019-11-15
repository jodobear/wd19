# Web Dev Chris Hawkes 2019

## 11/09 - SASS Setup

### SASS

* Built on top of CSS. Not a programming language but, makes CSS programmable. Browsers can't interpret SASS. When you write SASS, it converts it to CSS.
* Installation:

        npm install --save-dev sass-loader node-sass css-loader mini-css-extract-plugin
* `sass-loader` gives webpack the ability to load SASS files on the fly.
* `node-sass` converts SASS to CSS.
* `css-loader` when `node-sass` converts SASS files to CSS, we then need `css-loader` for webpack include all the CSS files into all the HTML and wherever.
* `mini-css-extract-plugin` required to make `css-loader` and `webpack-dev-server` work well.

### Other dependencies for better code

    npm install --save-dev clean-webpack-plugin html-webpack-plugin

* `clean-webpack-plugin` deletes previous distribution files every we build the project so we don't have to worry about overwriting them or permission issues.
* `html-webpack-plugin` bridges the gap between `webpack-dev-server` and `webpack` itself to display all the HTML, CSS and JS bundle.

### Optimization & Plugin notes on webpack.config.js

After installing all the plugins, you need to add references (akin to importing in python?) to them to the `webpack.config.js` as `const CleanWebpackPlugin = require('clean-webpack-plugin');`

Then we need to identify these configuration objects that the plugins need. We started with `optimization: {...};`

#### Notes on Optimization

* `treeShaking` webpack doesn't bring in code that is not being used
* `splitChucks` caching of certain files that are used over and over like `jQuery`, etc.

We also referenced webpack inside the `webpack.config.js` as `const webpack = require('webpack');` because;

#### Notes on Plugins

 An array of js objects. We instantiate

* `CleanWebpackPlugin` All files inside webpack's output.path directory will be removed once, but the directory itself will not be. If using webpack 4+'s default configuration, everything under `<PROJECT_DIR>/dist/` will be removed. Use cleanOnceBeforeBuildPatterns to override this behavior. During rebuilds, all webpack assets that are not used anymore will be removed automatically.

* `MiniCssExtractPlugin` takes arguments; `filename` which is the output of for all the CSS it will build and `chunkFilename` for chunks(?)

#### Notes on Module

Then we define the `module` object that configures the SASS loader to get webpack to load SASS files then compile it to CSS then webpack-dev-server picks it up, cleans it for produciton, render it up, include it in HTML and spit it out. It does it all in memory.

In it we defined an array of objects called `rules`. Runs through the code to test for files ending with `scss` using regex `/\.scss$/` and then `use` the `sass-loader` and `MiniCssExtractPlugin.loader` to load the file, which takes an object `loader: "css-loader"`.

#### Notes on HotModuleReplacementPlugin

This complies and reloads all the code changes that use different modules like React and such on the fly.

#### Notes on HtmlWebpackPlugin

Then we deleted the `index.html` file because we want it to be created automatically. This is where `HtmlWebpackPlugin` comes in.

Before we deleted the `index.html`, we got an error page with `Cannot GET /` and in console `Failed to load resource: the server responded with a status of 404 (Not Found)` for `favicon.ico`.

After deleting it and adding `HtmlWebpackPlugin` we get a page built and it displayed the alert `Hello, World!` which was in our `./src/index.js` at the time. Though we can't see the `index.html` file anywhere yet.

After all of this we create a `./src/sass` folder which contains all our `*.scss` files. This is then imported into the `*.js` files using `import '<PathToFile>/file.scss'`
