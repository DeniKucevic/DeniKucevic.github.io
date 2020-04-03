import React, { useState, useEffect } from "react";
import { searchNews } from "../../../Services/NewsApi/NewsApi";
import TopNews from "../../PublicRoutes/components/MainComponents/TopNews";

const SearchNews = ({ newState }) => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    searchNews(newState).then(res => {
      setArticles(res.data.articles);
      console.log("bla");
    });
  }, [newState]);

  return (
    <div>
      {articles.map(el => (
        <TopNews article={el} key={el.publishedAt + el.title} />
      ))}
    </div>
  );
};

export default SearchNews;
