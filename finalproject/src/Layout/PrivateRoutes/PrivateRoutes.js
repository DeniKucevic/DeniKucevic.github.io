import React from "react";
import { Route, Redirect } from "react-router-dom";
import { isLogin } from "../../Services/Auth.service/CoetusAuth";

const PrivateRoutes = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props =>
        isLogin() ? <Redirect to="/" /> : <Component {...props} />
      }
    />
  );
};

export default PrivateRoutes;
