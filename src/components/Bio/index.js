import React from "react";

import "./style.scss";

const Bio = ({ name, pic, twitter }) => {
  return (
    <div className="Bio">
      <img className="Bio__image" alt={name} src={pic} />
      <p className="Bio__name">
        <strong>{name}</strong>
      </p>
      {twitter && (
        <a
          className="Bio__twitter"
          href={twitter}
          target="_blank"
          rel="noreferrer"
        >
          Follow on Twitter →
        </a>
      )}
    </div>
  );
};

export default Bio;
