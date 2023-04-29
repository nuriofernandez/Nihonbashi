import React, { Component } from 'react'

import Preview from "../../components/Preview";
import "./style.css"
import {Link} from "react-router-dom";

class ScriptSelector extends Component {

    componentDidMount() {

    }

    render() {
        return (
            <div className={"selectorgrid"}>
                <Link to="/hiragana">
                    <Preview>ひ</Preview>
                </Link>
                <Link to="/full-hiragana">
                <Preview>ぴ</Preview>
                </Link>
                <Link to="/katakana">
                    <Preview>ヒ</Preview>
                </Link>
                <Link to="/full-katakana">
                    <Preview>ピ</Preview>
                </Link>
            </div>
        );
    }

}

export default ScriptSelector;
