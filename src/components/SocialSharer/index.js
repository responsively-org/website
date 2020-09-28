import React from "react";

import "./style.scss";

const SocialSharer = ({ url, title, showCaption = false }) => {
  return (
    <div className="SocialSharer">
      {showCaption && <p className="SocialSharer__caption">Share:</p>}
      <div>
        <a
          href={`https://twitter.com/intent/tweet/?text=${title}&url=${url}%2F&via=ResponsivelyApp`}
          target="_blank"
          rel="noreferrer"
          title="Share on Twitter"
        >
          <img
            className="SocialSharer__icon icon"
            src="/assets/img/icons/social/twitter.svg"
            alt="Share on Twitter"
            data-inject-svg
          />
        </a>
      </div>
      <div>
        <a
          href={`https://www.facebook.com/sharer/sharer.php?u=${url}`}
          target="_blank"
          rel="noreferrer"
          title="Share on Facebook"
        >
          <img
            className="SocialSharer__icon icon"
            src="/assets/img/icons/social/facebook.svg"
            alt="Share on Facebook"
            data-inject-svg
          />
        </a>
      </div>
      <div>
        <a
          href={`https://www.linkedin.com/shareArticle?mini=true&url=${url}&title=${title}&source=Responsively`}
          target="_blank"
          rel="noreferrer"
          title="Share on LinkedIn"
        >
          <img
            className="SocialSharer__icon icon"
            src="/assets/img/icons/social/linkedin.svg"
            alt="Share on LinkedIn"
            data-inject-svg
          />
        </a>
      </div>
    </div>
  );
};

export default SocialSharer;
