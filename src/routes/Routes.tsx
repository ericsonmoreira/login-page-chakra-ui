import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../pages/Login';
import names from './names';
import PrivateRoute from './PrivateRoute';
const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <PrivateRoute path={names.root} component={Home} exact />
        <Route path={names.login} component={Login} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
