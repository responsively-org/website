import React, { useEffect } from "react";
import { Link } from "gatsby";
import "bootstrap";
import $ from "jquery";
import Sticky from "../assets/js/mrare/sticky";

import "bootstrap/dist/css/bootstrap.css";

const Header = () => {
  useEffect(() => {
    const stickyElements = $.makeArray($("[data-sticky]"));

    /* eslint-disable no-plusplus */
    for (let i = stickyElements.length; i--; ) {
      const $sticky = $(stickyElements[i]);
      Sticky.jQueryInterface.call($sticky, $sticky.data());
    }
  }, []);

  return (
    <div className="navbar-container bg-primary-3">
      <nav
        className="navbar navbar-expand-lg navbar-dark bg-primary-3"
        data-sticky="top"
      >
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img src="/assets/img/logo.svg" alt="Responsively" width="60px" />
            Responsively
          </Link>
          <iframe
            title="GitHub stars"
            className="d-none d-sm-none d-md-none d-lg-block"
            src="https://ghbtns.com/github-btn.html?user=responsively-org&amp;repo=responsively-app&amp;type=star&amp;count=true"
            frameBorder="0"
            scrolling="0"
            width="160px"
            height="30px"
          ></iframe>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target=".navbar-collapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <img
              className="icon navbar-toggler-open"
              src="/assets/img/icons/interface/menu.svg"
              alt="menu interface icon"
              data-inject-svg
            />
            <img
              className="icon navbar-toggler-close"
              src="/assets/img/icons/interface/cross.svg"
              alt="cross interface icon"
              data-inject-svg
            />
          </button>

          <div className="collapse navbar-collapse justify-content-end p-3 p-md-0">
            <div className="py-2 py-lg-0">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link
                    to="/#Features"
                    className="nav-link"
                    aria-expanded="false"
                  >
                    Features
                  </Link>
                </li>
                <li className="nav-item">
                  <a
                    href="https://github.com/responsively-org/responsively-app/projects/12?fullscreen=true"
                    className="nav-link"
                    aria-expanded="false"
                    target="_blank"
                    rel="noreferrer"
                  >
                    RoadMap
                  </a>
                </li>
                <li className="nav-item">
                  <Link to="/blog" className="nav-link" aria-expanded="false">
                    Blog
                  </Link>
                </li>
              </ul>
            </div>
            <Link to="/download" className="btn btn-primary ml-lg-3">
              Download now
            </Link>
            <a
              className="ml-lg-3 d-none d-lg-block"
              href="https://www.producthunt.com/posts/responsively?utm_source=badge-top-post-badge&utm_medium=badge&utm_souce=badge-responsively"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://api.producthunt.com/widgets/embed-image/v1/top-post-badge.svg?post_id=200375&theme=light&period=daily"
                alt="Responsively - Develop responsive web-apps 5x faster | Product Hunt Embed"
                height="38px"
              />
            </a>
            <a
              href="https://github.com/responsively-org/responsively-app"
              target="_blank"
              className="nav-link ml-lg-2 d-block d-sm-block d-md-block d-lg-none flex-column flex-sm-row justify-content-center"
              aria-expanded="false"
              rel="noreferrer"
            >
              <img
                className="icon bg-primary"
                src="/assets/img/icons/social/github.svg"
                alt="icon"
                data-inject-svg
              />
            </a>
            <a
              href="https://twitter.com/ResponsivelyApp"
              target="_blank"
              className="nav-link"
              aria-expanded="false"
              rel="noreferrer"
            >
              <img
                className="icon bg-primary"
                src="/assets/img/icons/social/twitter.svg"
                alt="icon"
                data-inject-svg
              />
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
