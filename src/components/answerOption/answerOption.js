import React from "react";
import classes from "./answer.module.css";

const answer = (props) => {
  return (
    // <button className={classes.answer}>{props.answer} </button>
    <li className={classes.answer}>
      <input
        type="radio"
        className={classes.radioCustomButton}
        name="radioGroup"
        id={props.answer}
        value={props.answer}
        onClick={props.clicked}
      />
      <label htmlFor={props.answer} className={classes.radioCustomLabel}>
        {props.answer}
      </label>
    </li>
  );
};

export default answer;
