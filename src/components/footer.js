import React, { useEffect } from "react";
import "core-js/features/array/from";
import mrUtil from "../assets/js/mrare/util";
import { SVGInjector } from "@tanem/svg-injector";
import AOS from "aos";
import { Link } from "gatsby";

const Footer = () => {
  useEffect(() => {
    if (mrUtil.isIE()) {
      window.addEventListener("load", () => {
        SVGInjector(document.querySelectorAll("[class][data-inject-svg]"));
      });
      SVGInjector(document.querySelectorAll("[data-inject-svg]"));
    } else {
      SVGInjector(document.querySelectorAll("[data-inject-svg]"));
    }

    AOS.init({ once: true });
  }, []);

  return (
    <footer id="Contact-Us" className="pb-1 bg-primary-3 text-light">
      <div className="container">
        <div className="row mb-5">
          <div className="col">
            <div className="card card-body border-0 o-hidden mb-0 bg-primary text-light">
              <div className="position-relative d-flex flex-column flex-md-row justify-content-between align-items-center">
                <div className="h3 text-center mb-md-0">
                  Start building beautiful websites
                </div>
                <Link to="/download" className="btn btn-lg btn-white">
                  Download Now
                </Link>
                <div className="d-block d-sm-block d-md-block d-lg-none flex-column flex-sm-row justify-content-center ml-sm-4 mt-4 mt-sm-0">
                  <a
                    className="ml-lg-3"
                    href="https://www.producthunt.com/posts/responsively?utm_source=badge-top-post-badge&utm_medium=badge&utm_souce=badge-responsively"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      src="https://api.producthunt.com/widgets/embed-image/v1/top-post-badge.svg?post_id=200375&theme=light&period=daily"
                      alt="Responsively - Develop responsive web-apps 5x faster! | Product Hunt Embed"
                      style={{ width: 250, height: 50 }}
                      width="250px"
                      height="50px"
                    />
                  </a>
                </div>
              </div>
              <div className="decoration layer-0">
                <img
                  className="bg-primary-2"
                  src="/assets/img/decorations/deco-blob-1.svg"
                  alt="deco-blob-1 decoration"
                  data-inject-svg
                />
              </div>
            </div>
          </div>
        </div>
        <div className="row justify-content-center mb-2">
          <div className="col-auto">
            <ul className="nav">
              <li className="nav-item">
                <a
                  href="https://twitter.com/ResponsivelyApp"
                  className="nav-link"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    className="icon undefined"
                    src="/assets/img/icons/social/twitter.svg"
                    alt="twitter social icon"
                    data-inject-svg
                  />
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="https://github.com/responsively-org/responsively-app"
                  className="nav-link"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    className="icon undefined"
                    src="/assets/img/icons/social/github.svg"
                    alt="github social icon"
                    data-inject-svg
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col col-md-auto text-center">
            <small className="text-muted">
              &copy;2020 Responsively App, All rights reserved and subject to
              the <Link to="/privacy-policy">Privacy Policy</Link> and{" "}
              <Link to="/terms-and-conditions">Terms and Conditions</Link>.
            </small>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
