import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import { Container } from "react-responsive-grid";
import styled from "styled-components";
import { MOBILE_MEDIA_QUERY } from "typography-breakpoint-constants";
import "../css/prism-coy.css";

import { rhythm } from "../utils/typography";
import { SiteLogo } from "../components";

// Import Futura PT typeface
import "../fonts/Webfonts/futurapt_book_macroman/stylesheet.css";
import "../fonts/Webfonts/futurapt_bookitalic_macroman/stylesheet.css";
import "../fonts/Webfonts/futurapt_demi_macroman/stylesheet.css";
import "../fonts/Webfonts/futurapt_demiitalic_macroman/stylesheet.css";

// Other fonts
import "typeface-spectral";
import "typeface-space-mono";

const LogoWrapper = styled.div`
  margin-top: 0;
  margin-bottom: ${rhythm(-1)};

  ${MOBILE_MEDIA_QUERY} {
    text-align: center;
  }
`;

const Template = ({ children, data }) => {
  const siteTitle = data.site.siteMetadata.title;

  return (
    <Container
      style={{
        maxWidth: rhythm(22),
        padding: `${rhythm(1.5)} ${rhythm(0.75)} ${rhythm(2)}`
      }}
    >
      <Helmet title={siteTitle} />
      <LogoWrapper>
        <SiteLogo to="/" />
      </LogoWrapper>
      <div className="main-body">{children()}</div>
    </Container>
  );
};

Template.propTypes = {
  children: PropTypes.func
};

export default Template;

export const query = graphql`
  query LayoutQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
