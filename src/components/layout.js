import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from "styled-components"

import Header from './header'


const Body = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 0px 1.0875rem 1.45rem;
  padding-top: 0;
`

const Footer = ({ image }) => (
  <footer>
    © {new Date().getFullYear()}, Built with
    {` `}
    <span>
      <div style={{maxWidth: 20}}>
        <Img fluid={image} />
      </div>
      <a href="https://www.gatsbyjs.org">Gatsby</a>
    </span>
    <span> and
      <span style={{color: 'red'}}> &#9829; </span>
      from Atlanta
    </span>
  </footer>
)

const Layout = ({ children }) => (
  <StaticQuery
    query={query}
    render={data => (
      <div>
        <Header siteTitle={data.site.siteMetadata.title} />
        <Body>
          <div style={{ minHeight: 1000 }}>
            {children}
          </div>
          <Footer image={data.file.childImageSharp.fluid}></Footer>
        </Body>
      </div>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
    file(relativePath: { eq: "gatsby-icon.png" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default Layout
