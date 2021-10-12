import React, { useEffect, useRef } from "react";
import { Link } from "gatsby";
import Sticky from "sticky-js";

const Header = () => {
  const navRef = useRef();
  useEffect(() => {
    if (!navRef.current) {
      return;
    }
    const headerHeight = navRef.current.clientHeight;
    navRef.current.parentNode.style.height = `${headerHeight}px`;
    new Sticky(".navbar").update();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [navRef.current?.clientHeight]);

  return (
    <div className="navbar-container bg-primary-3">
      <nav
        ref={navRef}
        className="navbar navbar-expand-lg navbar-dark bg-primary-3"
        data-sticky="top"
      >
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img
              src="/assets/img/logo.svg"
              alt="Responsively logo"
              width="60px"
              className="navbar-logo-img"
            />
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
                  <a
                    href="https://opencollective.com/responsively"
                    className="nav-link"
                    aria-expanded="false"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Sponsor
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
              href="https://github.com/responsively-org/responsively-app"
              target="_blank"
              className="nav-link"
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
              title="Responsively Twitter"
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