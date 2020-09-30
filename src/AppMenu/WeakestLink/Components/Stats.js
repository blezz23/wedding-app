import React from "react";

const Stats = (props) => {
    return (
        <div>
            {props.name} / Правильных ответов: {props.trueAnswer} / Неправильных ответов: {props.falseAnswer} / Положил(а) в банк: {props.sumAddedInBank}
        </div>
    )
};

export default Stats;