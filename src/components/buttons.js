import React from 'react';

export default class Button extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: "Hey Windowlicker!"
        }
    }

    myClick() {
        this.setState({ title: this.state.title === "Hey Windowlicker!" ? "Lick some windows" : "Hey Windowlicker!" })
    }

    render() {
        return (
            <button onClick={() => { this.myClick() }}>{this.state.title}</button>
        )
    }
}