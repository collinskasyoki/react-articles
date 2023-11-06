import React from "react";
import { Link } from "react-router-dom";

const ArticleRenderer = ({ articles }) => {
  return (
    <>
      {articles && Array.isArray(articles.items)
        ? articles.items.map((onearticle) => {
            return (
              <article
                key={onearticle.id}
                className="brick entry format-standard animate-this"
              >
                <div className="entry-thumb">
                  <Link to={`/item/${onearticle.id}`} className="thumb-link">
                    <img src={onearticle.image_thumbnail_url} alt="image" />
                  </Link>
                </div>
                <div className="entry-text">
                  <div className="entry-header">
                    <div className="entry-meta">
                      {/* <span className="cat-links">
                        <a href="#">Category 1</a>
                        <a href="#">Category 2</a>
                      </span> */}
                    </div>
                    <h1 className="entry-title">
                      <Link to={`/item/${onearticle.id}`}>
                        {onearticle.title}
                      </Link>
                    </h1>
                  </div>
                </div>
              </article>
            );
          })
        : "there"}
    </>
  );
};

export default ArticleRenderer;
