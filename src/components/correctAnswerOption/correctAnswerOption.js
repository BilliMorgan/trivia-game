import React from "react";


const correctAnswerOption = (props) => {
  return (
    <div>
      The right answer is: {props.correct}
      <button onClick={props.clicked}>Go to next question</button>
    </div>
  );
}

export default correctAnswerOption;