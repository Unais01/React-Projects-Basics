import React from "react";

const Categories = ({ category, filterItems }) => {
  return (
    <div className="btn-container">
      {category.map((categoryList, index) => (
        <button
          type="button"
          className="btn"
          key={index}
          onClick={() => filterItems(categoryList)}
        >
          {categoryList}
        </button>
      ))}
    </div>
  );
};

export default Categories;
