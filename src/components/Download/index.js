import React, { useEffect, useState } from "react";
import cx from "classnames";
import Clipboard from "clipboard";
import "./style.css";
import ClipboardIcon from "./ClipboardIcon";
import $ from "jquery";
import { CarbonAds } from "../CarbonAds";
import PlatformsDownload from "./PlatformsDownload";
import { motion, AnimatePresence } from "framer-motion/dist/framer-motion";

const variants = {
  enter: (direction) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
};

const Download = () => {
  const [version, setVersion] = useState(null);
  const [betaVersion, setBetaVersion] = useState(null);
  const [enableBeta, setEnableBeta] = useState(false);
  const [publishedTs, setPublishedTs] = useState(null);
  const [betaPublishedTs, setBetaPublishedTs] = useState(null);
  const [rpmURL, setRpmURL] = useState(
    "https://github.com/responsively-org/responsively-app-releases/releases/download/v[VERSION]/Responsively-App-[VERSION].x86_64.rpm"
  );

  useEffect(() => {
    (async () => {
      const res = JSON.parse(
        await fetch(
          "https://api.github.com/repos/responsively-org/responsively-app-releases/releases"
        ).then((res) => res.text())
      );
      const latestRelease = res[0];
      const tagName = latestRelease.tag_name;
      console.log("latestRelease", latestRelease);
      setVersion(tagName);
      setPublishedTs(new Date(latestRelease.published_at));
      var versionName = tagName.substring(1);
      setRpmURL(
        `https://github.com/responsively-org/responsively-app-releases/releases/download/${tagName}/Responsively-App-${versionName}.x86_64.rpm`
      );
    })();

    const cp = new Clipboard(".copy-icon");
    const $copyBtn = $(".copy-icon");
    $copyBtn.tooltip({
      delay: { show: 0, hide: 1000 },
      title: "Copied!",
      trigger: "click",
    });
    $copyBtn.on("click", () => {
      setTimeout(() => {
        $copyBtn.tooltip("hide");
      }, 1000);
    });
    return () => {
      cp.destroy();
      $copyBtn.tooltip("dispose");
    };
  }, []);

  return (
    <>
      <section
        id="auto"
        className="bg-primary-3 text-light text-center has-divider"
      >
        <div className="container">
          <div className="row text-center justify-content-center">
            <CarbonAds />
          </div>
          <div className="row text-center mt-4">
            <div className="col pb-2">
              <h1>Download Responsively App</h1>
              <div className="lead mb-4">
                You are one step away from improving your web development speed!
              </div>
              <ul className="nav nav-pills justify-content-center mb-4">
                <li className="nav-item">
                  <a
                    className={cx("nav-link", { active: !enableBeta })}
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      setEnableBeta(false);
                    }}
                  >
                    Latest
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <AnimatePresence
            initial={false}
            custom={enableBeta ? 1 : -1}
            exitBeforeEnter
          >
            <motion.div
              key={enableBeta ? "beta" : "stable"}
              custom={enableBeta ? 1 : -1}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                duration: 0.3,
              }}
            >
              <PlatformsDownload
                version={enableBeta ? betaVersion : version}
                publishedTs={enableBeta ? betaPublishedTs : publishedTs}
              />
            </motion.div>
          </AnimatePresence>
          <div className="row mb-4">
            <div className="col">
              <div className="lead">Or install from the command line:</div>
            </div>
          </div>
          <div className="row mb-4">
            <div
              className="col-md-4 mb-2"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="bg-light rounded p-3">
                <div className="command-container">
                  <div className="command-code">
                    <pre id="brew-cmd">$ brew install --cask responsively</pre>
                  </div>
                  <div className="copy-btn">
                    <ClipboardIcon
                      className="copy-icon"
                      data-clipboard-text="brew install --cask responsively"
                      height={30}
                      width={30}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-md-4 mb-2"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="bg-light rounded p-3">
                <div className="command-container">
                  <div className="command-code">
                    <pre id="choco-cmd">&gt; choco install responsively</pre>
                  </div>
                  <div className="copy-btn">
                    <ClipboardIcon
                      className="copy-icon"
                      data-clipboard-text="choco install responsively"
                      height={30}
                      width={30}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-md-4 mb-2"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="bg-light rounded p-3">
                <div className="command-container">
                  <div className="command-code">
                    <pre id="rpm-cmd">$ sudo rpm -i {rpmURL}</pre>
                  </div>
                  <div className="copy-btn">
                    <ClipboardIcon
                      className="copy-icon"
                      data-clipboard-text={`sudo rpm -i ${rpmURL}`}
                      height={30}
                      width={30}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="has-divider">
        <div className="divider flip-x bg-primary-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            width="100%"
            height="96px"
            viewBox="0 0 100 100"
            version="1.1"
            preserveAspectRatio="none"
            className="injected-svg"
            data-src="/assets/img/dividers/divider-3.svg"
          >
            <path d="M0,0 C6.83050094,50 15.1638343,75 25,75 C41.4957514,75 62.4956597,0 81.2456597,0 C93.7456597,0 99.9971065,0 100,0 L100,100 L0,100"></path>
          </svg>
        </div>
        <div className="container text-center mt-1" id="instructions">
          <p>
            <em>
              If you are a linux user, please follow the{" "}
              <a
                href="https://docs.appimage.org/introduction/quickstart.html#ref-how-to-run-appimage"
                title="How to run an AppImage"
                target="_blank"
                rel="noreferrer"
              >
                instructions here
              </a>{" "}
              after downloading the <code>.AppImage</code> file.
            </em>
          </p>
          <p>
            <em>
              Please feel free to contact us on{" "}
              <a
                href="https://github.com/responsively-org/responsively-app/issues"
                title="Responsively issues"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
              , if you need any help.
            </em>
          </p>
        </div>
        <div className="divider">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            width="100%"
            height="96px"
            viewBox="0 0 100 100"
            version="1.1"
            preserveAspectRatio="none"
            className="injected-svg"
            data-src="/assets/img/dividers/divider-2.svg"
          >
            <path d="M0,0 C16.6666667,66 33.3333333,99 50,99 C66.6666667,99 83.3333333,66 100,0 L100,100 L0,100 L0,0 Z"></path>
          </svg>
        </div>
      </div>
    </>
  );
};

export default Download;
