import React from 'react';
import classes from "./Start.module.css"

const start = (props) => {
  return(
    <button className={classes.start} onClick = {props.clicked}>Start Game</button>
  )
};

export default start;