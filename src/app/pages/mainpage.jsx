import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { fetchArticles } from "./data";
import ArticleRenderer from "./helpers/ArticleRenderer";

const MainPage = () => {
  const [page, setPage] = useState(1);
  const {
    data: articles,
    status,
    refetch: refetchArticles,
  } = useQuery("articles", () => fetchArticles(page));

  useEffect(() => {
    refetchArticles();
  }, [page]);

  const pages = articles
    ? Array.from({ length: articles.pages }, (_, index) => index + 1)
    : null;

  const pageChange = (page) => {
    setPage((prevState) => (prevState = page));
  };

  return (
    <div id="bricks">
      {status === "error" && <p>Error loading Articles!</p>}
      {status === "loading" && <p>Loading..</p>}
      {status === "success" && (
        <>
          <div className="row masonry">
            <div className="bricks-wrapper">
              <div className="grid-sizer"></div>
              <ArticleRenderer articles={articles} />
            </div>
          </div>

          {pages && (
            <div className="row">
              <nav className="pagination">
                <span
                  className={`page-numbers prev ${page === 1 && "inactive"}`}
                  style={page !== 1 ? { cursor: "pointer" } : {}}
                  onClick={page !== 1 && (() => pageChange(page - 1))}
                >
                  Prev
                </span>
                {articles.pages && articles.pages >= 1
                  ? pages.map((item, index) => {
                      return (
                        <a
                          key={index}
                          href="#"
                          onClick={() => pageChange(item)}
                          className={`page-numbers ${
                            item === page && "current"
                          } `}
                        >
                          {item}
                        </a>
                      );
                    })
                  : ""}
                <span
                  className={`page-numbers next ${
                    page === pages.length && "inactive"
                  }`}
                  style={page !== pages.length ? { cursor: "pointer" } : {}}
                  onClick={
                    page !== pages.length && (() => pageChange(page + 1))
                  }
                >
                  Next
                </span>
              </nav>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default MainPage;
