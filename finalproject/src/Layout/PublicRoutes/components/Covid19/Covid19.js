import React, { useState, useEffect } from "react";
import { covidNews } from "../../../../Services/NewsApi/NewsApi";
import "./Covid19.css";

const Covid19 = () => {
  const [articles, setArticles] = useState([]);
  const [perPage, setPerPage] = useState(5);
  const [page, setPage] = useState(0);
  const [pomocni, setPomocni] = useState([]);

  useEffect(() => {
    covidNews().then(res => {
      setArticles(res.data);
    });
  }, []);

  const pageNumber = () => (articles.length - 1) / perPage;
  const pages = pageNumber => {
    let pages = [];
    for (let i = 0; i < pageNumber; i++) {
      pages.push(i);
    }
    return pages;
  };

  const handleInput = e => {
    if (e.target.value === "") {
      setPomocni([]);
      return;
    }
    let filtered = articles.filter(el =>
      el.country.toLowerCase().includes(e.target.value)
    );
    setPomocni(filtered);
  };

  return (
    <div>
      <div className='covid-control'>
        <select onChange={e => setPerPage(e.target.value)}>
          <option value="10"> 10</option>
          <option value="20"> 20</option>
          <option value="30"> 30</option>
          <option value="50"> 50</option>
        </select>
        <input
          type="text"
          placeholder="Filter..."
          onChange={e => handleInput(e)}
        ></input>
      </div>
      <div className="corona-div-wrapper">
        {pomocni.length > 0
          ? pomocni.map(el => (
              <div key={el.country} className="corona-div">
                <h3>{el.country}</h3>
                <p>
                  Cases: {el.cases} | Today: {el.todayCases} | Active:{" "}
                  {el.active}
                </p>
                <p>
                  Deaths: {el.deaths} | Today: {el.todayDeaths}
                </p>
                <p>
                  Recovered: {el.recovered} | Critical: {el.critical}
                </p>
              </div>
            ))
          : articles.slice(page * perPage, (page + 1) * perPage).map(el => (
              <div key={el.country} className="corona-div">
                <h3>{el.country}</h3>
                <p>
                  Cases: {el.cases} | Today: {el.todayCases} | Active:{" "}
                  {el.active}
                </p>
                <p>
                  Deaths: {el.deaths} | Today: {el.todayDeaths}
                </p>
                <p>
                  Recovered: {el.recovered} | Critical: {el.critical}
                </p>
              </div>
            ))}
      </div>
      {pages(pageNumber()).map(page => (
        <button
          onClick={() => {
            setPage(page);
          }}
          key={page}
        >
          {page + 1}
        </button>
      ))}
    </div>
  );
};

export default Covid19;
