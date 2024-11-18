import React, { useState } from "react";
import "./App.css";
import data from "./data.js";
const App = () => {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState([]);
  // const [text, setText] = useState(data[index]);
  const handleSubmit = (e) => {
    e.preventDefault();

    let validIndex = index;

    // Ensure index is at least 1
    if (validIndex <= 0) {
      validIndex = 1;
    }

    // Ensure index does not exceed the number of available paragraphs
    if (validIndex > data.length) {
      validIndex = data.length;
    }

    // Set the state with the sliced data
    setText(data.slice(0, validIndex));
  };

  return (
    <section className="section-centre">
      <form onSubmit={handleSubmit}>
        <label htmlFor="paragraph">Paragraph you want :</label>
        <input
          type="number"
          id="paragraph"
          onChange={(e) => setIndex(e.target.value)}
        />
        <button className="btn" type="submit">
          Generate
        </button>
      </form>
      <div className="paragraph-section">
        {text.map((item) => (
          <p className="single-paragraph">{item}</p>
        ))}
      </div>
    </section>
  );
};

export default App;
