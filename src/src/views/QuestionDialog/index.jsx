import React, { Component } from 'react'

import BoxArea from '../../components/BoxArea'
import Button from '../../components/Button'
import Preview from '../../components/Preview'

import "./style.css"

class QuestionDialog extends Component {

    render() {
        return (
            <BoxArea>
                <div className="QuestionDialog_area">
                    <div className="QuestionDialog_preview">
                        <Preview>つ</Preview>
                    </div>
                    <div className="QuestionDialog_answers">
                        <Button>tsu</Button>
                        <Button>ku</Button>
                        <Button>shi</Button>
                        <Button>go</Button>
                    </div>
                </div>
            </BoxArea>
        );
    }

}

export default QuestionDialog;