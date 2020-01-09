import React, { Fragment } from 'react';
import { Box, Text } from 'rebass';
import { useRouter } from 'next/router';
import Link from 'next/link';

const Breadcrumbs = () => {
  const { asPath } = useRouter();

  const generateBreadCrumb = pathname => {
    let paths = pathname.split('/');

    // remove the last element if there was a / at the end of the pathname
    paths = paths[paths.length - 1] === '' ? paths.slice(0, paths.length - 1) : paths;

    // remove the first element if the second one is an empty string which means that we are in the root of the website
    paths = paths[1] === '' ? paths.slice(1) : paths;

    const breadcrumb = paths.map((path, index) => {
      const arrow = index !== paths.length - 1 ? ' > ' : ' ';

      if (index === 0) {
        return (
          <Fragment key={index}>
            <Link href="/" key={index}>
              <Text
                color={index === paths.length - 1 ? 'inherit' : 'brandRed'}
                fontWeight={500}
                sx={{
                  textTransform: 'capitalize',
                  cursor: index === paths.length - 1 ? 'inherit' : 'pointer',
                }}
              >
                Home
              </Text>
            </Link>
            <Box as="span" px={2}>
              {arrow}
            </Box>
          </Fragment>
        );
      }

      const url = `${paths.slice(0, index + 1).join('/')}`;

      return (
        <Fragment key={index}>
          {index === paths.length - 1 ? (
            <Text
              key={index}
              color={index === paths.length - 1 ? 'inherit' : 'brandRed'}
              fontWeight={500}
              sx={{
                textTransform: 'capitalize',
                cursor: index === paths.length - 1 ? 'inherit' : 'pointer',
              }}
            >
              {path.replace(/-/g, ' ')}
            </Text>
          ) : (
            <Fragment key={index}>
              <Link key={index} href={index === paths.length - 1 ? '' : url}>
                <Text
                  color={index === paths.length - 1 ? 'inherit' : 'brandRed'}
                  fontWeight={500}
                  sx={{
                    textTransform: 'capitalize',
                    cursor: index === paths.length - 1 ? 'inherit' : 'pointer',
                  }}
                >
                  {path.replace(/-/g, ' ')}
                </Text>
              </Link>
              <Box as="span" px={2}>
                {arrow}
              </Box>
            </Fragment>
          )}
        </Fragment>
      );
    });

    // Return a list of links
    return breadcrumb;
  };

  const crumbs = generateBreadCrumb(asPath);

  return (
    <Box
      className="breadcrumbs"
      sx={{ position: 'absolute', top: '-36px', justifyContent: 'center', flexDirection: 'row' }}
      display={['none', null, 'flex']}
    >
      {crumbs}
    </Box>
  );
};

export default Breadcrumbs;
