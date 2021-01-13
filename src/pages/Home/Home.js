import React from "react";

import classes from "./Home.module.css";
import LeftSide from "./LeftSide/LeftSide";
import RightSide from "./RightSide/RightSide";

const Home = () => {
  return (
    <div className={classes.Home}>
      <LeftSide />
      <RightSide />
    </div>
  );
};

export default Home;
