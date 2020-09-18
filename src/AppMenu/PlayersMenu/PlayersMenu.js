import React from "react";
import {A} from "hookrouter";
import {addPlayersAC} from "../../Redux/reducers/playersName-reducer";
import {connect} from "react-redux";
import styles from "./PlayersMenu.module.css";
import {Field, reduxForm} from "redux-form";

const PlayersMenuForm = (props) => {
    let current = props.current;

    return (
        <form onSubmit={props.handleSubmit}>
            <div className={styles.players}>
                <div>Игрок 1:<br/><Field component={"input"} name={"player1"} placeholder={"Игрок 1"}/></div>
                <div>Игрок 2:<br/><Field component={"input"} name={"player2"} placeholder={"Игрок 2"}/></div>
                <div>Игрок 3:<br/><Field component={"input"} name={"player3"} placeholder={"Игрок 3"}/></div>
                <div>Игрок 4:<br/><Field component={"input"} name={"player4"} placeholder={"Игрок 4"}/></div>
                <div>Игрок 5:<br/><Field component={"input"} name={"player5"} placeholder={"Игрок 5"}/></div>
                <div>Игрок 6:<br/><Field component={"input"} name={"player6"} placeholder={"Игрок 6"}/></div>
                <div>Игрок 7:<br/><Field component={"input"} name={"player7"} placeholder={"Игрок 7"}/></div>
                <div>Игрок 8:<br/><Field component={"input"} name={"player8"} placeholder={"Игрок 8"}/></div>
            </div>
            <div>
                <button>Подтвердить имена игроков</button>
            </div>
            <A href={"/" + current}>Начать игру</A>
        </form>
    )
};

const PlayersMenuReduxForm = reduxForm({form: "playersWeakestLink"})(PlayersMenuForm);

const PlayersMenu = (props) => {
    const addPlayersNames = (values) => {
        props.addPlayers(values);
    };

    return (
        <div>
            <PlayersMenuReduxForm onSubmit={addPlayersNames} current={props.idGame}/>
        </div>
    )
};

let mapDispatchToProps = (dispatch) => {
    return {
        addPlayers: (names) => {
            dispatch(addPlayersAC(names));
        }
    }
};

export default connect(null, mapDispatchToProps)(PlayersMenu);