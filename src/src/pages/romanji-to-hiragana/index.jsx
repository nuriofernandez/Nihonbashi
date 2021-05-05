import React, { Component } from 'react'

import { characters } from './characters-database'
import QuestionDialog from '../../views/QuestionDialog'

class RomanjiToHiragana extends Component {

    state = {
        correct: "...",
        answers: ["...", "...", "...", "..."]
    };

    handleAnswer(answerId) {
        this.setState({
            correct: characters[0].hiragana,
            answers: [
                characters[0].romanji,
                characters[1].romanji,
                characters[2].romanji,
                characters[3].romanji
            ]
        })
    }

    handleFail() {
        alert("NOPE");
    }

    handleCorrect() {
        alert("ZI");
    }

    render() {
        const { correct, answers } = this.state;
        return (
            <QuestionDialog
                handleAnswer={(answerId) => this.handleAnswer(answerId)}
                correct={correct}
                answers={answers}
            />
        );
    }

}

export default RomanjiToHiragana;