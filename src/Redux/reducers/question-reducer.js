const NEXT_QUESTION = "questions/NEXT_QUESTION";

let initialState = {
    questions: [
        {id: 1, question: "text"},
        {id: 2, question: "text2"}
    ]
};

const questionsReducer = (state = initialState, action) => {
    switch (action.type) {
        case NEXT_QUESTION:
            return state;
        default:
            return state;
    }
};

export const nextQuestionAC = (nextQuestion) => ({type: NEXT_QUESTION});

export default questionsReducer;