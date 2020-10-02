import React from "react";

const Player = (props) => {
    const confirmForm = () => {
        if (props.numberOfRound < 8 && props.delPlayerRound === 0) {
            if (window.confirm(`Подтвердить удаление игрока ${props.name}`)) {
                props.deletePlayer(props.id);
                props.showStats(true);
            }
        }
        props.setDelPlayerRound(1)
    };

    return (
        <div>
            {props.name}
            <button onClick={confirmForm}>XXX</button>
        </div>
    )
};

export default Player;