import React from 'react'
import Helmet from 'react-helmet'

import { StaticQuery, graphql } from 'gatsby'
import { Global } from '@emotion/core'
import { GlobalStyle } from '../theme/global'
import { ThemeProvider } from 'emotion-theming'
import { theme } from '../theme/theme'
import { Box } from 'rebass'

import { Header } from './header'
import { Footer } from './footer'

const linkData = [
  {
    name: 'About',
  },
  {
    name: 'Community',
  },
  {
    name: 'Wiki',
  },
  {
    name: 'Map',
  },
]

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
          <link
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,400i,500,700,900|Sen:400,700,800&display=swap"
            rel="stylesheet"
          />
        </Helmet>
        <Header links={linkData} />
        <Box
          as="main"
          className={`page-wrapper`}
          sx={{
            margin: `0 auto`,
            maxWidth: 1256,
            top: '5vh',
            position: 'relative',
          }}
        >
          {children}
        </Box>
        <Footer />
      </ThemeProvider>
    )}
  />
)

export default Layout
