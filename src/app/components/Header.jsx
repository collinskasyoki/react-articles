import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="short-header">
      <div className="gradient-block"></div>

      <div className="row header-content">
        <div className="logo">
          <Link to="/">Author</Link>
        </div>

        <nav id="main-nav-wrap">
          <ul className="main-navigation sf-menu sf-js-enabled">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/categories">Categories</Link>
            </li>
            <li>
              <Link to="/sites">Sites</Link>
            </li>
          </ul>
        </nav>

        <div className="search-wrap">
          <form role="search" method="get" className="search-form" action="#">
            <label>
              <span className="hide-content">Search for:</span>
              <input
                // Remove this when implementing
                readOnly={true}
                type="search"
                className="search-field"
                placeholder="Type Your Keywords"
                value=""
                name="s"
                title="Search for:"
                autoComplete="off"
              />
            </label>
            {/* Remove readonly when implementing */}
            <input
              readOnly={true}
              type="submit"
              className="search-submit"
              value="Search"
            />
          </form>

          <a href="#" id="close-search" className="close-btn">
            Close
          </a>
        </div>

        <div className="triggers">
          <a className="search-trigger" href="#">
            <i className="fa fa-search"></i>
          </a>
          <a className="menu-toggle" href="#">
            <span>Menu</span>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
