import React, { Component } from 'react'

import "./style.css"

class Button extends Component {

    render() {
        return (
            <button className="Button" {...this.props}>
                { this.props.children}
            </button >
        );
    }

}

export default Button;