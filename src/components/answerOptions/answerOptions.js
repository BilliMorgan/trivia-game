import React from "react";
import classes from "./AnswerOptions.module.css";

const answer = (props) => {
  return (
    <button 
    className={classes.answer}
    onClick={props.clicked}
    disabled={props.disabled}
    >
      {props.answer} 
    </button>
  );
};

export default answer;
