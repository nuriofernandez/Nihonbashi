import React, { Component } from 'react'

import QuestionDialog from '../../views/QuestionDialog'

import CharacterGenerator from './generator'

class RomanjiToHiragana extends Component {

    state = {
        correct: { hiragana: "...", romanji: "..." },
        answers: [
            { hiragana: "...", romanji: "..." },
            { hiragana: "...", romanji: "..." },
            { hiragana: "...", romanji: "..." },
            { hiragana: "...", romanji: "..." }
        ]
    };

    componentDidMount() {
        this.regenerate();
    }

    regenerate() {
        const correct = CharacterGenerator.randomCharacter();
        this.setState({
            correct: correct,
            answers: CharacterGenerator.generateAnswers(correct)
        });
    }

    handleAnswer(answerId) {
        const { correct, answers } = this.state;
        const ansertCharacter = answers[answerId];

        if (correct.romanji == ansertCharacter.romanji) {
            this.handleCorrect();
        } else {
            this.handleFail();
        }

        this.regenerate();
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