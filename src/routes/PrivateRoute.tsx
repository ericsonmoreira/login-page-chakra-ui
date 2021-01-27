import React from 'react';

import { Redirect, Route, RouteProps } from 'react-router-dom';
import names from './names';

const PrivateRoute: React.FC<RouteProps> = (props) => {
  const { children, ...rest } = props;

  const auth = true;

  return (
    <Route
      {...rest}
      render={({ location }) =>
        auth ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: names.login,
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
