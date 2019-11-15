# Web Dev Chris Hawkes 2019

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