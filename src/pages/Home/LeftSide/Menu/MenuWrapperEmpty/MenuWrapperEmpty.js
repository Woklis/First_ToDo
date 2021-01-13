import React from "react";

import classes from "../Menu.module.css";

const MenuWrapperEmpty = ({ title, icon, clickHandler }) => {
  return (
    <div className={classes.wrapper} onClick={() => clickHandler(title)}>
      <div className={classes.parent}>
        <div className={classes.name}>
          <i className={icon} aria-hidden="true" />
          <span>{title}</span>
        </div>
      </div>
    </div>
  );
};

export default MenuWrapperEmpty;
