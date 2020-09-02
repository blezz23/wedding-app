import React from "react";
import styles from "./WeakestLink.module.css"
import MoneyChain from "./Components/MoneyChain";
import QuestionWindow from "./Components/QuestionWindow";
import MoneyBank from "./Components/MoneyBank";

function WeakestLink() {
    return (
        <div className={styles}>
            <div className={styles}>
                <MoneyChain/>
            </div>
            <div className={styles}>
                <QuestionWindow/>
            </div>
            <div className={styles}>
                <MoneyBank/>
            </div>
        </div>
    )
}

export default WeakestLink;