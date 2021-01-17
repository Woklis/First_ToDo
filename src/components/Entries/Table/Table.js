import React from "react";
import { v4 as uuidv4 } from "uuid";

import classes from "./Table.module.css";

const TableItem = ({ id, title, date }) => {
  return (
    <div className={classes.table_row}>
      <div className={classes.table_row__entry}>
        <input type="checkbox" id={id} name="done" />
        <label htmlFor={id} />
        {title}
      </div>
      <div className={classes.table_row__status}>OK</div>
      <div className={classes.table_row__created}>{date}</div>
      <div className={classes.table_row__options}>
        <i className="fa fa-pencil-square-o" aria-hidden="true"></i>
      </div>
    </div>
  );
};

// author: {username: "woklisgm", bio: null, image: "https://static.productionready.io/images/smiley-cyrus.jpg", following: false}
// body: "Teeeeees"
// createdAt: "2021-01-15T08:53:00.679Z"
// description: "Work"
// favorited: false
// favoritesCount: 1
// slug: "test-tag-list-75309f"
// tagList: []
// title: "Test tag list"
// updatedAt: "2021-01-15T08:55:17.362Z"

const Table = ({ articles }) => {
  return (
    <div className={classes.table}>
      <div className={classes.table_head}>
        <div className={classes.table_head__entry}>Entry</div>
        <div className={classes.table_head__status}>Status</div>
        <div className={classes.table_head__created}>Created</div>
      </div>
      <div className={classes.table_body}>
        {articles.map((item, index) => {
          const date = new Date(item.createdAt);
          return (
            <TableItem
              id={index}
              key={uuidv4()}
              title={item.title}
              date={date.toLocaleDateString()}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Table;
