# Web Dev Chris Hawkes 2019

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
