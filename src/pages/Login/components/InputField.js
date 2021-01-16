import React from "react";

const InputField = ({ classes, icon, type, email, placeholder, setter }) => {
  // const
  return (
    <div className={classes}>
      <i className={icon} aria-hidden="true"></i>
      <input
        autoComplete={"false"}
        type={type}
        value={email}
        placeholder={placeholder}
        onChange={(e) => setter(e.target.value)}
      />
    </div>
  );
};

export default InputField;
