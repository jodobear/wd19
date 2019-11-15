# Web Dev Chris Hawkes 2019

## 021 - Flexbox

Added a `nav` tag with 3 anchor links to test the responsive design which was configured as follows:

    nav {
      display: flex; // tells nav element to use flexbox for display
      div {
        flex-grow: 1; // each div element has a value of 1 wrt each other.
      }
    }

`flex-grow` is good since, it's easier to work with rather than floats and percentages of each component.

## 022 - Element Selection in CSS/SASS

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

## 023 - React State

Created a `Button` component. Elementary button:

    export default class Button extends React.Component {
        render() {
            return (
                <button onClick={() => alert('hello, world!')}>click me!</button>
            )
        }
    }

### Adding State to button:

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

## 024 - Displaying Images and Creating Custom Classes

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