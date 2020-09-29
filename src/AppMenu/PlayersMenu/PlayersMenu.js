import React from "react";
import {navigate} from "hookrouter";
import {addPlayersAC, deletePlayerAC} from "../../Redux/reducers/playersName-reducer";
import {connect} from "react-redux";
import SecondPlayersMenu from "./SecondPlayersMenu";
import {PlayersMenuReduxForm} from "./PlayersMenuReduxForm";

const PlayersMenu = (props) => {
    const onSubmit = (values) => {
        let valuesWithId = values.players.map((pl, index) => {pl.id = index; return pl});
        props.addPlayers(valuesWithId);
        navigate('/weakestLink')
    };

    if (props.numberOfRound > 1) {
        return <SecondPlayersMenu
            players={props.playersName}
            numberOfRound={props.numberOfRound}
            addPlayers={props.addPlayers}
            deletePlayer={props.deletePlayer}/>
    }

    return (
        <div>
            <PlayersMenuReduxForm
                onSubmit={onSubmit} />
        </div>
    )
};

let mapStateToProps = (state) => {
    return {
        numberOfRound: state.questionsModule.numberOfRound,
        playersName: state.playersName.playersData
    }
};
let mapDispatchToProps = (dispatch) => {
    return {
        addPlayers: (names) => {
            dispatch(addPlayersAC(names));
        },
        deletePlayer: (playerId) => {
            dispatch(deletePlayerAC(playerId))
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(PlayersMenu);