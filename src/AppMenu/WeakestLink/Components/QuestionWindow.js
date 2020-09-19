import React, {useEffect, useState} from 'react';
import styles from './QuestionWindow.module.css'
import {connect} from "react-redux";

const QuestionWindow = (props) => {
    let [activeQuestion, setActiveQuestion] = useState(0);

    const buttonPressed = function(event) {
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

    useEffect(() => {
        document.addEventListener('keydown', buttonPressed);

        return () => {
            document.removeEventListener('keydown', buttonPressed);
        };
    }, [buttonPressed]);

    return (
        <div className={styles.questionWindow}>
            <div className={styles.question}>{props.questions[activeQuestion].question}</div>
            <div className={styles.player}>{props.playersName[0]?.name}</div>
        </div>
    )
};

let mapStateToProps = (state) => {
    return {
        questions: state.questionsModule.questionsRoundOne,
        playersName: state.playersName.players
    }
};

export default connect(mapStateToProps)(QuestionWindow);