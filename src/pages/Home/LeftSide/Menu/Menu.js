import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

import classes from "./Menu.module.css";
import MenuWrapper from "./MenuWrapper/MenuWrapper";
import MenuWrapperEmpty from "./MenuWrapperEmpty/MenuWrapperEmpty";

const Menu = ({ menu }) => {
  const [activeItem, setActiveItem] = useState("");
  const [closedItems, setClosedItems] = useState(() => {
    return [...Object.keys(menu).filter((item) => menu[item].items.length > 0)];
  });

  const rollUpHandler = (title) => {
    closedItems.includes(title)
      ? setClosedItems([...closedItems.filter((item) => item !== title)]) // Заменить
      : setClosedItems([...closedItems, title]);
  };

  useEffect(() => {
    console.log(activeItem);
  }, [activeItem]);

  return (
    <div className={classes.menu}>
      {Object.keys(menu).map((item) => {
        return menu[item].items.length > 0 ? (
          <MenuWrapper
            activeWrapper={menu[item].items.includes(activeItem) ? true : false}
            key={uuidv4()}
            rollUpHandler={rollUpHandler}
            clickHandler={setActiveItem}
            title={item}
            items={menu[item].items}
            icon={menu[item].icon}
            visible={!closedItems.includes(item)}
          />
        ) : (
          <MenuWrapperEmpty
            key={uuidv4()}
            clickHandler={setActiveItem}
            title={item}
            icon={menu[item].icon}
          />
        );
      })}
    </div>
  );
};

export default Menu;

/*
MenuWrapper <
    MenuItem
MenuWrapper >
    MenuItem
    MenuItem
MenuWrapperEmpty
    []
MenuWrapperEmpty
    []

*/
