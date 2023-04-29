import React, { Component } from 'react'

import QuestionDialog from '../../views/QuestionDialog'

import CharacterGenerator from './generator'
import { characters } from './characters-database'
import Maths from "../../utils/Maths";

class RomanjiToKatakana extends Component {

    state = {
        locked: true,
        playEffect: false,
        known: [],
        correct: { katakana: "...", romanji: "..." },
        answers: [
            { katakana: "...", romanji: "..." },
            { katakana: "...", romanji: "..." },
            { katakana: "...", romanji: "..." },
            { katakana: "...", romanji: "..." }
        ]
    };

    componentDidMount() {
        this.regenerate();
    }

    generateNotKnownCharacter() {
        const { known } = this.state;

        const unknowns = characters.filter(char => {
            return !known.some(k => k.katakana === char.katakana);
        });

        if (unknowns.length === 0) {
            alert("OVER!")
            unknowns.push({katakana: "💞️", romanji: "💞"})
        }

        return unknowns[Maths.randomNumberBetween(0, unknowns.length - 1)];
    }

    regenerate() {
        const correct = this.generateNotKnownCharacter()
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
            if (correct.romanji === answerCharacter.romanji) {
                this.handleCorrect();
            } else {
                this.handleFail();
            }
        }, 100);
    }

    handleFail() {
        this.setState({
            playEffect: true
        })
        setTimeout(() => {
            this.setState({
                locked: false,
                playEffect: false
            })
        }, 1500);
    }

    handleCorrect() {
        this.setState({
            playEffect: false
        })

        const { correct, known } = this.state;
        known.push(correct)
        this.setState({
            known: known
        })

        setTimeout(() => {
            this.regenerate()
            this.setState({
                locked: false,
                playEffect: false
            })
        }, 500);
    }

    render() {
        const { correct, answers, locked, playEffect } = this.state;
        const romanjiAnsewers = [
            answers[0].romanji,
            answers[1].romanji,
            answers[2].romanji,
            answers[3].romanji
        ]

        return (
            <QuestionDialog shake={playEffect}
                handleAnswer={(answerId) => this.handleAnswer(answerId)}
                correct={correct.katakana}
                answers={romanjiAnsewers}
                locked={locked}
            />
        );
    }

}

export default RomanjiToKatakana;
