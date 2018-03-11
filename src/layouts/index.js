import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
// import { Container } from "react-responsive-grid";
import { MOBILE_MEDIA_QUERY } from "typography-breakpoint-constants";
import "../css/prism-coy.css";

import { rhythm } from "../utils/typography";
import { SiteLogo, Container } from "../components";

// Import Futura PT typeface
import "../fonts/Webfonts/futurapt_book_macroman/stylesheet.css";
import "../fonts/Webfonts/futurapt_bookitalic_macroman/stylesheet.css";
import "../fonts/Webfonts/futurapt_demi_macroman/stylesheet.css";
import "../fonts/Webfonts/futurapt_demiitalic_macroman/stylesheet.css";

// Other fonts
import "typeface-spectral";
import "typeface-space-mono";

const Template = ({ children, data }) => {
  const siteTitle = data.site.siteMetadata.title;

  return (
    <Container>
      <Helmet title={siteTitle} />
      <div
        css={{
          marginTop: 0,
          marginBottom: rhythm(-1),
          [MOBILE_MEDIA_QUERY]: {
            textAlign: "center"
          }
        }}
      >
        <SiteLogo to="/" />
      </div>
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
