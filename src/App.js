import React from "react";
import "./App.css";
import {useRoutes} from "hookrouter";
import Routes from "./AppMenu/router";
import AppMenu from "./AppMenu/AppMenu";

const App = () => {
    const routeResult = useRoutes(Routes);
    return (
        <div className="App">
            <AppMenu/>
            {routeResult}
        </div>
    )
};

export default App;
