let ADD_PLAYERS = 'playersName/ADD_PLAYERS';
let DELETE_PLAYER = 'playersName/DELETE_PLAYER';

let initialState = {
    playersData: [
        {id: 0, name: 'Nikita'},
        {id: 1, name: 'Elena'},
        {id: 2, name: 'Mr.Nobody'},
        {id: 3, name: 'Hulk'},
        {id: 4, name: 'Nikita'},
        {id: 5, name: 'Elena'},
        {id: 6, name: 'Mr.Nobody'},
        {id: 7, name: 'Hulk'}
    ]
};

const playersNameReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PLAYERS:
            return {
                ...state,
                playersData: action.names
            };
        case DELETE_PLAYER:
            return {
                ...state,
                playersData: state.playersData.filter(p => p.id !== action.playerId)
            };
        default:
            return state;
    }
};

export const addPlayersAC = (names) => ({type: ADD_PLAYERS, names});
export const deletePlayerAC = (playerId) => ({type: DELETE_PLAYER, playerId});

export default playersNameReducer;