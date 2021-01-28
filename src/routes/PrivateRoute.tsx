import React from 'react';
import { Redirect, Route, RouteProps } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import names from './names';

const PrivateRoute: React.FC<RouteProps> = (props) => {
  const { component: Component, ...rest } = props;

  const { isAuthenticated } = useAuth();

  if (!Component) return null;

  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated() ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: names.login,
              state: { from: props.location },
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
