let ADD_PLAYERS = 'playersName/ADD_PLAYERS';
let DELETE_PLAYER = 'playersName/DELETE_PLAYER';

let initialState = {
    players: []
};

const playersNameReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PLAYERS:
            return {
                ...state,
                players: action.names
        };
        case DELETE_PLAYER:
            return {
                ...state,
                players: state.players.filter(p => p.id !== action.id)
            };
        default:
            return state;
    }
};

export const addPlayersAC = (names) => ({type: ADD_PLAYERS, names});
export const deletePlayerAC = (id) => ({type: DELETE_PLAYER, id});

export default playersNameReducer;