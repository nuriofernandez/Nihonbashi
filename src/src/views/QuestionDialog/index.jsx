import React, { Component } from 'react'

import BoxArea from '../../components/BoxArea'
import Button from '../../components/Button'
import Preview from '../../components/Preview'

import "./style.css"

class QuestionDialog extends Component {

    state = {
        correct: "...",
        answers: ["...", "...", "...", "..."]
    };

    constructor(props) {
        super(props);

        // TODO use something like a map for this.
        this.state = {
            correct: "つ",
            answers: ["tsu", "ku", "shi", "go"]
        }
    }

    handleAnswer(answerId) {
        const answer = this.state.answers[answerId];
        const { correct } = this.state;

        if (answer !== correct) {
            this.handleFail();
            return;
        }

        this.handleCorrect();
    }

    handleFail() {
        alert("NO!");
    }

    handleCorrect() {
        alert("YESHHH");
    }

    render() {
        return (
            <BoxArea>
                <div className="QuestionDialog_area">
                    <div className="QuestionDialog_preview">
                        <Preview>{this.state.correct}</Preview>
                    </div>
                    <div className="QuestionDialog_answers">
                        <Button onClick={() => this.handleAnswer(0)}>{this.state.answers[0]}</Button>
                        <Button onClick={() => this.handleAnswer(1)}>{this.state.answers[1]}</Button>
                        <Button onClick={() => this.handleAnswer(2)}>{this.state.answers[2]}</Button>
                        <Button onClick={() => this.handleAnswer(3)}>{this.state.answers[3]}</Button>
                    </div>
                </div>
            </BoxArea>
        );
    }

}

export default QuestionDialog;