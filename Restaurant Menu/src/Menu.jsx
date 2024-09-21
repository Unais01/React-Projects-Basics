import React from "react";

const Menu = ({ menu }) => {
  return (
    <div className="section-center">
      {menu.map((item) => {
        const { id, title, category, price, img, desc } = item;
        return (
          <article key={id} className="menu-item">
            <img src={img} alt={title} className="photo" />
            <div className="item-info">
              <header>
                <h4>{title}</h4>
                <span className="price">${price}</span  >
              </header>
              <p className="item-text">{desc}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default Menu;
