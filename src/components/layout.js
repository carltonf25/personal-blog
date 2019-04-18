import React from "react"
import PropTypes from "prop-types"
import styled from 'styled-components';
import { StaticQuery, graphql, Link } from "gatsby"
import { Spring } from 'react-spring';

import Header from "./header"
import Archive from "./archive"
import Img from 'gatsby-image';
import "./layout.css"

const MainLayout = styled.main`
  max-width: 90%;
  margin: 1rem auto;
  display: grid;
  grid-template-columns: 3fr 1fr;
  grid-gap: 40px;
`

const Layout = ({ children, location }) => (
  <StaticQuery
    query={graphql`
        query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
        file(relativePath:{
          regex:"/logo/"
        }) {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
    `}
    render={data => (
      <>
        <Header siteTitle={data.site.siteMetadata.title} />
        <MainLayout>
          <div>{children}</div>
          <Archive />
        </MainLayout>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}
Layout.defaultProps= {
  location: {},
}

export default Layout
