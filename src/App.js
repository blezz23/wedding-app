import React from 'react';
import './App.css';
import WeakestLink from "./WeakestLink/WeakestLink";
import WeddingQuiz from "./WeddingQuiz/WeddingQuiz";
import store from "./Redux/redux-store";

class App extends React.Component {
    render() {
        return (
            <div className="app-menu">
                <div className="weakest-link">
                    <WeakestLink/>
                </div>
                <div>
                    <WeddingQuiz />
                </div>
            </div>
        )
    }
}

export default App;
