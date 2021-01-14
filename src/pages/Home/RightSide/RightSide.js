import React from "react";
import { Route, Switch } from "react-router-dom";

import classes from "./RightSide.module.css";
import Entries from "../../../components/Entries/Entries";
import Global from "../../../components/Global/Global";

const RightSide = () => {
  // RightSide Router
  return (
    <div className={classes.RightSide}>
      <Switch>
        <Route exact path="/content/entries" component={Entries} />;
        <Route exact path="/content/global" component={Global} />;
      </Switch>
    </div>
  );
};

export default RightSide;
