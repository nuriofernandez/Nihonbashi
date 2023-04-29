import React, { Component } from 'react'

import "./style.css"

class BoxArea extends Component {

    render() {
        return (
            <div className="BoxArea">
                {this.props.children}
            </div>
        );
    }

}

export default BoxArea;