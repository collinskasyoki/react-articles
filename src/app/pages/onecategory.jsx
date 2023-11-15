import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router";
import { fetchCategoryArticles, fetchOneCategory } from "./data";
import ArticleRenderer from "./helpers/ArticleRenderer";

const OneCategory = () => {
  const [page, setPage] = useState(1);
  const { id } = useParams();
  const {
    data: categoryArticles,
    status,
    refetch: refetchCategoryArticles,
  } = useQuery("categoryarticles", () => fetchCategoryArticles(id, page));
  const { data: oneCategory, status: statusOneCategory } = useQuery(
    "onecategory",
    () => fetchOneCategory(id)
  );

  useEffect(() => {
    refetchCategoryArticles();
  }, [page]);

  const pages = categoryArticles
    ? Array.from({ length: categoryArticles.pages }, (_, index) => index + 1)
    : null;

  const pageChange = (page) => {
    setPage((prevState) => (prevState = page));
  };

  return (
    <div id="bricks">
      {status === "error" && <p>Error fetching articles!</p>}
      {status === "loading" && <p>Loading articles...</p>}
      {status === "success" && (
        <>
          {statusOneCategory === "error" && <p>Error fetching articles!</p>}
          {statusOneCategory === "loading" && <p>Loading articles...</p>}
          {statusOneCategory === "success" && (
            <div className="row narrow add-bottom text-center">
              <div className="col-twelve tab-full">
                <h1 style={{ textTransform: "capitalize" }}>
                  {oneCategory.name}
                </h1>
              </div>
            </div>
          )}

          <div className="row masonry">
            <div className="bricks-wrapper">
              <div className="grid-sizer"></div>
              <ArticleRenderer articles={categoryArticles} />
            </div>
          </div>
          {pages
            ? categoryArticles.pages &&
              categoryArticles.pages > 1 && (
                <div className="row">
                  <nav className="pagination">
                    <span
                      className={`page-numbers prev ${
                        page === 1 && "inactive"
                      }`}
                      style={page !== 1 ? { cursor: "pointer" } : {}}
                      onClick={page !== 1 ? (() => pageChange(page - 1)) : (undefined)}
                    >
                      Prev
                    </span>
                    {categoryArticles.pages && categoryArticles.pages >= 1
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
                        page !== pages.length ? (() => pageChange(page + 1)) : (undefined)
                      }
                    >
                      Next
                    </span>
                  </nav>
                </div>
              )
            : ""}
        </>
      )}
    </div>
  );
};

export default OneCategory;
