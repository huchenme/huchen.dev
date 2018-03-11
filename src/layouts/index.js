import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
// import { Container } from "react-responsive-grid";
// import { MOBILE_MEDIA_QUERY } from "typography-breakpoint-constants";
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

const Template = ({ children, data }) => {
  const siteTitle = data.site.siteMetadata.title;

  return (
    <div>
      <Helmet title={siteTitle} />
      <div
        css={{
          marginTop: rhythm(1.5),
          textAlign: "center",
          height: 40
        }}
      >
        <SiteLogo to="/" />
      </div>
      <div className="main-body">{children()}</div>
    </div>
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
