import React from "react";
import { Switch, Route } from "react-router-dom";
import Pages from "./Pages";

const Routes = () => {
    return (
        <Switch>
            <Route path="/login" component={Pages.Login} />
            <Route path="/signup" component={Pages.Signup} />
            {localStorage.token ? <Route exact path="/profile" component={Pages.Profile} /> : <Route component={Pages.Login} /> }
            <Route component={Pages.Login} />
        </Switch>
    )
};

export default Routes;