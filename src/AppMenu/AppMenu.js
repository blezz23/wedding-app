import React from "react";
import styles from "./AppMenu.module.css"
import {NavLink} from "react-router-dom";

const AppMenu = (props) => {
    return (
        <div className={styles}>
            <div>
                <NavLink to="/quiz">
                    <button>Квиз</button>
                </NavLink>
            </div>
            <div>
                <NavLink to="/weakest-link">
                    <button>Слабое звено</button>
                </NavLink>
            </div>
        </div>
    )
};

export default AppMenu;