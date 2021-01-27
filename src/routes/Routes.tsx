import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../pages/Login';
import names from './names';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path={names.root} component={Home} />
      <Route path={names.login} component={Login} />
    </Switch>
  );
};

export default Routes;
