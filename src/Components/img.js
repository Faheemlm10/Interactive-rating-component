import React from "react";
import star from "../images/icon-star.svg";
import classes from "./img.module.css";

const Img = () => {
  return (
    <>
      <div className={classes.img}>
        <img src={star} alt="" />
      </div>
    </>
  );
};

export default Img;

// interactive-rating-component\src\images\icon-star.svg
