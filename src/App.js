import React from 'react';
import './App.css';
import {useRoutes, A} from 'hookrouter';
import Routes from './AppMenu/router';

function App() {
    const routeResult = useRoutes(Routes);
    return (
        <div className="App">
            <A href="/quiz"><button>Квиз</button></A>
            <A href="/weakest-link"><button>Слабое звено</button></A>
            {routeResult}
        </div>
    );
}

export default App;
