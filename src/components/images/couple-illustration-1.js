import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const Image = () => (
  <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(
          relativePath: { eq: "couple-illustration-1.png" }
        ) {
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
        className="mx-auto"
        fluid={data.placeholderImage.childImageSharp.fluid}
        style={{ maxWidth: '20rem' }}
        critical
      />
    )}
  />
);
export default Image;
