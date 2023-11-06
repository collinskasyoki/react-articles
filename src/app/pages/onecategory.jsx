import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router";
import { fetchCategoryArticles, fetchOneCategory } from "./data";
import ArticleRenderer from "./helpers/ArticleRenderer";

const OneCategory = () => {
  const { id } = useParams();
  const { data: categoryArticles, status } = useQuery("categoryarticles", () =>
    fetchCategoryArticles(id)
  );
  const { data: oneCategory, status: statusOneCategory } = useQuery(
    "onecategory",
    () => fetchOneCategory(id)
  );

  const pages = categoryArticles
    ? Array.from({ length: categoryArticles.pages }, (_, index) => index + 1)
    : null;

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
          {console.log(categoryArticles.pages)}
          {pages
            ? categoryArticles.pages &&
              categoryArticles.pages > 1 && (
                <div className="row">
                  <nav className="pagination">
                    <span className="page-numbers prev inactive">Prev</span>
                    {pages.map((item, index) => {
                      return (
                        <a key={index} href="#" className="page-numbers">
                          {item}
                        </a>
                      );
                    })}
                    <a href="#" className="page-numbers next">
                      Next
                    </a>
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
