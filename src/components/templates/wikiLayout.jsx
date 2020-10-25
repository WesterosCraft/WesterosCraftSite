import React, { Fragment } from 'react';
import { Box, Flex, Text } from 'rebass';
import { WikiNav } from '../organisms/wikiNav/wikiNav';
import { WikiContent } from '../organisms/wikiContent';
import { IoIosArrowForward } from 'react-icons/io';
import Link from 'next/link';

const BreadcrumbItem = React.forwardRef(({ children, index, ...rest }, ref) => {
  return (
    <Text
      ref={ref}
      sx={{ cursor: 'pointer' }}
      fontSize={['14px', null, '16px']}
      color="white"
      pr={1}
      pl={index !== 0 && 1}
      {...rest}>
      {children}
    </Text>
  );
});

export const WikiLayout = ({ children, title, breadcrumb, navData }) => {
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
          {breadcrumb &&
            Array.isArray(breadcrumb) &&
            breadcrumb.length > 1 &&
            breadcrumb.map((crumb, i) => (
              <Fragment key={i}>
                <Link href={`${crumb.link}`} passHref>
                  <BreadcrumbItem key={i} index={i} crumb={crumb}>
                    {crumb.text}
                  </BreadcrumbItem>
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
        <WikiNav navData={navData} />
        <WikiContent title={title}>{children}</WikiContent>
      </Flex>
    </Box>
  );
};
