import React from "react";
import cx from "classnames";
import { v4 as uuidv4 } from "uuid";

import classes from "../Menu.module.css";
import { NavLink } from "react-router-dom";

const MenuWrapper = ({
  title,
  items,
  icon,
  visible,
  clickHandler,
  rollUpHandler,
  activeWrapper,
}) => {
  return (
    <div className={classes.wrapper}>
      <div
        className={cx({
          [classes.parent]: true,
          [classes.active]: activeWrapper,
        })}
        onClick={() => rollUpHandler(title)}
      >
        <div className={classes.name}>
          <i className={icon} aria-hidden="true" />
          <span>{title}</span>
        </div>
        {visible ? (
          <i className={cx({ [classes.arrow]: true, [classes.up]: true })} />
        ) : (
          <i className={cx({ [classes.arrow]: true, [classes.down]: true })} />
        )}
      </div>
      <div
        className={cx({ [classes.childs]: true, [classes.visible]: !visible })}
      >
        {items.map((item) => (
          <NavLink
            exact
            to={`/${title}/${item}`}
            className={classes.child}
            activeClassName={classes.active}
            onClick={() => clickHandler(item)}
            key={uuidv4()}
          >
            <div className={classes.child_icon}>
              <i />
            </div>
            <div className={classes.child_title}>{item}</div>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default MenuWrapper;
