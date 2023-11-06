import React from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import fetchArticles from "./data";

const MainPage = () => {
  const { data: articles, status } = useQuery("articles", () =>
    fetchArticles()
  );

  const pages = articles
    ? Array.from({ length: articles.pages }, (_, index) => index + 1)
    : null;

  return (
    <div id="bricks">
      {status === "error" && <p>Error loading Articles!</p>}
      {status === "loading" && <p>Loading..</p>}
      {status === "success" && (
        <>
          <div className="row masonry">
            <div className="bricks-wrapper">
              <div className="grid-sizer"></div>
              <article className="brick entry format-quote animate-this">
                <div className="entry-thumb">
                  <blockquote>
                    <p>
                      Good design is making something intelligible and
                      memorable. Great design is making something memorable and
                      meaningful.
                    </p>

                    <cite>Dieter Rams</cite>
                  </blockquote>
                </div>
              </article>
              {articles && Array.isArray(articles.items)
                ? articles.items.map((onearticle) => {
                    return (
                      <>
                        <article
                          key={onearticle.id}
                          className="brick entry format-standard animate-this"
                        >
                          <div className="entry-thumb">
                            <Link to="/item" className="thumb-link">
                              <img
                                src={onearticle.image_thumbnail_url}
                                alt="image"
                              />
                            </Link>
                          </div>
                          <div className="entry-text">
                            <div className="entry-header">
                              <div className="entry-meta">
                                <span className="cat-links">
                                  <a href="#">Category 1</a>
                                  <a href="#">Category 2</a>
                                </span>
                              </div>
                              <h1 className="entry-title">
                                <Link to="/item">{onearticle.title}</Link>
                              </h1>
                            </div>
                          </div>
                        </article>
                      </>
                    );
                  })
                : "there"}
            </div>
          </div>

          {pages && (
            <div className="row">
              <nav className="pagination">
                <span className="page-numbers prev inactive">Prev</span>
                {articles.pages && articles.pages >= 1
                  ? pages.map((item, index) => {
                      return (
                        <a key={index} href="#" className="page-numbers">
                          {item}
                        </a>
                      );
                    })
                  : ""}
                <a href="#" className="page-numbers next">
                  Next
                </a>
              </nav>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default MainPage;
