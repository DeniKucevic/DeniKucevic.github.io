import React from "react";
import { Route } from "react-router-dom";

const ProfileRoutes = ({ component: Component, ...rest }) => {
  return <Route>{<Component {...rest} />}</Route>;
};

export default ProfileRoutes;
