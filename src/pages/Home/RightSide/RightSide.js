import React from "react";
import { Route, Switch, useLocation } from "react-router-dom";

import classes from "./RightSide.module.css";
import Entries from "../../../components/Entries/Entries";
import Global from "../../../components/Global/Global";

const RightSide = () => {
  // RightSide Router
  const location = useLocation();
  return (
    <div className={classes.RightSide}>
      {console.log(location)}
      {/* <Switch>
        <Route exact path="/content/entries" component={Entries} />;
        <Route exact path="/content/global" component={Global} />;
      </Switch> */}
      {location.pathname.toLocaleLowerCase() === "/content/entries" ? (
        <Entries />
      ) : null}
    </div>
  );
};

export default RightSide;
