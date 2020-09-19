import React from "react";
import {A} from "hookrouter";
import {addPlayersAC, deletePlayerAC} from "../../Redux/reducers/playersName-reducer";
import {connect} from "react-redux";
import styles from "./PlayersMenu.module.css";
import {Field, reduxForm} from "redux-form";
import { ReactComponent as DeleteButton } from './../../Files/cancel_presentation-24px.svg';

const PlayersMenuForm = (props) => {
    let current = props.current;

    return (
        <form onSubmit={props.handleSubmit}>
            <div className={styles.players}>
                <div>Игрок 1:<br/><Field
                    component={"input"}
                    name={"1"}
                    placeholder={"Игрок 1"}/>
                    <DeleteButton onClick={() => props.dltPlayer(1)}/></div>
                <div>Игрок 2:<br/><Field
                    component={"input"}
                    name={"2"}
                    placeholder={"Игрок 2"}/>
                    <DeleteButton onClick={() => props.dltPlayer(2)}/></div>
                <div>Игрок 3:<br/><Field
                    component={"input"}
                    name={"3"}
                    placeholder={"Игрок 3"}/>
                    <DeleteButton onClick={() => props.dltPlayer(3)}/></div>
                <div>Игрок 4:<br/><Field
                    component={"input"}
                    name={"4"}
                    placeholder={"Игрок 4"}/>
                    <DeleteButton onClick={() => props.dltPlayer(4)}/></div>
                <div>Игрок 5:<br/><Field
                    component={"input"}
                    name={"5"}
                    placeholder={"Игрок 5"}/>
                    <DeleteButton onClick={() => props.dltPlayer(5)}/></div>
                <div>Игрок 6:<br/><Field
                    component={"input"}
                    name={"6"}
                    placeholder={"Игрок 6"}/>
                    <DeleteButton onClick={() => props.dltPlayer(6)}/></div>
                <div>Игрок 7:<br/><Field
                    component={"input"}
                    name={"7"}
                    placeholder={"Игрок 7"}/>
                    <DeleteButton onClick={() => props.dltPlayer(7)}/></div>
                <div>Игрок 8:<br/><Field
                    component={"input"}
                    name={"8"}
                    placeholder={"Игрок 8"}/>
                    <DeleteButton onClick={() => props.dltPlayer(8)}/></div>
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
        let playersName = values;
        let playersArray = [];
        let idLocal = 1;
        Object.entries(playersName).forEach(([key, value]) => {
            playersArray.push({id: idLocal, name: value});
            idLocal++
        });
        props.addPlayers(playersArray)
    };

    const dltPlayer = (id) => {
        props.deletePlayer(id)
    };

    return (
        <div>
            <PlayersMenuReduxForm
                onSubmit={addPlayersNames}
                dltPlayer={dltPlayer}
                current={props.idGame}/>
        </div>
    )
};

let mapDispatchToProps = (dispatch) => {
    return {
        addPlayers: (names) => {
            dispatch(addPlayersAC(names));
        },
        deletePlayer: (id) => {
            dispatch(deletePlayerAC(id))
        }
    }
};

export default connect(null, mapDispatchToProps)(PlayersMenu);