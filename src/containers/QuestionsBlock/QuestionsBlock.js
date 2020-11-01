import React, { Component } from "react";
import Question from "../../components/QuestionI/Question";
import Answer from "../../components/Answers/AnswerOptions";
import Counter from "../../components/CounterI/Counter";
import CorrectAnswerOption from "../../components/CorrectAnswer/CorrectAnswerOption";
import FinalScore from "../../components/FinalScoreI/FinalScore";
import Start from "../../components/StartI/Start";
import classes from "./QuestionsBlock.module.css";
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

  shuffleArray = (array) => {
    let currentIndex = array.length,
      temporaryValue,
      randomIndex;
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  };

  generateRandom = (min, max, questionOptions) => {
    const index = max - 1;
    questionOptions = Array.isArray(questionOptions)
      ? questionOptions
      : [questionOptions];
    let num = Math.floor(Math.random() * (index - min + 1)) + min;
    return questionOptions.includes(num)
      ? this.generateRandom(min, max, questionOptions)
      : num;
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

      const array1 = [];
      const incorrectAnswers = array1.concat(data[questionNumber].incorrect);
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
    return (
      <div>
        {this.state.startGame ? (
          <Start clicked={this.resetState} />
        ) : (
          <div>
            {this.state.showResult ? (
              <FinalScore
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
                  <CorrectAnswerOption
                    correct={this.state.correct}
                    clicked={this.nextQuestion}
                  />
                ) : null}
              </div>
            )}
          </div>
        )}
      </div>
    );
  }
}

export default QuestionBlock;
