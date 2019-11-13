import React from 'react';
import Header from '../components/header';
import Grid from '../components/grid';

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