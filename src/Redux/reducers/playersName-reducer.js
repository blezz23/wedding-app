let ADD_PLAYERS = 'playersName/ADD_PLAYERS';

let initialState = {
    players: []
};

const playersNameReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PLAYERS:
            let playersName = action.names;
            let playersArray = Object.values(playersName);

            return {
                ...state,
                players: [...state.players, playersArray]
        };
        default:
            return state;
    }
};

export const addPlayersAC = (names) => ({type: ADD_PLAYERS, names});

export default playersNameReducer;