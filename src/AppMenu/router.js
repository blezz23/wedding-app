import React from "react";
import WeddingQuiz from "./WeddingQuiz/WeddingQuiz";
import WeakestLink from "./WeakestLink/WeakestLink";
import PlayersMenu from "./PlayersMenu/PlayersMenu";

const Routes = {
    "/menu/:quiz": ({quiz}) => <PlayersMenu game={quiz}/>,
    "/menu/:weakestLink": ({weakestLink}) => <PlayersMenu game={weakestLink}/>,
    "/quiz": () => <WeddingQuiz/>,
    "/weakestLink": () => <WeakestLink/>
};

export default Routes;