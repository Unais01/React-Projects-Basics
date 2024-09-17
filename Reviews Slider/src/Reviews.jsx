import React, { useState } from "react";
import people from "./data.js";
import { MdArrowBackIosNew } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";
import { FaQuoteLeft } from "react-icons/fa";
const Reviews = () => {
  const [index, setIndex] = useState(0);
  const { id, name, job, image, text } = people[index];

  const checkForNumber = (number) => {
    if (number > people.length - 1) {
      return 0;
    }
    if (number < 0) {
      return people.length - 1;
    }
    return number;
  };

  const nextPerson = () => {
    setIndex((prev) => {
      let newIndex = prev + 1;

      return checkForNumber(newIndex);
    });
  };
  const prevPerson = () => {
    setIndex((prev) => {
      let newIndex = prev - 1;
      return checkForNumber(newIndex);
    });
  };

  const randomPerson = () => {
    const randomNumber = Math.floor(Math.random() * people.length);
    console.log(randomNumber); //debug what we get

    setIndex(() => {
      if (randomNumber === index) {
        return checkForNumber(randomNumber + 1);
      }
      return randomNumber;
    });
  };
  return (
    <article className="content">
      <div className="image-ctn">
        <img src={image} alt={name} className="person-img" />
        <span className="quotes">
          <FaQuoteLeft />
        </span>
      </div>

      <h3 className="author-name">{name}</h3>
      <p className="author-job">{job}</p>
      <p className="text">{text}</p>

      <div>
        <button onClick={prevPerson}>
          <MdArrowBackIosNew />
        </button>
        <button onClick={nextPerson}>
          <MdArrowForwardIos />
        </button>
      </div>
      <button onClick={randomPerson}> surprise</button>
    </article>
  );
};

export default Reviews;
