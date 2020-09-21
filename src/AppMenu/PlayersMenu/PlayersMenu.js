import React from "react";
import {navigate} from "hookrouter";
import {addPlayersAC, deletePlayerAC} from "../../Redux/reducers/playersName-reducer";
import {connect} from "react-redux";
import SecondPlayersMenu from "./SecondPlayersMenu";
import {PlayersMenuReduxForm} from "./PlayersMenuReduxForm";

const PlayersMenu = (props) => {
    const onSubmit = (values) => {
        props.addPlayers(values);
        navigate('/weakestLink')
    };

    if (props.numberOfRound > 1) {
        return <SecondPlayersMenu players={props.playersName}/>
    }

    return (
        <div>
            <PlayersMenuReduxForm
                onSubmit={onSubmit}
                numberOfRound={props.numberOfRound} />
        </div>
    )
};

let mapStateToProps = (state) => {
    return {
        numberOfRound: state.questionsModule.numberOfRound,
        playersName: state.playersName.playersData.players
    }
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

export default connect(mapStateToProps, mapDispatchToProps)(PlayersMenu);