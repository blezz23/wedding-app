import {A} from "hookrouter";
import React from "react";
import styles from "./AppMenu.module.css"

const AppMenu = (props) => {
    return (
        <div className={styles.appMenu}>
            <div className={styles.item}>
                <A href="/quiz">
                    <button>Квиз</button>
                </A>
            </div>
            <div className={styles.item}>
                <A href="/weakest-link">
                    <button>Слабое звено</button>
                </A>
            </div>
            {props.routeResult}
        </div>
    );
};

export default AppMenu;