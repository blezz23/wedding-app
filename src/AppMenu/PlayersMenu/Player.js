import React from "react";

const Player = (props) => {
    return (
        <div>
            {props.name}
            <button onClick={() => props.deletePlayer(props.id)}>XXX</button>
        </div>
    )
};

export default Player;