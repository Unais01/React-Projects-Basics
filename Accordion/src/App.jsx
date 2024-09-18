import React, { useState } from "react";
import "./App.css";
import SingleQuestion from "./SingleQuestion";
import data from "./data.js";

const App = () => {
  const[questions,setQuestions]=useState(data);
  return (
    <main>
      <div className="container">
        <h3>Question And answer about Login</h3>
        <section className="info">
          {questions.map((question) => {
            return <SingleQuestion key={question.id} {...question}/>;
          })}
        </section>
      </div>
    </main>
  );
};

export default App;
