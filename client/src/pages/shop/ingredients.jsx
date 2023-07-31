import React from "react";

const Ingredients = (props) => {
  const { ingredients } = props.product;
  const ingredientsList = ingredients.split(" ");

  return (
    <div className="pb-40 pt-10 relative">
      <h2>Ingredients</h2>
      <ul className="text-xl font-thin">
        {ingredientsList.map((list, key) => (
          <li key={list}>&#x2022;{list}</li>
        ))}
      </ul>
    </div>
  );
};

export default Ingredients;
