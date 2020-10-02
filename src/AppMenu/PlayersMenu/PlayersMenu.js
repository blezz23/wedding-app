import React from "react";
import {navigate} from "hookrouter";
import {connect} from "react-redux";
import styles from "./PlayersMenu.module.css"
import {addFirstPlayerAC, addPlayersAC, deletePlayerAC} from "../../Redux/reducers/playersName-reducer";
import SecondPlayersMenu from "./SecondPlayersMenu";
import {PlayersMenuReduxForm} from "./PlayersMenuReduxForm";

const PlayersMenu = (props) => {
    const onSubmit = (values) => {
        let valuesWithId = values.players.map((pl, index) => {
            pl.id = index;
            pl.trueAnswer = 0;
            pl.falseAnswer = 0;
            return pl
        });

        let firstPlayerId = valuesWithId.slice(0).sort(function (a, b) {
            return a.name > b.name ? 1 : -1;
        })[0].id;

        props.addFirstPlayer(firstPlayerId);
        props.addPlayers(valuesWithId);
        navigate('/weakestLink')
    };

    if (props.numberOfRound > 1) {
        return <SecondPlayersMenu
            players={props.playersName}
            numberOfRound={props.numberOfRound}
            addPlayers={props.addPlayers}
            deletePlayer={props.deletePlayer}
            deletedPlayer={props.deletedPlayer}
            addFirstPlayer={props.addFirstPlayer} />
    }

    return (
        <div>
            <PlayersMenuReduxForm
                onSubmit={onSubmit}/>
        </div>
    )
};

let mapStateToProps = (state) => {
    return {
        numberOfRound: state.questionsModule.numberOfRound,
        playersName: state.playersName.playersData,
        deletedPlayer: state.playersName.deletedPlayer
    }
};
let mapDispatchToProps = (dispatch) => {
    return {
        addPlayers: (names) => {
            dispatch(addPlayersAC(names));
        },
        deletePlayer: (playerId) => {
            dispatch(deletePlayerAC(playerId))
        },
        addFirstPlayer: (playerId) => {
            dispatch(addFirstPlayerAC(playerId))
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(PlayersMenu);