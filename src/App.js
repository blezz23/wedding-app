import React from 'react';
import './App.css';
import AppMenu from "./AppMenu/AppMenu";
import WeakestLink from "./AppMenu/WeakestLink/WeakestLink";
import WeddingQuiz from "./AppMenu/WeddingQuiz/WeddingQuiz";
import store from "./Redux/redux-store";
import {Route} from "react-router-dom";

class App extends React.Component {
    render() {
        return (
            <div className="app">
                <AppMenu/>
                <div>
                    <Route path="/weakest-link"
                           render={() => <WeakestLink/>}/>
                    <Route path="/quiz"
                           render={() => <WeddingQuiz/>}/>
                </div>
            </div>
        )
    }
}

export default App;
