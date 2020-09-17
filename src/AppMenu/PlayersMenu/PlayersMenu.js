import React from 'react';
import {A} from 'hookrouter';
import Players from "./Players";

const PlayersMenu = (props) => {
    let current = props.idGame;

    return (
        <div>
            <div>
                <Players/>
            </div>
            <A href={"/" + current}>Начать игру</A>
        </div>
    )
};

export default PlayersMenu;