import {A} from "hookrouter";
import React from "react";
import styles from "./AppMenu.module.css"

const AppMenu = (props) => {
    return (
        <div className={styles.appMenu}>
            <div className={styles.quiz}>
                <A href="/quiz">
                    Квиз
                </A>
            </div>
            <div className={styles.weakestLink}>
                <A href="/weakest-link">
                    Слабое звено
                </A>
            </div>
        </div>
    );
};

export default AppMenu;