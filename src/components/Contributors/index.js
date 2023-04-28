import React, { useEffect, useState } from "react";

import missingContributors from "./missing-contributors.json";

import "./style.css";

const fixContributors = (list) => {
  if (list == null) return [];

  const mrfelfel = list.find((x) => x.login === "mjyahaghi");
  if (mrfelfel != null) {
    mrfelfel.login = "mrfelfel";
    mrfelfel.avatar_url =
      "https://avatars3.githubusercontent.com/u/19575588?v=4&s=96";
  }

  return list.concat(
    missingContributors.filter(
      (mc) => list.find((x) => x.login === mc.login) == null
    )
  );
};

const Contributors = () => {
  const [contributors, setContributors] = useState([]);
  useEffect(() => {
    (async () => {
      const contributors = JSON.parse(
        await fetch(
          "https://api.github.com/repos/responsively-org/responsively-app/contributors?per_page=100"
        ).then((response) => response.text())
      ).filter((contributor) => contributor.type === "User");
      setContributors(fixContributors(contributors));
    })();
  }, []);

  if (!contributors.length) {
    return null;
  }

  return (
    <section>
      <div className="justify-content-center text-center">
        <h3 className="github-contributors__thanks">
          Our Gold Sponsors!&nbsp;
          <span role="img" aria-label="appreciation">
            🤝
          </span>
        </h3>
        <div className="github-contributors__sponsors">
          <a
            className="github-contributors__sponsors__logo github-contributors__sponsors__logo-placeholder"
            target="__blank"
            rel="noreferrer"
            href="https://www.bairesdev.com/?ref=Responsively"
          >
            <img
              src="/assets/img/logos/bairesdev-logo-blue-new.svg"
              alt="BairesDev"
              width="264"
            />
          </a>
          <a
            className="github-contributors__sponsors__logo github-contributors__sponsors__logo-placeholder"
            target="__blank"
            rel="noreferrer"
            href="https://opencollective.com/responsively"
          >
            See your company logo here!
          </a>
        </div>
      </div>
      <div className="justify-content-center text-center">
        <h3 className="github-contributors__thanks">
          Thanks to all of our contributors!{" "}
          <span role="img" aria-label="appreciation">
            🎉👏
          </span>
        </h3>
        <div className="github-contributors__users">
          {contributors.map((contributor) => (
            <a
              key={contributor.login}
              href={`https://github.com/${contributor.login}`}
              title={`${contributor.contributions} contribution${
                contributor.contributions === 1 ? "" : "s"
              } from ${contributor.login}`}
              target="_blank"
              rel="noreferrer"
              className="github-contributors__avatar"
              style={{
                backgroundImage: `url('${contributor.avatar_url}&s=96')`,
              }}
            >
              &nbsp;
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contributors;
