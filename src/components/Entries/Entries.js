import React from "react";
import { useLocation } from "react-router-dom";
// import cx from "classnames";

import classes from "./Entries.module.css";
import Header from "../Header/Header";
import TagToggle from "./TagToggle/TagToggle";
import Table from "./Table/Table";

const Entries = () => {
  const tagItems = {
    "Show all": "show_all",
    Work: "work",
    Other: "other",
    Shop: "shop",
  };
  const location = useLocation();
  const hash = location.hash.slice(1);
  return (
    <div className={classes.Entries}>
      <Header />
      <div className={classes.Main}>
        <TagToggle tags={tagItems} hash={hash} path={location.pathname} />
        <Table />
      </div>
    </div>
  );
};

export default Entries;
