import React from "react";
import cx from "classnames";
import { v4 as uuidv4 } from "uuid";

import classes from "./TagToggle.module.css";

const TagToggle = ({ tags, path, hash }) => {
  return (
    <div className={classes.TagToggle}>
      {Object.keys(tags).map((item) => {
        const value = tags[item];
        return (
          <a
            key={uuidv4()}
            className={cx({
              [classes.navLink]: true,
              [classes.navLink_active]: hash === value,
            })}
            href={`${path}#${value}`}
          >
            {item}
          </a>
        );
      })}
    </div>
  );
};

export default TagToggle;
