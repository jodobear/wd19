import React from 'react';

export default class Grid extends React.Component {
    render() {
        return (
            <div className="container">
            <div className="row">
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
