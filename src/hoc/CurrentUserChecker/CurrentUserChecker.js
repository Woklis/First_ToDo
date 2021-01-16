import { useEffect, useContext, Fragment } from "react";

import useFetch from "../../hooks/useFetch";
import useLocalStorage from "../../hooks/useLocalStorage";
import { CurrentUserContext } from "../../contexts/currentUser";

const CurrentUserChecker = ({ children }) => {
  const [{ response }, doFetch] = useFetch(
    "https://conduit.productionready.io/api/user"
  );
  const [token] = useLocalStorage("token");
  const [{ user }, setCurrentUser] = useContext(CurrentUserContext);

  useEffect(() => {
    if (!token) return;

    doFetch({
      method: "GET",
    });

    setCurrentUser((state) => ({
      ...state,
      isLoading: true,
      isLoggedIn: false,
    }));
  }, []);

  useEffect(() => {
    if (!response) return;

    setCurrentUser((state) => ({
      ...state,
      user: response.data.user,
      isLoading: false,
      isLoggedIn: true,
    }));
  }, [response]);

  return <Fragment>{children}</Fragment>;
};

export default CurrentUserChecker;
