import React, { Component } from "react";
import Question from "../../components/question/question";
import Answer from "../../components/answerOption/answerOption";
import Counter from "../../components/counter/counter";
import classes from "./questionBlock.module.css";
import data from "../../assets/Apprentice_TandemFor400_Data.json";

class QuestionBlock extends Component {
  state = {
    question: "",
    allOptions: [],
    correct: "",
    questionId: [1],
    correctAnswers: 0,
  };

  componentDidMount() {
    const incorrectAnswers = data[0].incorrect;
    const correctAnswer = data[0].correct;
    incorrectAnswers.push(correctAnswer);
    const allOptions = this.shuffleArray(incorrectAnswers);
    this.setState({
      question: data[this.state.questionId].question,
      allOptions: allOptions,
      correct: data[this.state.questionId].correct,
    });
  }
  shuffleArray = (array) => {
    let currentIndex = array.length,
      temporaryValue,
      randomIndex;
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  };

  generateRandom(min, max, failOn) {
    failOn = Array.isArray(failOn) ? failOn : [failOn];
    let num = Math.floor(Math.random() * (max - min + 1)) + min;
    return failOn.includes(num) ? this.generateRandom(min, max, failOn) : num;
  }

  
  setNextQuestion() {
    const questionNumber = this.generateRandom(
      1,
      data.length,
      this.state.questionId
      );
      this.setState({
        question: data[questionNumber].question,
        correct: data[questionNumber].correct,
      });
    }
    
    handleAnswerSelected(event) {
      // this.setUserAnswer(event.target.value);
  
      setTimeout(() => this.setNextQuestion(), 1000);
    }
  // setUserAnswer(answer) {
  //   const updatedAnswerCount = { ...this.state };
  // }

  render() {
    console.log(this.state);
    return (
      <div className={classes.questionBlock}>
        <Counter counter={this.state.counter} />
        <Question question={this.state.question} />
        {this.state.allOptions.map((answer) => (
          <Answer
            answer={answer}
            key={answer}
            clicked={this.handleAnswerSelected}
          />
        ))}

        {/* <div> Submit</div> */}

        <div>Next</div>
      </div>
    );
  }
}

export default QuestionBlock;
