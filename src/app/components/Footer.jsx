import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="footer-main">
        <div className="row">
          <div className="col-eight tab-full mob-full footer-info">
            <h4>About This Site</h4>

            <p>
              This is the front-end of an article collection backend that
              periodically checks a few of my favourite sites and blogs, scraps
              the data, and gathers it in a database. The database feeds a
              FastAPI backend which then feeds this site.
            </p>
          </div>

          <div className="col-four tab-1-3 mob-1-2 site-links">
            <h4>Site Links</h4>

            <ul>
              <li>
                <Link to="/categories">Categories</Link>
              </li>
              <li>
                <Link to="/sites">Sites</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="row">
          <div className="col-twelve">
            <div className="copyright">
              <span>© Copyright</span>
              <span>
                Design by <a href="http://www.styleshout.com/">styleshout</a>
              </span>
            </div>

            <div id="go-top">
              <a className="smoothscroll" title="Back to Top" href="#top">
                <i className="icon icon-arrow-up"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
