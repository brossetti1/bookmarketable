import React from 'react'
import { Link } from 'gatsby'
import { ThemeProvider } from "styled-components"
import GlobalStyle, { theme } from "../theme/globalStyle";

import Layout from '../components/layout'
import SEO from '../components/seo'



const IndexPage = () => (
  <div>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <Layout>
        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
        <Link to="/page-2/">Go to page 2</Link>
      </Layout>
    </ThemeProvider>
  </div>
)

export default IndexPage
