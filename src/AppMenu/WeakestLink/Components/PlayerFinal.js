import React from "react";
import styles from "./FinalRound.module.css"

const PlayerFinal = (props) => {
    return (
        <div className = {styles.finalPlayer}>
            <div className={props.isActive ? styles.active : styles.inactive}
                 onClick={(event) => {
                     props.checkFirstPlayer(event);
                     props.setPlayerNameNumber(props.id)
                 }}>{props.name}</div>
            <div className = {styles.finalPlayerAnswers}>
                <div className={props.answer? props.answer[1] === 1 ? styles.true : props.answer[1] === -1 ? styles.false : styles.answer : styles.answer}>{props.answer[1]}</div>
                <div className={props.answer? props.answer[2] === 1 ? styles.true : props.answer[2] === -1 ? styles.false : styles.answer : styles.answer}>{props.answer[2]}</div>
                <div className={props.answer? props.answer[3] === 1 ? styles.true : props.answer[3] === -1 ? styles.false : styles.answer : styles.answer}>{props.answer[3]}</div>
                <div className={props.answer? props.answer[4] === 1 ? styles.true : props.answer[4] === -1 ? styles.false : styles.answer : styles.answer}>{props.answer[4]}</div>
                <div className={props.answer? props.answer[5] === 1 ? styles.true : props.answer[5] === -1 ? styles.false : styles.answer : styles.answer}>{props.answer[5]}</div>
            </div>
        </div>
    )
};

export default PlayerFinal;
