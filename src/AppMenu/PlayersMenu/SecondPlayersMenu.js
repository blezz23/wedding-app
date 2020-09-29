import React from "react";
import Player from "./Player";
import {navigate} from "hookrouter";
import FinalRound from "../WeakestLink/Components/FinalRound";

const SecondPlayersMenu = (props) => {
    let players = props.players.map(pl => <Player name={pl.name} id={pl.id} deletePlayer={props.deletePlayer}/>);

    let nextRound = () => {
        let newPlayers = props.players.map((pl, index) => {pl.id = index; return pl});
        props.addPlayers(newPlayers);
        if (props.numberOfRound > 7) {
            return <FinalRound />
        }
        navigate('/weakestLink')
    };

    return (
        <div>
            {players}
            <button onClick={nextRound}>Продолжить игру</button>
        </div>
    )
};

export default SecondPlayersMenu;