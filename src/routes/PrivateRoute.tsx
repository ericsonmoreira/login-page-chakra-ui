import React from 'react';
import { Redirect, Route, RouteProps } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import names from './names';

const PrivateRoute: React.FC<RouteProps> = (props) => {
  const { component: Component, ...rest } = props;

  const { token, user, isSubmiting } = useAuth();

  console.log(token, user);

  if (!Component || isSubmiting) return null;

  return (
    <Route
      {...rest}
      render={(props) =>
        token && user ? (
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
