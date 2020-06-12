import React, { Fragment } from 'react';
import { Box, Flex, Text } from 'rebass';
import { StaticQuery, graphql, Link } from 'gatsby';
import { BlockBookNav } from '../organisms/blockBookNav';
import { BlockBookContent } from '../organisms/blockBookContent';
import { camelCaseFormatter } from '../../utility/helpers';
import { IoIosArrowForward } from 'react-icons/io';

export const BlockBookLayout = ({ children, title, breadcrumb }) => (
  <StaticQuery
    query={graphql`
      query blockBookNavQuery {
        craft {
          categories: categories(group: "blocks") {
            title
            slug
            ... on Craft_blocks_Category {
              pageImage {
                url
              }
              pageDescription
            }
          }
        }
      }
    `}
    render={(data) => (
      <Box className="block-book-layout" pb={[15, 20]}>
        <Box
          className="breadcrumb-wrapper"
          bg="#d1972e"
          py={6}
          px={[4, null, 5]}
          width={1}
          sx={{
            outline: '8px outset #bc882a',
            outlineOffset: '-8px',
          }}
        >
          <Flex
            flexDirection="row"
            alignItems="center"
            justifyContent="flex-start"
            maxWidth={1120}
            mx="auto"
            width={1}
            px={[0, null, 5]}
          >
            {breadcrumb &&
              breadcrumb.crumbs.map((crumb, i) => (
                <Fragment key={i}>
                  <Link to={crumb.pathname}>
                    <Text
                      as="p"
                      fontSize={['14px', null, '16px']}
                      color="white"
                      key={crumb.crumbLabel}
                      pr={1}
                      pl={i !== 0 && 1}
                      sx={{
                        textShadow: '0 1px 2px rgba(0, 0, 0, 0.8)',
                      }}
                    >
                      {camelCaseFormatter(crumb.crumbLabel)}
                    </Text>
                  </Link>
                  {breadcrumb.crumbs.length - 1 !== i ? <IoIosArrowForward color="white" /> : null}
                </Fragment>
              ))}
          </Flex>
        </Box>
        <Flex
          className="block-book-layout-container"
          flexDirection={['column', null, 'row']}
          justifyContent="center"
          height="100%"
          mt={[10, null, 16]}
          px={5}
          maxWidth={1120}
          mx="auto"
        >
          <BlockBookNav navData={data} />
          <BlockBookContent title={title}>{children}</BlockBookContent>
        </Flex>
      </Box>
    )}
  />
);
