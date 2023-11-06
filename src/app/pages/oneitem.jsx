import React from "react";
import { useQuery } from "react-query";
import { Link, useParams } from "react-router-dom";
import parse from "html-react-parser";

import { fetchOneArticle } from "./data";

const OneItem = () => {
  const { id } = useParams();
  const { data: oneArticle, status } = useQuery("onearticle", () =>
    fetchOneArticle(id)
  );

  return (
    <>
      {status === "error" && <p>Error loading article!</p>}
      {status === "loading" && <p>Loading article...</p>}
      {status === "success" && oneArticle ? (
        <section id="content-wrap" className="blog-single">
          <div className="row">
            <div className="col-twelve">
              <article className="format-standard">
                <div className="content-media">
                  <div className="post-thumb">
                    <img src={oneArticle.image_url} />
                  </div>
                </div>

                <div className="primary-content">
                  <h1 className="page-title">{oneArticle.title}</h1>

                  <ul className="entry-meta">
                    <li className="date">{oneArticle.date_published}</li>
                    <li className="cat">
                      {oneArticle.categories.map((category) => {
                        return (
                          <Link
                            key={category.id}
                            to=""
                            style={{ textTransform: "capitalize" }}
                          >
                            {category.name}
                          </Link>
                        );
                      })}
                    </li>
                  </ul>

                  {parse(oneArticle.content)}

                  <p className="tags">
                    <span>Tagged in :</span>
                    {oneArticle.categories.map((category) => {
                      return (
                        <Link key={category.id} to="">
                          {category.name}
                        </Link>
                      );
                    })}
                  </p>
                </div>

                <div className="pagenav group">
                  <div className="prev-nav">
                    <a href="#" rel="prev">
                      <span>Previous</span>
                      Previous Post
                    </a>
                  </div>
                  <div className="next-nav">
                    <a href="#" rel="next">
                      <span>Next</span>
                      Next Post
                    </a>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </section>
      ) : (
        ""
      )}
    </>
  );
};

export default OneItem;
