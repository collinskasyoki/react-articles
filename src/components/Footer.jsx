import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer>
          <div className="footer-main">
            <div className="row">
              <div className="col-eight tab-full mob-full footer-info">
                <h4>About This Site</h4>

                <p>
                  Lorem ipsum Ut velit dolor Ut labore id fugiat in ut fugiat
                  nostrud qui in dolore commodo eu magna Duis cillum dolor
                  officia esse mollit proident Excepteur exercitation nulla.
                  Lorem ipsum In reprehenderit commodo aliqua irure labore.
                </p>
              </div>

              <div className="col-four tab-1-3 mob-1-2 site-links">
                <h4>Site Links</h4>

                <ul>
                  <li>
                    <Link to="/about">About</Link>
                  </li>
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
                    Design by{" "}
                    <a href="http://www.styleshout.com/">styleshout</a>
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
  )
}

export default Footer