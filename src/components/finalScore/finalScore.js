import React from "react"


const finalScore = (props) => {
  return (<>
    <div>Your score {props.score}</div>
    <button onClick = {props.clicked}> Play again</button>
    </>
  )
  
  
}

export default finalScore;