import { useEffect, useState } from "react";
import { Newsitem } from "./Newsitem";

export const Newsbord = ({ category }) => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`;
    console.log("Fetching from:", url);
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log("API Response:", data);
        if (data.status === "ok") {
          setArticles(data.articles);
        } else {
          console.error("News API error:", data.message);
          setArticles([]); // fallback to empty
        }
      })
      .catch((err) => {
        console.error("Fetch failed:", err);
        setArticles([]);
      });
  }, [category]);
  

  return (
    <div>
      <h2 className="text-center my-4">
        Latest <span className="badge bg-danger">News</span>
      </h2>
  
      {/* 👇 Add this line for debugging */}
      <p className="text-muted text-center">
        Loaded {articles.length} articles
      </p>
  
      <div className="d-flex flex-wrap justify-content-center">
        {articles.map((news, index) => (
          <Newsitem
            key={news.url || index}
            title={news.title}
            description={news.description}
            src={news.urlToImage}
            url={news.url}
          />
        ))}
      </div>
    </div>
  );
  
};
