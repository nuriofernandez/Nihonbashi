import React, { Component } from 'react'

import QuestionDialog from '../../views/QuestionDialog'

import CharacterGenerator from './generator'

class RomanjiToHiragana extends Component {

    state = {
        locked: true,
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
            locked: false,
            correct: correct,
            answers: CharacterGenerator.generateAnswers(correct)
        });
    }

    handleAnswer(answerId) {
        const { correct, answers } = this.state;
        const answerCharacter = answers[answerId];

        this.setState({
            locked: true
        });

        setTimeout(() => {
            if (correct.romanji == answerCharacter.romanji) {
                this.handleCorrect();
            } else {
                this.handleFail();
            }
        }, 500);
    }

    handleFail() {
        setTimeout(() => this.setState({
            locked: false
        }), 500);
    }

    handleCorrect() {
        setTimeout(() => this.regenerate(), 1000);
    }

    render() {
        const { correct, answers, locked } = this.state;
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
                locked={locked}
            />
        );
    }

}

export default RomanjiToHiragana;