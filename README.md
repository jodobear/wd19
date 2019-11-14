# Web Dev 19 Chris Hawkes 19-11-08

## 11/08 - Setup

* Using `npm init` to create our node/npm project > results in `package.json`.
* `package.json` project info & dependencies.
* Developer dependencies & Project Dependencies:

        npm install --save-dev webpack webpack-cli webpack-dev-server

* `--save-dev` installs webpack for developer use. It isn't added to the project/production dependencies.
* `npm install --save webpack ...` will save to project dependency.
* As we installed above, it installed it in `node_modules` directory, which is where all the node modules/packages are stored. Add this to `.gitignore`.
* `package-lock.json` is internal `node` functionality that keeps track of `package.json`. Don't mess with it.
* `"buildDev": "webpack-dev-server",` added within `scripts` object in `package.json`. With this now we can run `npm run buildDev` to spin it up.
* If you run it now, will fail since it requires `src` directory.
* After creating `src` if you run `npm run buildDev`, it spins up the `webpack-dev-server` and at `localhost:8080` displays you `index.html`.

### Webpack Dev Server

* Webpack takes all of our assets and outputs them to a production-ready bundle.
* Bundles JavaScripts into one file.
* Minimize http requests.
* Convert JSX or ES2015 or ES6 into vanilla JS which browsers understand.

Executes all the html, css & js on the fly, keeps in memory and displays it. Refreshes(hot reloading) on every code change.

If you don't have `index.html` then it will display the project directory.

Added `webpack.config.js` file. Read the comments there.

### Notes on webpack.config.js

In `devServer`, `open: 'google-chrome'`, `goolge-chrome` is browser application name, which is platform dependent. Don't hard code it in reusable modules. For example, 'Chrome' is `Google Chrome` on macOS, `google-chrome` on Linux and `chrome` on Windows.

`watch: true,`  to not restart webpack server every time we make code changes.
`devtool: 'source-map',` has few options - source-map = maps code, transpired coce, minified code, etc. Understand how this works.

In `output`:

`filename: '[name].bundle.js',` output name of the webpack bundle
`path: path.resolve(__dirname, 'dist')` here `.resolve` gets current dir and concatenates it with the files and such.
`dist` is the output folder. Distribution directory containing bundles for production. Source will be in src

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

### Setting up Bootstrap

CSS library that makes above all other things writing responsive design very easy. Bootstrap 4 uses SASS.

We downloaded the zipped `source` and extracted the `scss` directory into `./src/scss/bootstrap`. Then we import whatever we want from there into our js files and it will use all the CSS defined in the bootstrap library. Currently we imported `./src/sass/bootstrap/scss/bootstrap.scss`.

### Installing React

    npm install --save react react-dom

* You can see both in `package.json` it's under `dependencies` not `devdependencies`.

        npm install --save-dev @babel/core @babel/preset-env @babel/preset-react babel-loader terser-webpack-plugin

`@babel/preset-react` to be able to run JSX code within React.
`babel-loader` to load and compile JS modules.
`terser-webpack-plugin` to minify and uglify our JS code. Instantiated in `webpack.config.js`

* To minimize our CSS, bootstrap and all the other CSS.  Instantiated in `webpack.config.js`:

        npm install --save-dev optimize-css-assets-webpack-plugin`

#### Notes on Minimizer in webpack.config.js

Added `minimizer` within `optimize` array object containing:

* `TerserPlugin` with parameters `parallel: true` to compile faster and `terserOptions` object with `ecma: 6` so that the minimizer doesn't freak out to find ECMAScript 6.
* `OptimizeCss` object that that takes an object `cssProcessorOptions` with an object argument `discarComments: true`.

### Separating Build & Production Environments

We add the flag `--mode development` to `"buildDev"` argument object in `"scripts"` `package.json` and below add another argument `"buildProd": "webpack-dev-server --mode production",`

## 11/11 - Babel & React

Added the rule for all `.js` files to be loaded through `babel-loader` except the `node_modules` dir to `webpack.config`

Then added a `resolve` object to `webpack.config` for all `.js` & `.scss` files to use the loaders specified in the config.

Then we tested the `webpack.config` by running `buildDev`, it loaded without issues.

## 11/12 - React

### Components/header.js

Created `components` dir in `src` which mostly contains React components.

Created a `header.js` component with following code:

    import React from 'react';

    export default class Header extends React.Component {
        render() {
            return (
                <h1>(this.props.title)</h1> <!--JSX-->
            )
        }
    }

Within `Header` we have a `render` function that returns `JSX`(html type) code with React (bable, really, in the background) into JS code.
`export default` makes this class exportable which we do in `index.js` as `import Header from './componenets/header';` just as any class from a library.

**NOTE:** Whenever you use HTML syntax in JS, it's JSX. Whenever you want to pass JS expressions withing JSX syntax JSX = JS(HTML{JS(...)}) - curly braces.

### Components/index.js

Imported `React, ReactDOM, Header` and used the `ReactDOM` object with `render` function and passed some JSX or element you want to bind to the DOM. Here first we instantiated the `Header` and bind our ReactDOM to the HTML element with `root` id, as:

        ReactDOM.render(
        <Header title="our custom message" />,
        document.getElementById('root')
    )

Once we have this component bound to an element with `root` id, webpack is going to look for it in `./src` dir. So, we created a skeleton HTML and difined a `div` element with `id=root`.

Another magic piece of config we configured to make the compilation for babel & React to work together, we defined a custom object and restarted our dev server:

        "babel": {
            "presets": [
                "@babel/preset-env",
                "@babel/react"
            ]
        }

This gave us a basic webpack app but, we got an error `Uncaught Error: Target container is not a DOM element.` which was resolved by adding following template to use our HTML skeleton to the `HTMLWebpackPlugin` in `webpack.config`:

    {
        template: './src/index.html'
    }

* NOTE: The automatic launching of Chrome wasn't working for some reason.

## 11/13 - React

### 015 - Code Reuse

Demonstrated how we used the `Header` component into a page (`Home`) which was rendered by ReactDOM in `index.js`, how if you want to change a property, modify the `Header` component of the `Home` page, you do it all in header.
Created `./src/pages` dir and `home.js`l page. Copied the Header code from `header.js`.

### 016 - GridView Example

Demonstrated code reuse by making a `grid` component and rendering it in the `home` page.

    // Grid code
    import React from 'react';

    export default class Grid extends React.Component {
        render() {
            return (
                <div className="container">
                <div className="row">
                    <div className="col-sm">
                    {this.props.dynamicTitle}
                    </div>
                    <div className="col-sm">
                    {this.props.dynamicVarTitle}
                    </div>
                    <div className="col-sm">
                    {this.props.dynamicFuncTitle}
                    </div>
                </div>
                </div>
            )
        }
    }

    // Adding Grid to Home
    export default class Home extends React.Component {
        render() {
            let person = "Window";
            const func = () => {
                console.log('Yo! Peak dynamic!');
            }
            return (
                <div>
                    <Header title="Windowlicker"></Header>
                    <Grid dynamicTitle="holy mo fo, this is dynamic" dynamicVarTitle={"Howdy, " + person} dynamicFuncTitle={"Check out console log" + func()} />
                </div>
            )
        }
    }

#### this.props

This is used when you need static content, when React doesn't have to monitor if the value it is rendering is changing, even though in the grid example we have `this.props.dynamicTitle` which is to demonstrate compartmentalization and code reuse.
To the `dynamicTitle`, `dynamicVarTitle` & `dynamicFuncTitle` props are self explanatory.

For dynamic content that changes, you want to use `States`

### 017 - Communication between React components

React usp is code reuse, so anytime there is dupllicate code there is an opportunity to use React.

Now, in the `Grid` class, we repetitively use the `<div>` component. Which was changed as follows:

    export default class Grid extends React.Component {
    render() {
        return (
            <div className="container">
            <div className="row"> <!--JSX-->
                {this.props.data.map((item, index) => {
                    return <div className="col-sm" key={index}>
                                {item}
                            </div>
                })}
            </div>
            </div>
        )
    }
}
Here, we passed a function `map` as the prop named `data` which retruns our grid with as many items provided wherever it's used.

To differentiate different instances of the `Grid` component we use the map function and pass the `index` to the key of the element.

**NOTE:** Anytime you need to pass JS expression from within JSX code you wrap it into curly braces as the object `{this.props.data.map(...)}`. JSX = JS(HTML{JS(...)})

Then to the `Grid` in `Home` was passed an array of `data` as below where, `const person = "Window"` & `func` is a function:

    <Grid data={[<div><h1>holy crap, an html header</h1></div>, "Second column Title", "THIRD", person, "Funk" + func()]} /> <!--JSX-->

You can pass functions, objects any fucking where! WTF!

### 018 - Conditional statements within JSX

We use ternary operators for conditional statements:

    <!--home.js where we define the title condidition-->
    <Header title={this.props.title ? this.props.title : "no title given nor where this component is instantiated."}></Header>

    <!--index.js where Home component is instantiated>
    ReactDOM.render(
        <Home title="Given title where instantiated, in `index.js`"></Home>,
        document.getElementById('root')
    )

In React when data gets passed down from one component to the other, it gets passed down through the props. And when dynamic nature of React kicks in, it uses States to keep track of all the changes between components. So, components can say, "Oh! My parent changed some property value that I'm paying attention to.", and it can re-render itself based on that.

You always want to look at React components as a box model type of thing, root component, then inner and inner and so on..

We can communicate through Signals & Hooks, but that's later too.

For now, most data is passed from outer component to the inner.

### Config for custom styling. DevTools in Chrome

Imported `main.scss` into `index.js` after `bootstrap.scss` so, it'll apply all the stylings in the `main.scss` after `bootstrap.scss` and we define our custom styling there.

And you never hardcode styling in any components.

Installed React Dev Tools in chrome.

Demo of sourcemaps in webpack to debug JS code.

### 021 - Flexbox

Added a `nav` tag with 3 anchor links to test the responsive design which was configured as follows:

    nav {
      display: flex; // tells nav element to use flexbox for display
      div {
        flex-grow: 1; // each div element has a value of 1 wrt each other.
      }
    }

`flex-grow` is good since, it's easier to work with rather than floats and percentages of each component.

### 022 - Element Selection in CSS/SASS

How to select a particular element within the DOM structure in CSS/SASS as demonstrated here by selecting the first element, the `first-child`:

    nav {
      display: flex;
      div {
        flex-grow: 1;
        padding-left: 2rem;
        padding-top: 2rem;
        padding-bottom: 2rem;
      }
      div:first-child {
        a {
          color: #333;
          font-size: 2rem;
          font-weight: bolder;
        }
      }
    }

**NOTE:** On CSS box model, `padding` is the space between the content and the `border`, whereas `margin` is the space outside the `border`.

![CSS Box Model](./css-box_model.png)

### 023 - React State

Created a `Button` component. Elementary button:

    export default class Button extends React.Component {
        render() {
            return (
                <button onClick={() => alert('hello, world!')}>click me!</button>
            )
        }
    }

#### Adding State to button

Anytime you have state, you need a `constructor` function from within your component and by default you need `super` and you need to pass `props` argument to `super` and `constructor` too.

    export default class Button extends React.Component {
        constructor(props) {
            super(props);

            this.state = {
                title: "original title"
            }
        }

        myClick() {
            this.setState({ title: "new dynamic title on click" })
        }

        render() {
            return (
                <button onClick={this.myClick()}>{this.state.title}</button>
            )
        }
    }
    // this.state: we define the state within the constructor which is a key-value pair and instead of hard coding in the button we pass this.state.title.
    // myClick(): then we define our function to pass to onClick() (which has to be outside constructor as it is its own function) instead of hard coding that function in the button.

The above code will break since you can't call the function `myClick()` as above since the `onClick()` will call `myClick()` which will change the `this.state.title` which will react to the state and it'll continue that in an infinite loop. What's happening is when the component displays, what you are telling it to do is fire `myClick()`, clicks the thing, changes the state and does this over and over again - **an infinite render loop**.

**Solution:** Instead of passing the function directly, pass an anonymous function which call on your function, like so:

    <button onClick={() => { this.myClick() }}>{this.state.title}</button>

**Making it toggleable:** Adding a ternary operator to `setState` within `myClick` function, like so:

    this.setState({ title: this.state.title === "Hey Windowlicker!" ? "Lick some windows" : "Hey Windowlicker!" })

### 024 - Displaying Images and Creating Custom Classes

Added an `image` component with a customClass which changes the bootstrap class that's applied to the image, like so:

    export default class Image extends React.Component {
        render() {
            let customClass = this.props.classes ? this.props.classes : "img-fluid"
            return (
                <img src="http://rxi.iscdn.net/2016/03/120948_windowlicker.jpg" className={ customClass } alt="Responsive image"></img>
            )
        }
    }

This way you can pass any class you want to display the image. You can define your own image or pass gibberish and still it'll be alright since there's a default class defined - `img-fluid`.

**NOTE:** `class` should be `className` since React or SASS it changes.

**NOTE:** When trying to add a local image, it somehow couldn't find it but, there was no problem sourcing an image from internet.

### 025 - Build

Added `build` to `package.json` for command `webpack --mode produciton`. To run we use `npm run build`.

This creates the `dist` folder with the production build. Till now even for `buildProd` we were using `webpack-dev-server`. The `dist` folder packages your entire app and creates the files; `app.bundle.js`, `app.bundle.LICENSE`, `app.bundle.js.map`, `index.html`, `style.css` all optimized and ready to be shipped.

Each of these files contain respective content all optimized. You don't really need the `index.html` since you'll be using some sort of framework like `ASP.NET` or `Django` or `Node.js` that have their own template engines to which you attach your `.js` & `.css` file and that is what you'll use.