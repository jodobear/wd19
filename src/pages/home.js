import React from 'react';
import Header from '../components/header';
import Grid from '../components/grid';

export default class Home extends React.Component {
    render() {
        let person = "Window";
        const func = () => {
            console.log('Yo! Peak dynamic!')
            return "adelik";
        }
        return (
            <div>
                <Header title={this.props.title ? this.props.title : "no title given nor where this component is instantiated."}></Header>
                <Grid data={[<div><h1>holy crap, an html header</h1></div>, "Second column Title", "THIRD", person, "Funk" + func()]} />
            </div>
        )
    }
}