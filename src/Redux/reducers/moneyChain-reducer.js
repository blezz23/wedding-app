let ADD_BANK_OF_ROUND = "moneyChain/ADD_BANK_OF_ROUND";

let initialState = {
    chain: [
        {id: 0, value: 40000},
        {id: 1, value: 30000},
        {id: 2, value: 20000},
        {id: 3, value: 15000},
        {id: 4, value: 10000},
        {id: 5, value: 5000},
        {id: 6, value: 2000},
        {id: 7, value: 1000}
    ],
    moneyBank: 0
};

const moneyChainReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_BANK_OF_ROUND:
            return {
                ...state,
                moneyBank: action.bankOfRoundSum
            };
        default:
            return state
    }
};

export const addBankOfRoundAC = (bankOfRoundSum) => ({type: ADD_BANK_OF_ROUND, bankOfRoundSum});

export default moneyChainReducer;