import React, { Component } from 'react'

import "./style.css"

class Preview extends Component {

    render() {
        return (
            <h1 className="Preview">{this.props.children}</h1>
        );
    }

}

export default Preview;