import React from "react";

import QuestionShowPage from "./QuestionShowPage";
import { QuestionIndexPage } from "./QuestionIndexPage";

const App = () => {
  return (
    <div className="app-wrapper">
      <QuestionIndexPage />
      <QuestionShowPage />
    </div>
  );
};

export default App;

