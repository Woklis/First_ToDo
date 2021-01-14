import React from "react";

import classes from "./Table.module.css";

const TableItem = ({ id }) => {
  return (
    <div className={classes.table_row}>
      <div className={classes.table_row__entry}>
        <input type="checkbox" id={id} name="done" />
        <label htmlFor={id} />
        Random page
      </div>
      <div className={classes.table_row__status}>OK</div>
      <div className={classes.table_row__created}>9/11/2018</div>
      <div className={classes.table_row__options}>
        <i className="fa fa-pencil-square-o" aria-hidden="true"></i>
      </div>
    </div>
  );
};

const Table = () => {
  return (
    <div className={classes.table}>
      <div className={classes.table_head}>
        <div className={classes.table_head__entry}>Entry</div>
        <div className={classes.table_head__status}>Status</div>
        <div className={classes.table_head__created}>Created</div>
      </div>
      <div className={classes.table_body}>
        <TableItem id={1} />
        <TableItem id={2} />
        <TableItem id={3} />
      </div>
    </div>
  );
};

export default Table;
