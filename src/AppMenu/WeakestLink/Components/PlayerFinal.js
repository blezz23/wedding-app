import React from "react";
import styles from "./FinalRound.module.css"

const PlayerFinal = (props) => {
   return (
        <div>
            <div>{props.name}</div>
            <div>
                <div className={styles.answer}>{props.answer[1]}</div>
                <div className={styles.answer}>{props.answer[2]}</div>
                <div className={styles.answer}>{props.answer[3]}</div>
                <div className={styles.answer}>{props.answer[4]}</div>
                <div className={styles.answer}>{props.answer[5]}</div>
            </div>
        </div>
    )
};

export default PlayerFinal;