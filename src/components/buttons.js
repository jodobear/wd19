import React from 'react';

export default class Button extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: "Hey there windowlicker!"
        }
    }

    myClick() {
        this.setState({ title: this.state.title === "Hey there windowlicker!" ? "Lick 'em good!" : "Hey there windowlicker!" })
    }

    render() {
        return (
            <button onClick={() => { this.myClick() }}>{this.state.title}</button>
        )
    }
}