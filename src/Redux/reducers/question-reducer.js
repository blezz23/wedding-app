let NUMBER_OF_ROUND_CHANGE = "/questions/NUMBER_OF_ROUND_CHANGE";

let initialState = {
    questionsRound1: [
        {id: 1, question: "Приготовьтесь к первому раунду!"},
        {id: 2, question: "text2"},
        {id: 3, question: "text3"},
        {id: 4, question: "text4"},
        {id: 5, question: "text5"},
        {id: 6, question: "text6"}
    ],
    questionsRound2: [
        {id: 1, question: "Приготовьтесь ко второму раунду!"},
        {id: 2, question: "text2"},
        {id: 3, question: "text3"},
        {id: 4, question: "text4"},
        {id: 5, question: "text5"},
        {id: 6, question: "text6"}
    ],
    numberOfRound: 1
};

const questionsReducer = (state = initialState, action) => {
    switch (action.type) {
        case NUMBER_OF_ROUND_CHANGE:
            return {
                ...state,
                numberOfRound: action.numberOfRound
            };
        default:
            return state
    }
};

export const numberOfRoundChangeAC = (numberOfRound) => ({type: NUMBER_OF_ROUND_CHANGE, numberOfRound});

export default questionsReducer;