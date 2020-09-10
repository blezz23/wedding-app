import {combineReducers, createStore} from "redux";
import questionsReducer from "./reducers/question-reducer";

let reducers = combineReducers({
    questionsModule: questionsReducer
});

let store = createStore(reducers);

export default store;