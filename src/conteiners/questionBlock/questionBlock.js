import React, { Component } from "react";
import Question from "../../components/question/question";
import Answer from "../../components/answerOptions/answerOptions";
import Counter from "../../components/counter/counter";
import Correctansweroption from "../../components/correctAnswerOption/correctAnswerOption";
import Finalscore from "../../components/finalScore/finalScore";
import Start from "../../components/start/start";
import classes from "./questionBlock.module.css";
import data from "../../assets/Apprentice_TandemFor400_Data.json";

class QuestionBlock extends Component {
  state = {
    question: "",
    answerOptions: [],
    correct: "",
    questionId: [],
    correctAnswers: 0,
    showCorrectAnswer: false,
    showResult: false,
    startGame: true,
  };

  // componentDidMount = () => {
  //   const questionNumber = this.generateRandom(
  //     0,
  //     data.length,
  //     this.state.questionId
  //   );
  //   const incorrectAnswers = data[questionNumber].incorrect;
  //   const correctAnswer = data[questionNumber].correct;
  //   incorrectAnswers.push(correctAnswer);
  //   const answers = this.shuffleArray(incorrectAnswers);
  //   const updatedAnswerCount = [...this.state.questionId, questionNumber];
  //   this.setState({
  //     question: data[questionNumber].question,
  //     answerOptions: answers,
  //     correct: data[questionNumber].correct,
  //     questionId: updatedAnswerCount,
  //   });
  // };
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

  generateRandom = (min, max, failOn) => {
    let index = max - 1;
    failOn = Array.isArray(failOn) ? failOn : [failOn];
    let num = Math.floor(Math.random() * (index - min + 1)) + min;
    return failOn.includes(num) ? this.generateRandom(min, max, failOn) : num;
  };

  checkAnswer = (event) => {
    if (event.target.outerText === this.state.correct) {
      this.setState({
        correctAnswers: this.state.correctAnswers + 1,
        showCorrectAnswer: true,
      });
    } else {
      this.setState({
        showCorrectAnswer: true,
      });
    }
  };


  nextQuestion = () => {
    if (this.state.questionId.length < 10) {
      const questionNumber = this.generateRandom(
        0,
        data.length,
        this.state.questionId
      );

      const array1 = []
      const incorrectAnswers = array1
        .concat(data[questionNumber].incorrect)
      incorrectAnswers.push(data[questionNumber].correct);
      const answers = this.shuffleArray(incorrectAnswers);
      const updatedAnswerCount = [...this.state.questionId, questionNumber];
      

      this.setState({
        question: data[questionNumber].question,
        answerOptions: answers,
        correct: data[questionNumber].correct,
        showCorrectAnswer: false,
        questionId: updatedAnswerCount,
      });
    } else {
      this.setState({
        showResult: true,
      });
    }
  };

  resetState = () => {
    const questionNumber = this.generateRandom(
      0,
      data.length,
      this.state.questionId
    );
    const array1 = [];
    const incorrectAnswers = array1.concat(data[questionNumber].incorrect);
    incorrectAnswers.push(data[questionNumber].correct);
    const answers = this.shuffleArray(incorrectAnswers);

    const initReset = {
      question: data[questionNumber].question,
      answerOptions: answers,
      correct: data[questionNumber].correct,
      questionId: [questionNumber],
      correctAnswers: 0,
      showCorrectAnswer: false,
      showResult: false,
      startGame: false,
      
    };
    this.setState(initReset);
  };

  render() {
    // console.log(this.state.correctAnswers);
    return (
      <>
        <div>
          {this.state.startGame ? (
            <Start clicked={this.resetState} />
          ) : (
            <div>
              {this.state.showResult ? (
                <Finalscore
                  score={this.state.correctAnswers}
                  clicked={this.resetState}
                />
              ) : (
                <div className={classes.questionBlock}>
                  <Counter counter={this.state.questionId.length} />
                  <Question question={this.state.question} />
                  {this.state.answerOptions.map((answer, index) => (
                    <Answer
                      answer={answer}
                      clicked={this.checkAnswer}
                      key={index}
                      disabled={this.state.showCorrectAnswer}
                    />
                  ))}
                  {this.state.showCorrectAnswer ? (
                    <Correctansweroption
                      correct={this.state.correct}
                      clicked={this.nextQuestion}
                    />
                  ) : null}
                </div>
              )}
            </div>
          )}
        </div>
      </>
    );
  }
}

export default QuestionBlock;
