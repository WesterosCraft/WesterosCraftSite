import React, { Fragment } from 'react'
import { Box, Flex, Text } from 'rebass'
import { StaticQuery, graphql, Link } from 'gatsby'
import { WikiNav } from '../organisms/wikiNav/wikiNav'
import { WikiContent } from '../organisms/wikiContent'
import { breadcrumbFormatter } from '../../utility/helpers'
import { IoIosArrowForward } from 'react-icons/io'

export const WikiLayout = ({ children, title, breadcrumb }) => (
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
              parent {
                title
              }
            }
          }
        }
      }
    `}
    render={(data) => (
      <Box className="wiki-layout">
        <Box bg="green" p={5} width={1}>
          <Flex
            flexDirection="row"
            alignItems="center"
            justifyContent="flex-start"
            maxWidth={1120}
            mx="auto"
            width={1}
            px={5}
          >
            {breadcrumb &&
              breadcrumb.crumbs.map((crumb, i) => (
                <Fragment key={i}>
                  <Link to={crumb.pathname}>
                    <Text color="white" key={crumb.crumbLabel} pr={1} pl={i !== 0 && 1}>
                      {breadcrumbFormatter(crumb.crumbLabel)}
                    </Text>
                  </Link>
                  {breadcrumb.crumbs.length - 1 !== i ? <IoIosArrowForward color="white" /> : null}
                </Fragment>
              ))}
          </Flex>
        </Box>
        <Flex
          className="wiki-layout-container"
          flexDirection={['column', null, 'row']}
          justifyContent="center"
          height="100%"
          mt={16}
          px={5}
          maxWidth={1120}
          mx="auto"
        >
          <WikiNav navData={data} />
          <WikiContent title={title}>{children}</WikiContent>
        </Flex>
      </Box>
    )}
  />
)
