import React from "react";

import image from "./image.svg";
import "./style.scss";

const JoinSlack = () => (
  <a
    href="https://join.slack.com/t/responsively/shared_invite/zt-haoieftz-IsMw64H6jXC23pJ16ROLzw"
    className="JoinSlack"
    target="_blank"
    rel="noreferrer"
  >
    <img src={image} alt="Join us on slack" />
  </a>
);

export default JoinSlack;
