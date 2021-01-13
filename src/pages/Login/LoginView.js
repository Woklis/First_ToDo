import React from "react";
import { Link } from "react-router-dom";
import cx from "classnames";

import classes from "./Login.module.css";
import InputField from "./components/InputField";
import ErrorField from "./components/ErrorField";

const LoginView = ({ props }) => {
  const {
    email,
    setEmail,
    username,
    setUsername,
    password,
    setPassword,
    onSubmit,
    location,
    data,
  } = props;

  const status = data && data.status ? data.status : "";

  const inputFieldsClasses = cx({
    [classes.Login_page__field]: true,
    [classes.error]: status === "error" ? true : false,
    [classes.success]: status === "success" ? true : false,
  });

  return (
    <div className={classes.Login_wrapper}>
      <div className={classes.Login_page}>
        <h2 className={classes.Login_page__title}>
          {location === "login" ? "Log In" : "Register"}
        </h2>
        <form onSubmit={onSubmit} className={classes.Loading_page__form}>
          <InputField
            classes={inputFieldsClasses}
            icon={"fa fa-at"}
            value={email}
            type="email"
            setter={setEmail}
            placeholder="Email"
          />
          {data.errors && data.errors["email"] && (
            <ErrorField
              error={data.errors["email"]}
              classes={classes.Loading_page__login_error}
            />
          )}

          {location === "register" && (
            <InputField
              classes={inputFieldsClasses}
              icon={"fa fa-user-o"}
              value={username}
              type="text"
              setter={setUsername}
              placeholder="Username"
            />
          )}
          {data.errors && data.errors["username"] && (
            <ErrorField
              error={data.errors["username"]}
              classes={classes.Loading_page__login_error}
            />
          )}

          <InputField
            classes={inputFieldsClasses}
            icon={"fa fa-unlock-alt"}
            value={password}
            type="password"
            setter={setPassword}
            placeholder="Password"
          />
          {data.errors && data.errors["password"] && (
            <ErrorField
              error={data.errors["password"]}
              classes={classes.Loading_page__login_error}
            />
          )}

          {status === "error" && location === "login" ? (
            <ErrorField
              error=" Email or password incorrect"
              classes={classes.Loading_page__login_error}
            />
          ) : null}

          <button type="submit">Log in</button>
        </form>
        <div className={classes.Login_page__note}>
          {location === "login" ? "First time here?" : "Have an account?"}
          &nbsp;
          <Link
            to={location === "login" ? "/register" : "/login"}
            className={classes.Loading_page__link}
          >
            {location === "login" ? "Sign Up" : "Sign In"}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginView;
