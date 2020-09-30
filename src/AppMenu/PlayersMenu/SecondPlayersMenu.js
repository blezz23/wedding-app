import React from "react";
import Player from "./Player";
import {navigate} from "hookrouter";
import FinalRound from "../WeakestLink/Components/FinalRound";
import Stats from "../WeakestLink/Components/Stats";

const SecondPlayersMenu = (props) => {
    let players = props.players.map(pl =>
        <Player
            name={pl.name}
            id={pl.id}
            deletePlayer={props.deletePlayer} />);

    let statsPlayers = props.players.map(pl =>
        <Stats
            name={pl.name}
            trueAnswer={pl.trueAnswer}
            falseAnswer={pl.falseAnswer}
            sumAddedInBank={pl.sumAddedInBank} />);

    let nextRound = () => {
        let newPlayers = props.players.map((pl, index) => {
            pl.id = index;
            pl.trueAnswer = 0;
            pl.falseAnswer = 0;
            pl.sumAddedInBank = 0;
            return pl
        });
        props.addPlayers(newPlayers);
        // if (props.numberOfRound > 7) {
        //     return <FinalRound />
        // }
        navigate('/weakestLink')
    };

    return (
        <div>
            <div>{players}</div>
            <div>
                <button onClick={nextRound}>Продолжить игру</button>
            </div>
            <div>{statsPlayers}</div>
        </div>
    )
};

export default SecondPlayersMenu;