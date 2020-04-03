import React from "react";
import { Route, Redirect } from "react-router-dom";
import { isLogin } from "../../Services/Auth.service/CoetusAuth";

const PublicRoutes = ({ component: Component, ...rest }) => {
  return (
    <Route>{isLogin() ? <Component {...rest} /> : <Redirect to="/" />}</Route>
  );
};

export default PublicRoutes;
