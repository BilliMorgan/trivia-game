import React from 'react';
import classes from "./start.module.css"

const start = (props) => {
  return(
    <button className={classes.start} onClick = {props.clicked}>Start Game</button>
  )
};

export default start;