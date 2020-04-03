import React from "react";

const CountrySelector = props => {
  let coutryOpt = [
    "ae",
    "ar",
    "at",
    "au",
    "be",
    "bg",
    "br",
    "ca",
    "ch",
    "cn",
    "co",
    "cu",
    "cz",
    "de",
    "eg",
    "fr",
    "gb",
    "gr",
    "hk",
    "hu",
    "id",
    "ie",
    "il",
    "in",
    "it",
    "jp",
    "kr",
    "lt",
    "lv",
    "ma",
    "mx",
    "my",
    "ng",
    "nl",
    "no",
    "nz",
    "ph",
    "pl",
    "pt",
    "ro",
    "ru",
    "sa",
    "se",
    "sg",
    "si",
    "sk",
    "th",
    "tr",
    "tw",
    "ua",
    "us",
    "ve",
    "za"
  ];

  return (
    <select onChange={props.handleChange}>
      <option value={"rs"} key={1}>
        rs
      </option>
      {coutryOpt.map(el => {
        return (
          <option value={el} key={el}>
            {el}
          </option>
        );
      })}
    </select>
  );
};

export default CountrySelector;
