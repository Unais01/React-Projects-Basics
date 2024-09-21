import React, { useEffect, useState } from "react";

import "./App.css";
const url = "https://dummyjson.com/users";
const App = () => {
  const [person, setPerson] = useState([]);
  const [value, setValue] = useState(0);
  const [loading, setLoading] = useState(true);
  const fetchPerson = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setPerson(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchPerson();
  }, []);
  if (loading) {
    return (
      <div>
        <h2 style={{ textAlign: "center" }}>Loading...</h2>
      </div>
    );
  }
  return (
    <section className="section">
      <div className="title">
        <h2>experience</h2>
        <div className="underline"></div>
      </div>
      <div className="jobs-center">
        {/* btn container */}

        <div className="btn-container">
          <h3 style={{ position: "relative", top: "0" }}>Companies</h3>

          {person.users.map((item, index) => {
            return (
              <button
                key={item.id}
                onClick={() => setValue(index)}
                className={`job-btn ${index === value && "active-btn"}`}
              >
                {item.company.name}
              </button>
            );
          })}
        </div>
        {/* job info */}

        <article className="job-info">
          <h3>{person.users[value].company.title}</h3>
          <h4>{person.users[value].company.name}</h4>
          <p className="job-date">{person.users[value].birthDate}</p>
          <div className="job-desc">
            <p>Name : {person.users[value].firstName}</p>
            <br />
            <p>email : {person.users[value].email}</p>
            <br />
            <p>age: {person.users[value].age}</p>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
            delectus provident aut, laudantium commodi vitae totam labore
            quisquam fuga ipsam!
          </p>
          <p>User agent : {person.users[value].userAgent}</p>
        </article>
      </div>
      <button type="button" className="btn">
        more info
      </button>
    </section>
  );
};

export default App;
