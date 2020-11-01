import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import QuestionsBlock from "../../containers/QuestionsBlock/QuestionsBlock";
import Question from "../../components/Question/Question";
import Start from "../../components/Start/Start";
import FinalScore from "../../components/FinalScore/FinalScore";
import Counter from "../../components/Counter/Counter";
import Answer from "../../components/AnswerOptions/AnswerOptions";
import CorrectAnswerOption from "../../components/CorrectAnswerOption/CorrectAnswerOption";

configure({ adapter: new Adapter() });

describe("Testing <QuestionsBlock /> conteiner", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<QuestionsBlock />);
  });

  it("should render <Start/> element if initial state {startGame: true} in QuestionBlock component", () => {
    expect(wrapper.find(Start)).toHaveLength(1);
  });

  it("should render <Question/> element if {startGame: false} in QuestionBlock component", () => {
    wrapper.setState({ startGame: false });
    expect(wrapper.find(Question)).toHaveLength(1);
  });

  it("should render <Counter/> element if {startGame: false} in QuestionBlock component", () => {
    wrapper.setState({ startGame: false });
    expect(wrapper.find(Counter)).toHaveLength(1);
  });

  it("should render <FinalScore/> element if {showResult: true} and {startGame: false} in QuestionBlock component", () => {
    wrapper.setState({ showResult: true, startGame: false });
    expect(wrapper.find(FinalScore)).toHaveLength(1);
  });

  it("should render <Answer/> elements in QuestionBlock component if answerOption is given", () => {
    wrapper.setState({
      showResult: false,
      startGame: false,
      answerOptions: ["test1", "test2", "test3", "test4"],
    });
    expect(wrapper.find(Answer)).toHaveLength(4);
  });

  it("should render <CorrectAnswerOption/> element if {showCorrectAnswer: true} in QuestionBlock component", () => {
    wrapper.setState({ startGame: false, showCorrectAnswer: true });
    expect(wrapper.find(CorrectAnswerOption)).toHaveLength(1);
  });
});
