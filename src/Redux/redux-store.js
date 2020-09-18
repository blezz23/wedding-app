import {combineReducers, createStore} from "redux";
import questionsReducer from "./reducers/question-reducer";
import moneyChainReducer from "./reducers/moneyChain-reducer";
import playersNameReducer from "./reducers/playersName-reducer";
import {reducer as formReducer } from "redux-form";

let reducers = combineReducers({
    questionsModule: questionsReducer,
    moneyChainModule: moneyChainReducer,
    playersName: playersNameReducer,
    form: formReducer
});

let store = createStore(reducers);

export default store;