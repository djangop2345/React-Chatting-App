import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

export const HomeRoute = ({ component: Component, ...rest }) => {
  return (<Route
    {...rest}
    render={(props) => {
      return localStorage.getItem('user')
        ? <Component {...props} />
        : <Redirect to={{ pathname: '/login', state: { from: props.location } }} />;
    }
    } />);
};

HomeRoute.propTypes = {
  component: PropTypes.func.isRequired,
  location: PropTypes.shape(),
};

HomeRoute.defaultProps = {
  location: null,
};
export const UserRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => (
      localStorage.getItem('user')
        ? <Redirect to={{ pathname: '/', state: { from: props.location } }} />
        : <Component {...props} />
    )} />
);

UserRoute.propTypes = {
  component: PropTypes.func.isRequired,
  location: PropTypes.shape(),
};
UserRoute.defaultProps = {
  location: null,
};