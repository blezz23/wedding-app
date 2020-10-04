import React from "react";

const PlayerFinal = (props) => {
    return (
        <div>
            <div>{props.name}</div>
            <div>
                <div>{props.answer[1]}</div> <div>{props.answer[2]}</div> <div>{props.answer[3]}</div> <div>{props.answer[4]}</div> <div>{props.answer[5]}</div> />
            </div>
        </div>
    )
};

export default PlayerFinal;