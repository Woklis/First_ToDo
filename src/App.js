import React, { useContext } from "react";

import { CurrentUserContext } from "./contexts/currentUser";
import Router from "./routes/Router";
import classes from "./App.module.css";

const App = () => {
  const [currentUserState] = useContext(CurrentUserContext);

  console.log("state", currentUserState);

  return (
    <div className={classes.App}>
      <Router isLoggedIn={currentUserState.isLoggedIn} />
    </div>
  );
};

export default App;
