import React from "react";
import cx from "classnames";

import classes from "./Header.module.css";

const Header = ({ title = "Content", addOnclick }) => {
  return (
    <div className={classes.Header}>
      <div className={classes.left}>
        <span className={classes.title}>{title}</span>
      </div>
      <div className={classes.right}>
        <div className={classes.page_otions}>
          <span
            className={cx(classes.page_otions__alarm, classes.header_button)}
          >
            <i className="fa fa-bell" aria-hidden="true" />
          </span>
          <span
            className={cx(classes.page_otions__add, classes.header_button)}
            onClick={addOnclick}
          >
            +
          </span>
        </div>
        <div className={classes.user_options}>
          <span
            className={cx(
              classes.user_options__settings,
              classes.header_button
            )}
          >
            <i className="fa fa-cogs" aria-hidden="true"></i>
          </span>
          <span
            className={cx(classes.user_options__logout, classes.header_button)}
          >
            <i className="fa fa-sign-out" aria-hidden="true"></i>
          </span>
          <span
            className={cx(classes.user_options__info, classes.header_button)}
          >
            W
          </span>
        </div>
      </div>
    </div>
  );
};

export default Header;
