import React, { useState, useEffect, useContext } from "react";
import { useLocation, useHistory } from "react-router-dom";

import { CurrentUserContext } from "../../contexts/currentUser";
import useFetch from "../../hooks/useFetch";
import LoginView from "./LoginView";

const Login = (props) => {
  const [, setCurrentUser] = useContext(CurrentUserContext);

  const location = useLocation().pathname.slice(1); // del /
  const history = useHistory();

  // -----------------
  const url =
    location === "login"
      ? "https://conduit.productionready.io/api/users/login"
      : "https://conduit.productionready.io/api/users";
  // -----------------

  const [data, setData] = useState({});
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [{ response, error }, doFetch] = useFetch(url);

  const onSubmit = (event) => {
    event.preventDefault();

    const user =
      location === "login"
        ? { email, password }
        : { email, password, username };

    doFetch({ method: "POST", data: { user } });
  };

  useEffect(() => {
    if (!response) return;
    setData({ status: "success", errors: null });
    setCurrentUser((state) => ({ ...state, isLoggedIn: true }));

    let timer = setTimeout(() => {
      history.push("/");
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, [response, location, history, setCurrentUser]);

  useEffect(() => {
    if (!error) return;
    if (location === "login") {
      setData({ status: "error", errors: null });
      return;
    }
    if (location === "register") {
      setData({ status: "error", errors: error.errors });
      console.log(error.errors);
    }
  }, [error, location]);

  return (
    <LoginView
      props={{
        email,
        setEmail,
        username,
        setUsername,
        password,
        setPassword,
        onSubmit,
        location,
        data,
      }}
    />
  );
};

export default Login;
