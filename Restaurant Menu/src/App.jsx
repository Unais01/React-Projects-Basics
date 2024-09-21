import React, { useState } from "react";
import Menu from "./Menu";
import data from "./data.js";
import Categories from "./Categories.jsx";
import "./App.css";

const categories = ["all", ...new Set(data.map((item) => item.category))];

const App = () => {
  const [menu, setMenu] = useState(data);
  const [category, setCategory] = useState(categories);
  // console.log(category);
  const filterItems = (selectedCategory) => {
    if (selectedCategory === "all") {
      setMenu(data);
      return;
    }
    const newMenuItems = data.filter(
      (item) => item.category === selectedCategory
    );
    setMenu(newMenuItems);
  };
  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>our menu</h2>
          <div className="underline"></div>
        </div>
        <Categories category={category} filterItems={filterItems} />
        <Menu menu={menu} />
      </section>
    </main>
  );
};

export default App;
