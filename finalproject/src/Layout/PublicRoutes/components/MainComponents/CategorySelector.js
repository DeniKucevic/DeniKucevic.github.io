import React from "react";
import './CategorySelector.css'

const CategorySelector = props => {
  let categoryOpt = [
    "business",
    "entertainment",
    "health",
    "science",
    "sports",
    "technology"
  ];

  return (
    <select className="general-select" onChange={props.handleChange}>
      <option value="general" key="2">
        general
      </option>
      {categoryOpt.map(el => {
        return (
          <option value={el} key={el}>
            {el}
          </option>
        );
      })}
    </select>
  );
};

export default CategorySelector;
