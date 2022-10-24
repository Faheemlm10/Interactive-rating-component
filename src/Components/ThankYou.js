import React from "react";
import classes from "./ThankYou.module.css";
import Thanks from "../images/illustration-thank-you.svg";

const ThankYou = (props) => {
  return (
    <>
      <div className={classes.container}>
        <div className={classes["thank-you"]}>
          <div className={classes["thank-img"]}>
            <img src={Thanks} alt="" />
          </div>
          <div className={classes["message"]}>
            You selected {props.ratedNumber} out of 5
          </div>

          <div className={classes["final-message"]}>
            <h2>Thank you!</h2>
            <p>
              We appreciate you taking the time to give a rating. If you ever
              need more support, don’t hesitate to get in touch!
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ThankYou;
