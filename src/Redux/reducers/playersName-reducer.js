let ADD_PLAYERS = 'playersName/ADD_PLAYERS';
let DELETE_PLAYER = 'playersName/DELETE_PLAYER';
let TRUE_ANSWER = 'playersName/TRUE_ANSWER';
let FALSE_ANSWER = 'playersName/FALSE_ANSWER';
let ADD_SUM_IN_BANK = 'playersName/ADD_SUM_IN_BANK';
let ADD_FIRST_PLAYER = 'playersName/ADD_FIRST_PLAYER';
let ALLOW_DELETE_PLAYER = 'playersName/ALLOW_DELETE_PLAYER';

let initialState = {
    playersData: [
        {id: 0, name: 'Nikita', trueAnswer: 0, falseAnswer: 0, sumAddedInBank: 0},
        {id: 1, name: 'Elena', trueAnswer: 0, falseAnswer: 0, sumAddedInBank: 0},
        // {id: 2, name: 'Mr.Nobody', trueAnswer: 0, falseAnswer: 0, sumAddedInBank: 0},
        // {id: 3, name: 'Hulk', trueAnswer: 0, falseAnswer: 0, sumAddedInBank: 0},
        // {id: 4, name: 'Nikita', trueAnswer: 0, falseAnswer: 0, sumAddedInBank: 0},
        // {id: 5, name: 'Elena', trueAnswer: 0, falseAnswer: 0, sumAddedInBank: 0},
        // {id: 6, name: 'Mr.Nobody', trueAnswer: 0, falseAnswer: 0, sumAddedInBank: 0},
        // {id: 7, name: 'Hulk', trueAnswer: 0, falseAnswer: 0, sumAddedInBank: 0}
    ],
    deletedPlayer: {},
    firstPlayer: {},
    allowDeletePlayer: false
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
                playersData: state.playersData.filter(p => p.id !== action.playerId),
                deletedPlayer: state.playersData.filter(pl => pl.id === action.playerId)[0]
            };
        case ADD_FIRST_PLAYER:
            return {
                ...state,
                firstPlayer: state.playersData.filter(pl => pl.id === action.id)[0]
            };
        case TRUE_ANSWER:
            return {
                ...state,
                playersData: state.playersData.map(item => {
                    if (item.id === action.payload) {
                        item.trueAnswer++
                    }
                    return item
                })
            };
        case FALSE_ANSWER:
            return {
                ...state,
                playersData: state.playersData.map(item => {
                    if (item.id === action.payload) {
                        item.falseAnswer++
                    }
                    return item
                })
            };
        case ADD_SUM_IN_BANK:
            return {
                ...state,
                playersData: state.playersData.map(item => {
                    if (item.id === action.id) {
                        item.sumAddedInBank = item.sumAddedInBank + action.sum
                    }
                    return item
                })
            };
        case ALLOW_DELETE_PLAYER:
            return {
                ...state,
                allowDeletePlayer: action.allow
            };
        default:
            return state;
    }
};

export const addPlayersAC = (names) => ({type: ADD_PLAYERS, names});
export const deletePlayerAC = (playerId) => ({type: DELETE_PLAYER, playerId});
export const trueAnswerAC = (id) => ({type: TRUE_ANSWER, payload: id});
export const falseAnswerAC = (id) => ({type: FALSE_ANSWER, payload: id});
export const addSumInBankAC = (id, sum) => ({type: ADD_SUM_IN_BANK, id, sum});
export const addFirstPlayerAC = (id) => ({type: ADD_FIRST_PLAYER, id});
export const allowDeletePlayerAC = (allow) => ({type: ALLOW_DELETE_PLAYER, allow});

export default playersNameReducer;