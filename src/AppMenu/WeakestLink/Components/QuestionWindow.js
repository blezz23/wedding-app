import React from 'react';
import styles from './QuestionWindow.module.css'

const QuestionWindow = (props) => {
    return (
        <div className={styles.questionWindow}>
            <div className={styles.question}>
                {props.currentRound[props.activeQuestion].question}
            </div>
            <div className={styles.player}>{props.playersName[0]?.name}</div>
        </div>
    )
};

export default QuestionWindow;