import React from "react";
import WeakestLink from "./WeakestLink/WeakestLink";
import WeddingQuiz from "./WeddingQuiz/WeddingQuiz";

const Routes = {
    "/quiz": () => <WeddingQuiz />,
    "/weakest-link": () => <WeakestLink />
};
export default Routes;