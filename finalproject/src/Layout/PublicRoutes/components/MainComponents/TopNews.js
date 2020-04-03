import React from "react";
import "./TopNews.css";

const TopNews = ({ article }) => {
  let isoDate = article.publishedAt;
  let date = new Date(isoDate);
  return (
    <div key={article.publishedAt} className="top-container">
      <div>
        <a href={article.url} target="_blank" rel="noopener noreferrer">
          <img src={article.urlToImage} alt="" className="top-img"></img>
        </a>
      </div>
      <div className="article-text">
        <div>
          <a
            className="image-only"
            href={article.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h3 className="top-title">{article.title}</h3>
          </a>
        </div>
        <div className="article-holder">
          <p className="top-desc">{article.description}</p>
          <div className="top-info">
            <label className="time-label">
              <span className="time-label">Source: </span>
              {article.author}
            </label>
            <label className="time-label">
              <span className="time-label">Time: </span>
              {date.toLocaleDateString("en-GB")}
            </label>
            <label className="time-label">
              <span className="time-label">At: </span>
              {date.toLocaleTimeString("en", {
                timeStyle: "short",
                hour12: false,
                timeZone: "UTC"
              })}
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNews;
