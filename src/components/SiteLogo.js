import React from "react";
import Link from "gatsby-link";

import logo from "../logo.svg";

const SiteLogo = ({ to }) => (
  <Link css={{ width: 40, height: 40, display: "inline-block" }} to={to}>
    <img alt="Logo" css={{ width: 40, height: 40, margin: 0 }} src={logo} />
  </Link>
);

SiteLogo.defaultProps = {
  to: "/"
};

export default SiteLogo;
