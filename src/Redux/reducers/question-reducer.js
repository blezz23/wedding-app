let initialState = {
    questionsRoundOne: [
        {id: 1, question: "Приготовьтесь к первому раунду!"},
        {id: 2, question: "text2"}
    ]
};

const questionsReducer = (state = initialState) => {
    return state
};

export default questionsReducer;