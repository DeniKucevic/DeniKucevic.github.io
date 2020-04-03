import React, { useState, useEffect } from "react";
import { scienceNews } from "../../../Services/NewsApi/NewsApi";
import TopNews from "./MainComponents/TopNews";

const Science = props => {
  const { onCountChange } = props;
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    scienceNews({ onCountChange }).then(res => {
      setArticles(res.data.articles);
    });
  }, [onCountChange]);

  return (
    <div>
      {articles.map(el => (
        <TopNews article={el} key={el.publishedAt + el.title} />
      ))}
    </div>
  );
};

export default Science;
