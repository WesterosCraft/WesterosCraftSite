import React, { useState, useEffect, Fragment } from 'react';
import { Box, Flex, Text } from 'rebass';
import { WikiNav } from '../organisms/wikiNav/wikiNav';
import { WikiContent } from '../organisms/wikiContent';
import { camelCaseFormatter } from '../../utility/helpers';
import { IoIosArrowForward } from 'react-icons/io';
import Link from 'next/link';
import { useQuery } from '@apollo/client';
import { WIKI_NAV_QUERY } from '../../queries/wikiNavQuery.gql';

export const WikiLayout = ({ children, title, breadcrumb }) => {
  const { data, loading } = useQuery(WIKI_NAV_QUERY);
  const [crumbs, setCrumbs] = useState([]);

  if (loading) {
    return null;
  }

  const getBreadcrumbs = () => {
    const paths = [];
    breadcrumb.split('/').reduce((prev, curr, index) => {
      paths[index] = `${prev}/${curr}`;
      return paths[index];
    });
    setCrumbs(paths);
  };

  return (
    <Box className="wiki-layout" pb={[15, 20]}>
      <Box
        className="breadcrumb-wrapper"
        bg="green"
        py={6}
        px={[4, null, 5]}
        width={1}
        sx={{
          outline: '8px outset #50815e',
          outlineOffset: '-8px'
        }}>
        <Flex
          flexDirection="row"
          alignItems="center"
          justifyContent="flex-start"
          maxWidth={1120}
          mx="auto"
          width={1}
          px={[0, null, 5]}>
          {crumbs.length > 1 &&
            crumbs.map((crumb, i) => (
              <Fragment key={i}>
                <Link href={`/${crumb}`}>
                  <Text
                    fontSize={['14px', null, '16px']}
                    color="white"
                    key={crumb}
                    pr={1}
                    pl={i !== 0 && 1}>
                    {camelCaseFormatter(crumb)}
                  </Text>
                </Link>
                {breadcrumb.length - 1 !== i ? <IoIosArrowForward color="white" /> : null}
              </Fragment>
            ))}
        </Flex>
      </Box>
      <Flex
        className="wiki-layout-container"
        flexDirection={['column', null, 'row']}
        justifyContent="center"
        height="100%"
        mt={[10, null, 16]}
        px={5}
        maxWidth={1120}
        mx="auto">
        <WikiNav navData={data} />
        <WikiContent title={title}>{children}</WikiContent>
      </Flex>
    </Box>
  );
};
