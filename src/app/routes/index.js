import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import asyncComponent from '../../util/asyncComponent';

const Routes = ({ match }) =>
  <Switch>

    <Route path={`${match.url}/SamplePage`} component={asyncComponent(() => import('./SamplePage'))} />
    <Route path={`${match.url}/emergencies`} component={asyncComponent(() => import('./emergencies'))} />
    <Route path={`${match.url}/dashboard`} component={asyncComponent(() => import('./dashboard'))} />

    {/*<Route component={asyncComponent(() => import("app/routes/extraPages/routes/404"))}/>*/}
  </Switch>;
export default withRouter(Routes);