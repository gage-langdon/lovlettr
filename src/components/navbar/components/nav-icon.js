import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const Image = () => (
  <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(relativePath: { eq: "nav-logo.png" }) {
          childImageSharp {
            fluid(maxWidth: 175) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => (
      <Img
        fluid={data.placeholderImage.childImageSharp.fluid}
        style={{ maxWidth: '175px' }}
        critical
      />
    )}
  />
);
export default Image;
