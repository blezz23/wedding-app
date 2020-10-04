import React from "react";
import styles from "./PlayersMenu.module.css"

const Player = (props) => {
    const confirmForm = () => {
        if (props.numberOfRound < 8 && props.delPlayerRound === false) {
            if (window.confirm(`Подтвердить удаление игрока ${props.name}`)) {
                props.deletePlayer(props.id);
                props.showStats(true)
            }
        }
        props.allowDltPlayer(true)
    };

    return (
        <div className={styles.secondPlayerStyle}>
            <div className={styles.secondPlayerName}>{props.name}</div>
            <button onClick={confirmForm} className={styles.deletePlayerButton}>Вы самое слабое звено. Прощайте!</button>
        </div>
    )
};

export default Player;