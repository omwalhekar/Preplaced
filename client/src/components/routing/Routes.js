import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Favorites from "../Favorites";

const Routes = props => {
    return(
        <Switch>
            <Route exact path="/favorites" component={Favorites} />
        </Switch>
    )
}
export default Routes;