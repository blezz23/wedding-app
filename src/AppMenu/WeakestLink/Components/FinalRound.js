import React, {useState} from 'react';
import styles from "./FinalRound.module.css";
import PlayerFinal from "./PlayerFinal";

const FinalRound = (props) => {
    let [nameFirstPlayer, setNameFirstPlayer] = useState('');

    const checkFirstPlayer = (event) => {
        setNameFirstPlayer(event.target.textContent)
    };

    let players = props.players.map(pl => {
        let isActive = false;
        if (nameFirstPlayer === pl.name) {
            isActive = true
        }
        return <PlayerFinal
            id={pl.id}
            name={pl.name}
            answer={pl.answer}
            isActive={isActive}
            nextQuestion={props.nextQuestion}
            setPlayerNameNumber={props.setPlayerNameNumber}
            checkFirstPlayer={checkFirstPlayer}/>
    });

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