import React from "react";
import Link from "gatsby-link";
import styled from "styled-components";

import logo from "./logo.svg";

const StyledLink = styled(Link)`
  box-shadow: none;
  text-decoration: none;
  color: inherit;
`;

const LogoImg = styled.img`
  width: 40px;
  height: 40px;
  margin: 0;
`;

const SiteLogo = ({ to }) => (
  <StyledLink to={to}>
    <LogoImg src={logo} />
  </StyledLink>
);

SiteLogo.defaultProps = {
  to: "/"
};

export default SiteLogo;
