import React, {useEffect, useState} from 'react';
import styles from './QuestionWindow.module.css'
import {connect} from "react-redux";

const QuestionWindow = (props) => {
    let [activeQuestion, setActiveQuestion] = useState(0);

    useEffect(() => {
        document.onkeydown = function(event) {
            switch (event.key) {
                case "ArrowLeft":
                    if (activeQuestion > 0)
                        setActiveQuestion(activeQuestion - 1);
                    break;
                case "ArrowRight":
                    if (activeQuestion < props.questions.length - 1)
                        setActiveQuestion(activeQuestion + 1);
                    break;
                default:
                    return;
            }
        };
    }, [activeQuestion, props.questions.length]);

    return (
        <div className={styles}>
            {props.questions[activeQuestion].question}
        </div>
    )
};

let mapStateToProps = (state) => {
    return {
        questions: state.questionsModule.questions
    }
};

export default connect(mapStateToProps)(QuestionWindow);