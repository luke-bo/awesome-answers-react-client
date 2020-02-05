import React, { Component } from "react";

import "./css/QuestionShowPage.css";
import { QuestionDetails } from "./QuestionDetails";
import { AnswerList } from "./AnswerList";
import oneQuestionData from "../oneQuestionData";

class QuestionShowPage extends Component {
  constructor(props) {
    // When using a constructor in a class-based
    // component, you must call the 'Component' class
    // constructor with 'super' passing it the 'props'
    super(props);
    this.state = {
      question: oneQuestionData
    };
  }
  render() {
    debugger;
    return (
      <div className="Page">
        <QuestionDetails
          // verbose way to explicitly pass each prop
          // id={this.state.}
          // title={this.state.question.title}
          // body={this.state.question.body}
          // author={this.state.question.author}
          // view_count={this.state.question.view_count}
          // created_at={this.state.question.created_at}
          // destructuring syntax sugar
          {...this.state.question}
        />
        <AnswerList answers={this.state.question.answers} />
      </div>
    );
  }
}

export default QuestionShowPage;