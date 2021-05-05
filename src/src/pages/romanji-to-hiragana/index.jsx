import React, { Component } from 'react'

import QuestionDialog from '../../views/QuestionDialog'

class RomanjiToHiragana extends Component {

    handleFail() {
        alert("NOPE");
    }

    handleCorrect() {
        alert("ZI");
    }

    render() {
        return (
            <QuestionDialog
                handleFail={this.handleFail}
                handleCorrect={this.handleCorrect}
            />
        );
    }

}

export default RomanjiToHiragana;