import React, {PropTypes} from 'react';
import {Route, Redirect} from 'react-router';

export const isAuthenticated = () => localStorage.getItem("auth_token") != null && localStorage.getItem("auth_token").length > 0 ;

const routeToComponent  = (props,Component) => {    
   return isAuthenticated() == true ? (<Component {...props} />) : ( <Redirect to={{pathname: '/signin'}} /> );
};
const ProtectedRoute = ({component: Component, exact, path}) => (
    <Route
      exact={exact}
      path={path}
      render={this.routeToComponent}
    />
  );

ProtectedRoute.propTypes = {
    component: PropTypes.func.isRequired,
    exact: PropTypes.func,
    path : PropTypes.string.isRequired
};
export default ProtectedRoute;
  