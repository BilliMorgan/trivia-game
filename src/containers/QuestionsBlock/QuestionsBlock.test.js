import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import QuestionsBlock from "../../containers/QuestionsBlock/QuestionsBlock";
import Question from "../../components/Question/Question";
import Start from "../../components/Start/Start";
import FinalScore from "../../components/FinalScore/FinalScore";
import Counter from "../../components/Counter/Counter"

configure({ adapter: new Adapter() });

describe("<QuestionsBlock />", () => {
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


   it("should render <FinalScore/> element if {showResult: true} in QuestionBlock component", () => {
     wrapper.setState({ showResult: true, startGame: false });
     expect(wrapper.find(FinalScore)).toHaveLength(1);
   });


});
