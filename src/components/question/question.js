import React from "react";
import classes from "./question.module.css";

const question = (props) => {
  return (
    <div className={classes.question}>The question is: {props.question}</div>
  );
};

export default question;
