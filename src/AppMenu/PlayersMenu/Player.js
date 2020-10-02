import React from "react";

const Player = (props) => {
    const confirmForm = () => {
        if (window.confirm(`Подтвердить удаление игрока ${props.name}`)) {
            props.deletePlayer(props.id);
            props.showStats(true)
        } else
            return false
    };

    return (
        <div>
            {props.name}
            <button onClick={confirmForm}>XXX</button>
        </div>
    )
};

export default Player;