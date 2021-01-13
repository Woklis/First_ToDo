import React, { Fragment } from "react";
import { Redirect, Switch, Route } from "react-router-dom";

import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";

const Router = ({ isLoggedIn }) => (
  <Fragment>
    <Switch>
      <Route path="/" exact>
        {isLoggedIn
          ? console.log("isLoggedIn", isLoggedIn)
          : console.log("isLoggedIn", isLoggedIn)}
        {isLoggedIn ? <Home /> : <Redirect to="/login" />}
      </Route>
      <Route path="/messages">
        <Home />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/register">
        <Login />
      </Route>
    </Switch>
  </Fragment>
);

export default Router;
