import React from "react";
import Player from "./Player";
import {navigate} from "hookrouter";

const SecondPlayersMenu = (props) => {
    let players = props.players.map(pl => <Player name={pl.name}/>);

    let nextRound = () => {
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