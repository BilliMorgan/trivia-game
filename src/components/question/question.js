import React from "react";
import classes from "./Question.module.css";

const question = (props) => {
  return (
    <div className={classes.question}>
      <h4>The question is:</h4>
      <h2>{props.question}</h2>
    </div>
  );
};

export default question;
