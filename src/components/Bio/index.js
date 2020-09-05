import React from "react";

import "./style.css";

const Bio = ({ name, pic }) => {
  return (
    <div>
      <img className="Bio__image" alt={name} src={pic} />
      <p>
        <strong>{name}</strong>
      </p>
    </div>
  );
};

export default Bio;
