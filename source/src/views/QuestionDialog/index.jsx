import React, {Component} from 'react'

import Button from '../../components/Button'
import Preview from '../../components/Preview'

import "./style.css"

class QuestionDialog extends Component {

    render() {
        const {answers, correct, handleAnswer, locked, shake} = this.props;

        const extra = shake ? " wrong" : "";
        return (
            <div className="QuestionDialog_area">
                <div className={`QuestionDialog_preview${extra}`}>
                    <Preview>{correct}</Preview>
                </div>
                <div className={`QuestionDialog_answers${extra}`}>
                    <Button disabled={locked} onClick={() => handleAnswer(0)}>{answers[0]}</Button>
                    <Button disabled={locked} onClick={() => handleAnswer(1)}>{answers[1]}</Button>
                    <Button disabled={locked} onClick={() => handleAnswer(2)}>{answers[2]}</Button>
                    <Button disabled={locked} onClick={() => handleAnswer(3)}>{answers[3]}</Button>
                </div>
            </div>
        );
    }

}

export default QuestionDialog;
