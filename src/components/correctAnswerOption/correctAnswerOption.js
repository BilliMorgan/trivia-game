import React from "react";
import classes from "./CorrectAnswerOption.module.css"


const correctAnswerOption = (props) => {
  return (
    <div className={classes.correctAnswer}>
      <h2>The right answer is: {props.correct}</h2>
      <button className = {classes.button} onClick={props.clicked}>Go to next question</button>
    </div>
  );
}

export default correctAnswerOption;