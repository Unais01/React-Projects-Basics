import React, { useState } from "react";
import data from "./data";
import List from "./List";
function App() {
  const [people, setPeople] = useState(data);
  return (
    <main>
      <section className="container">
        <h3>{people.length} birthdays today</h3>

        <List peopleList={people} setPeople={setPeople} />
        <button onClick={() => setPeople([])}>clear all</button>
        <button onClick={() => setPeople(people.length > 0 ? [] : data)}>
          Reset
        </button>
      </section>
    </main>
  );
}
export default App;
