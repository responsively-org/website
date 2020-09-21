import React from "react";

import image from "./image.svg";
import "./style.scss";

const JoinSlack = () => (
  <a href="/join-slack" className="JoinSlack" target="_blank" rel="noreferrer">
    <img src={image} alt="Join us on slack" />
  </a>
);

export default JoinSlack;
