import React, { useEffect, useState } from "react";
import TopNews from "./MainComponents/TopNews";
import { topNews } from "../../../Services/NewsApi/NewsApi";

const Main = props => {
  const { onCountChange, onCatChange } = props;
  const [articlesN, setArticlesN] = useState([]);

  useEffect(() => {
    topNews({ onCountChange, onCatChange }).then(res => {
      setArticlesN(res.data.articles);
    });
  }, [onCountChange, onCatChange]);

  return (
    <div>
      {articlesN.map(el => (
        <TopNews article={el} key={el.publishedAt + el.title} />
      ))}
    </div>
  );
};

export default Main;
