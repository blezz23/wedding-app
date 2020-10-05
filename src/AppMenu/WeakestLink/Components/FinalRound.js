import React from 'react';
import styles from "./FinalRound.module.css";
import PlayerFinal from "./PlayerFinal";

const FinalRound = (props) => {
    let players = props.players.map(pl => <PlayerFinal id={pl.id} name={pl.name} answer={pl.answer} />);

    return (
        <div className={styles.questionWindowFinal}>
            <div className={styles.questionsFinal}>
                {props.currentRound[props.activeQuestion].question}
            </div>
            <div className={styles.playerFinal}>{players}</div>
        </div>
    )
};

export default FinalRound;