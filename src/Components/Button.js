import React, { useState } from "react";

import classes from "./Button.module.css";

const Button = (props) => {
  const [isActive, setIsActive] = useState(false);
  const value = props.number;

  const clicked = () => {
    setIsActive(true);
    props.ratingFunction(value);
  };
  return (
    <button
      className={classes["rating-btn"]}
      onClick={clicked}
      style={{
        backgroundColor: isActive ? "hsl(25, 97%, 53%)" : "",
        color: isActive ? "white" : "",
      }}
      value={props.number}
    >
      {value}
    </button>
  );
};

export default Button;
