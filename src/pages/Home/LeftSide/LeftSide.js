import React, { useState } from "react";

import classes from "./LeftSide.module.css";
import Menu from "./Menu/Menu";

const LeftSide = () => {
  const [menu] = useState({
    Dashboard: {
      items: ["Messages", "Tasks", "Notes"],
      icon: "fa fa-address-book",
    },
    Content: {
      items: ["Entries", "Global"],
      icon: "fa fa-file-text-o",
    },
    Files: {
      items: [],
      icon: "fa fa-folder-open-o",
    },
    Users: {
      items: [],
      icon: "fa fa-users",
    },
    Extend: {
      items: [],
      icon: "fa fa-address-book",
    },
    Settings: {
      items: [],
      icon: "fa fa-cogs",
    },
  });
  // const [mode, setMode] = useState("default"); // default || change

  return (
    <div className={classes.leftSide}>
      <div className={classes.logo}>
        <i className="fa fa-grav" aria-hidden="true"></i>
      </div>
      <Menu menu={menu} />
      {/* mode={mode} */}
    </div>
    // кнопка редактирования меню
  );
};

export default LeftSide;
