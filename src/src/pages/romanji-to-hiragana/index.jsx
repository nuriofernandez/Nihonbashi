import React, { Component } from 'react'

import Maths from '../../utils/Maths'

import { characters } from './characters-database'
import QuestionDialog from '../../views/QuestionDialog'

class RomanjiToHiragana extends Component {

    state = {
        correct: characters[0],
        answers: [
            characters[0],
            characters[1],
            characters[2],
            characters[3]
        ]
    };

    handleAnswer(answerId) {
        const correct = characters[Maths.randomNumberBetween(0, 20)];
        this.setState({
            correct: correct,
            answers: this.generateAnswers(correct)
        })
    }

    generateAnswers(correctAnswer) {
        return [
            correctAnswer,
            characters[Maths.randomNumberBetween(0, 20)],
            characters[Maths.randomNumberBetween(0, 20)],
            characters[Maths.randomNumberBetween(0, 20)]
        ].sort(() => .5 - Math.random());
    }

    handleFail() {
        alert("NOPE");
    }

    handleCorrect() {
        alert("ZI");
    }

    render() {
        const { correct, answers } = this.state;
        const romanjiAnsewers = [
            answers[0].romanji,
            answers[1].romanji,
            answers[2].romanji,
            answers[3].romanji
        ]
        return (
            <QuestionDialog
                handleAnswer={(answerId) => this.handleAnswer(answerId)}
                correct={correct.hiragana}
                answers={romanjiAnsewers}
            />
        );
    }

}

export default RomanjiToHiragana;