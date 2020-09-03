import React from "react";

import "./style.css";

const BrowserExtensions = () => {
  return (
    <section id="browserExtensions" className="has-divider bg-primary-2-alt">
      <div className="divider flip-y">
        <img
          src="assets/img/dividers/divider-2.svg"
          alt="graphical divider"
          data-inject-svg
        />
      </div>
      <div className="container pt-3 pb-0">
        <div className="row justify-content-center text-center mb-6">
          <div className="col-xl-11 col-lg-9">
            <h2 className="mx-xl-6 h1">Browser Extension</h2>
            <p className="display-5 mx-xl-6">
              Install the handy browser extension to easily send links from your
              browser to the app and preview instantly.
            </p>
            <a
              className="extensionButton m-1 btn btn-inline btn-lg btn-outline-primary"
              href="https://addons.mozilla.org/en-US/firefox/addon/responsively-helper"
              target="_blank"
              rel="noreferrer"
            >
              <span className="m-1">Download for Firefox</span>
            </a>
            <a
              className="extensionButton m-1 btn btn-inline btn-lg btn-outline-primary"
              href="https://chrome.google.com/webstore/detail/responsively-helper/jhphiidjkooiaollfiknkokgodbaddcj"
              target="_blank"
              rel="noreferrer"
            >
              <span className="m-1">Download for Chrome </span>
            </a>
            <a
              className="extensionButton m-1 btn btn-inline btn-lg btn-outline-primary"
              href="https://microsoftedge.microsoft.com/addons/detail/responsively-helper/ooiejjgflcgkbbehheengalibfehaojn"
              target="_blank"
              rel="noreferrer"
            >
              <span className="m-1">Download for Edge </span>
            </a>
            <p className="lead"></p>
          </div>
        </div>
      </div>
      <div className="divider flip-x">
        <img
          src="assets/img/dividers/divider-3.svg"
          alt="graphical divider"
          data-inject-svg
        />
      </div>
    </section>
  );
};

export default BrowserExtensions;
