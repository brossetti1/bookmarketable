import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import Header from './header'
import './layout.css'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
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
    `}
    render={data => (
      <>
        <Header siteTitle={data.site.siteMetadata.title} />
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `0px 1.0875rem 1.45rem`,
            paddingTop: 0,
          }}
        >
          <div
            style={{
              minHeight: 1000
            }}
          >
            {children}
          </div>
          <footer>
            © {new Date().getFullYear()}, Built with
            {` `}
            <span>
              <div style={{maxWidth: 20}}>
                <Img fluid={data.file.childImageSharp.fluid} />
              </div>
              <a href="https://www.gatsbyjs.org">Gatsby</a>
            </span>
            <span> and
              <span style={{color: 'red'}}> &#9829; </span>
              from Atlanta
            </span>
          </footer>
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
