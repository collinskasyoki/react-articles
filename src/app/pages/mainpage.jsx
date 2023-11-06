import React from "react";
import { useQuery } from "react-query";
import { fetchArticles } from "./data";
import ArticleRenderer from "./helpers/ArticleRenderer";

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
              <ArticleRenderer articles={articles} />
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
