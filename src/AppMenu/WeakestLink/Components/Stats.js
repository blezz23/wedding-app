import React from "react";
import styles from "../WeakestLink.module.css"

const Stats = (props) => {
    return (
        <div className={styles.playerStats}>
            {props.name} / Правильных ответов: {props.trueAnswer} / Неправильных ответов: {props.falseAnswer} / Положил(а) в банк: {props.sumAddedInBank}
        </div>
    )
};

export default Stats;
