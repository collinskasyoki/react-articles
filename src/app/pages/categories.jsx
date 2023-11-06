import React from "react";
import { useQuery } from "react-query";
import { fetchCategories } from "./data";

const Categories = () => {
  const { data: categories, status } = useQuery("categories", () =>
    fetchCategories()
  );

  return (
    <>
      {status === "error" && <p>Error fetching categories!</p>}
      {status === "loading" && <p>Fetching categoreis...</p>}
      {status === "success" && (
        <div className="row half-bottom">
          <div className="col-twelve">
            <h3>Categories</h3>

            <ul className="stats-tabs">
              {categories && Array.isArray(categories)
                ? categories.map((category) => {
                    return (
                      <li key={category.id}>
                        <a
                          href={`/categories/${category.id}`}
                          style={{ textTransform: "capitalize" }}
                        >
                          {category.name}
                        </a>
                      </li>
                    );
                  })
                : ""}
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default Categories;
