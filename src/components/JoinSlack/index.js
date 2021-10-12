import React from "react";

import image from "./raised-fist-emoji.png";
import "./style.scss";

const JoinSlack = () => (
  <a
    href="https://opencollective.com/responsively"
    className="JoinSlack"
    target="_blank"
    rel="noreferrer"
  >
    <img src={image} alt="Sponsor us" height={30} /> Sponsor us!
  </a>
);

export default JoinSlack;
