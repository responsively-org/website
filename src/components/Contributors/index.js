import React, { useEffect, useState } from "react";

import "./style.css";

const Contributors = () => {
  const [contributors, setContributors] = useState([]);
  useEffect(() => {
    (async () => {
      const contributors = JSON.parse(
        await fetch(
          "https://api.github.com/repos/responsively-org/responsively-app/contributors?per_page=100"
        ).then((response) => response.text())
      ).filter((contributor) => contributor.type === "User");
      setContributors(contributors);
    })();
  }, []);

  if (!contributors.length) {
    return null;
  }

  return (
    <section>
      <div className="justify-content-center text-center">
        <h4 className="github-contributors__thanks">
          Thanks to all of our {contributors.length} contributors!{" "}
          <span role="img" aria-label="appreciation">
            🎉👏
          </span>
        </h4>
        <div className="github-contributors__users">
          {contributors.map((contributor) => (
            <a
              key={contributor.login}
              href={`https://github.com/${contributor.login}`}
              title={`${contributor.contributions} contributions from ${contributor.login}`}
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
