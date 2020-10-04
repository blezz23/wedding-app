import React from 'react';
import styles from "./FinalRound.module.css";
import PlayerFinal from "./PlayerFinal";

const FinalRound = (props) => {
    let finalPlayers = props.players.map(pl => {
        pl.answer = {1: '-', 2: '-', 3: '-', 4: '-', 5: '-'};
        return pl
    });

    let players = finalPlayers.map(pl => <PlayerFinal name={pl.name} answer={pl.answer} />);

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