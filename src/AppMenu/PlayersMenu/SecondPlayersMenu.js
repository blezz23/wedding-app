import React, {useState} from "react";
import {navigate} from "hookrouter";
import styles from "./PlayersMenu.module.css"
import Player from "./Player";
import FinalRound from "../WeakestLink/Components/FinalRound";
import Stats from "../WeakestLink/Components/Stats";

const SecondPlayersMenu = (props) => {
    let [isShowStats, setIsShowStats] = useState(false);

    let players = props.players.map(pl =>
        <Player
            name={pl.name}
            id={pl.id}
            deletePlayer={props.deletePlayer}
            showStats={setIsShowStats}/>);

    let statsPlayers = props.players.slice(0).sort(function (a, b) {
        return b.trueAnswer - a.trueAnswer || a.falseAnswer - b.falseAnswer || b.sumAddedInBank - a.sumAddedInBank
    });

    let sortStatsPlayers = statsPlayers.map(pl =>
        <Stats
            name={pl.name}
            trueAnswer={pl.trueAnswer}
            falseAnswer={pl.falseAnswer}
            sumAddedInBank={pl.sumAddedInBank}/>);

    let statsDeletedPlayer = <Stats
        name={props.deletedPlayer.name}
        trueAnswer={props.deletedPlayer.trueAnswer}
        falseAnswer={props.deletedPlayer.falseAnswer}
        sumAddedInBank={props.deletedPlayer.sumAddedInBank}/>;

    let nextRound = () => {
        let newPlayers = props.players.map((pl, index) => {
            pl.id = index;
            pl.trueAnswer = 0;
            pl.falseAnswer = 0;
            pl.sumAddedInBank = 0;
            return pl
        });
        props.addFirstPlayer(statsPlayers[0].id);
        props.addPlayers(newPlayers);
        setIsShowStats(false);
        navigate('/weakestLink')
    };

    return (
        <div>
            <div>{players}</div>
            <div>
                <button onClick={nextRound}>Продолжить игру</button>
            </div>
            <div className={isShowStats ? styles.show : styles.hide}>{sortStatsPlayers}</div>
            <div className={isShowStats ? styles.show : styles.hide}>{statsDeletedPlayer}</div>
        </div>
    )
};

export default SecondPlayersMenu;