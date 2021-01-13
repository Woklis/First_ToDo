import React from "react";

const ErrorField = ({ classes, error }) => {
  return <span className={classes}>{error}</span>;
};

export default ErrorField;
