import React from 'react'
import { Box, Flex } from 'rebass'
import { StaticQuery, graphql } from 'gatsby'
import { WikiNav } from '../organisms/wikiNav/wikiNav'

export const WikiLayout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query WikiNavQuery {
        craft {
          wikiNav: nodes(navHandle: "wikiNav", level: 1) {
            title
            url
            type
            element {
              slug
            }
            children {
              title
              url
              type
              element {
                slug
              }
            }
          }
        }
      }
    `}
    render={(data) => (
      <Box className="wiki-layout">
        <Box bg="green" minHeight={55} width={1} />
        <Flex flexDirection="row" justifyContent="center" height="100%" mt={16} px={5}>
          <WikiNav navData={data} />
          {children}
        </Flex>
      </Box>
    )}
  />
)
