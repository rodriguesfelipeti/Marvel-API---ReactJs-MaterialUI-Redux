import React from 'react'
import { Route, Switch } from 'react-router-dom';

import PrincipalRoute from './PrincipalRoute/PrincipalRoute'

const Routes = () => (
    <Switch>
        <Route path="/" exact={true}>
            <PrincipalRoute />
        </Route>
        {/* <Route path="/singleChar">
            <SingleCharRoute />
        </Route> */}
    </Switch>
)


export default Routes 
