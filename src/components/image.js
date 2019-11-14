import React from 'react';

export default class Image extends React.Component {
    render() {
        let customClass = this.props.classes ? this.props.classes : "img-fluid"
        return (
            <img src="http://rxi.iscdn.net/2016/03/120948_windowlicker.jpg" className={ customClass } alt="Responsive image"></img>
        )
    }
}
