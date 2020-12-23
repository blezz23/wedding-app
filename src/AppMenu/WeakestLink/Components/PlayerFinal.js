import React, {useState} from "react";
import styles from "./FinalRound.module.css";
import classNames from 'classnames';
import FinalAnswers from "./FinalAnswers";

const PlayerFinal = (props) => {
    let [stopNextQuestion, setStopNextQuestion] = useState(0);

    return (
        <div>
            <div className={classNames(props.isActive ? styles.active : styles.inactive, styles.finalName)}
                 onClick={(event) => {
                     if (stopNextQuestion === 0) {
                         props.nextQuestion();
                         setStopNextQuestion(stopNextQuestion + 1);
                         props.checkFirstPlayer(event);
                         props.setPlayerNameNumber(props.id);
                     }
                 }}>{props.name}</div>
            <div>
                <FinalAnswers
                    answer={props.answer}/>
            </div>
        </div>
    )
};

export default PlayerFinal;
