import React from "react";
import styles from "./WeakestLink.module.css"
import MoneyChain from "./Components/MoneyChain";
import QuestionWindow from "./Components/QuestionWindow";
import Timer from "./Components/Timer";
import MoneyBank from "./Components/MoneyBank";

function WeakestLink() {
    return (
        <div className={styles.main}>
            <div className={styles.chain}>
                <MoneyChain/>
            </div>
            <div className={styles.question}>
                <QuestionWindow/>
            </div>
            <div className={styles.timer}>
                <Timer/>
            </div>
            <div className={styles.bank}>
                <MoneyBank/>
            </div>
        </div>
    )
}

export default WeakestLink;