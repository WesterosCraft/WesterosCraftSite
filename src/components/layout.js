import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import { StaticQuery, graphql } from 'gatsby'
import { Global } from '@emotion/core'
import { GlobalStyle } from '../theme/global'
import { ThemeProvider } from 'emotion-theming'
import { theme } from '../theme/theme'

import Header from './header'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={(data) => (
      <ThemeProvider theme={theme}>
        <Global styles={GlobalStyle} />
        <Helmet>
          <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,400i,500,700,900|Sen:400,700,800&display=swap" rel="stylesheet" />
        </Helmet>
        <Header siteTitle={data.site.siteMetadata.title} />
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 1256,
            padding: `0px 1.0875rem 1.45rem`,
            paddingTop: 0,
          }}
        >
          {children}
          <footer>footer</footer>
        </div>
      </ThemeProvider>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
