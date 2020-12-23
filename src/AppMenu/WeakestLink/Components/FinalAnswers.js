import React from "react";
import styles from "./FinalRound.module.css";

const FinalAnswers = (props) => {
    return (
        <div className={styles.finalPlayerAnswers}>
            <div className={props.answer? props.answer[1] === 'V'
                ? styles.true : props.answer[1] === 'X'
                    ? styles.false : styles.answer
                : styles.answer}>{props.answer[1]}</div>
            <div className={props.answer? props.answer[2] === 'V'
                ? styles.true : props.answer[2] === 'X'
                    ? styles.false : styles.answer
                : styles.answer}>{props.answer[2]}</div>
            <div className={props.answer? props.answer[3] === 'V'
                ? styles.true : props.answer[3] === 'X'
                    ? styles.false : styles.answer
                : styles.answer}>{props.answer[3]}</div>
            <div className={props.answer? props.answer[4] === 'V'
                ? styles.true : props.answer[4] === 'X'
                    ? styles.false : styles.answer
                : styles.answer}>{props.answer[4]}</div>
            <div className={props.answer? props.answer[5] === 'V'
                ? styles.true : props.answer[5] === 'X'
                    ? styles.false : styles.answer
                : styles.answer}>{props.answer[5]}</div>
        </div>
    )
};

export default FinalAnswers;