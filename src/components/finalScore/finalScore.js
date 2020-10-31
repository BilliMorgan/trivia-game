import React from "react";
import classes from "./FinalScore.module.css";

const finalScore = (props) => {
  return (
    <div className={classes.finalScore}>
      <h4 className={classes.h4}>Your score is: {props.score}</h4>
      <button className={classes.finalScore} onClick={props.clicked}>
        Play again?
      </button>
    </div>
  );
};

export default finalScore;
