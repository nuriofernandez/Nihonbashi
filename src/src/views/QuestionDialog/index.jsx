import React, { Component } from 'react'

import BoxArea from '../../components/BoxArea'
import Button from '../../components/Button'
import Preview from '../../components/Preview'

import "./style.css"

class QuestionDialog extends Component {

    render() {
        const { answers, correct, handleAnswer } = this.props;

        return (
            <BoxArea>
                <div className="QuestionDialog_area">
                    <div className="QuestionDialog_preview">
                        <Preview>{correct}</Preview>
                    </div>
                    <div className="QuestionDialog_answers">
                        <Button onClick={() => handleAnswer(0)}>{answers[0]}</Button>
                        <Button onClick={() => handleAnswer(1)}>{answers[1]}</Button>
                        <Button onClick={() => handleAnswer(2)}>{answers[2]}</Button>
                        <Button onClick={() => handleAnswer(3)}>{answers[3]}</Button>
                    </div>
                </div>
            </BoxArea>
        );
    }

}

export default QuestionDialog;