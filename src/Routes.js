import React from "react";
import { Switch, Route } from "react-router-dom";
import Pages from "./Pages";

const Routes = () => {
    return (
        <Switch>
            <Route path="/login" component={Pages.Login} />
            <Route path="/signup" component={Pages.Signup} />
            <Route path="/" component={Pages.Profile} />
        </Switch>
    )
};

export default Routes;