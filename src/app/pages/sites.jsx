import React from "react";
import { useQuery } from "react-query";
import { fetchSites } from "./data";

const Sites = () => {
  const { data: sites, status } = useQuery("sites", () => fetchSites());

  return (
    <div className="row">
      <div className="col-twelve">
        {status === "error" && <p>Error fetching sites!</p>}
        {status === "loading" && <p>Error fetching sites!</p>}
        {status === "success" && Array.isArray(sites) ? (
          <>
            {sites.map((site) => {
              return (
                <>
                  <div className="primary-content" key={site.id}>
                    <h1 className="entry-title add-bottom">{site.title}</h1>
                    <p className="lead">{site.description}</p>
                  </div>
                  <hr />
                </>
              );
            })}
          </>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Sites;
