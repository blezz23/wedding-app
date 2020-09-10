import {combineReducers, createStore} from "redux";
import questionsReducer from "./reducers/question-reducer";
import moneyChainReducer from "./reducers/moneyChain-reducer";

let reducers = combineReducers({
    questionsModule: questionsReducer,
    moneyChainModule: moneyChainReducer
});

let store = createStore(reducers);

export default store;