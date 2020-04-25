import React from 'react';
import Popup from 'reactjs-popup';
import AniLink from 'gatsby-plugin-transition-link/AniLink';

import { Flex, Text, Box, Image } from 'rebass';
import { IoIosArrowDown } from 'react-icons/io';
import { DropdownLink } from '../../atoms/dropdownLink/dropdownLink';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MobileHeader } from '../mobileHeader/';

export function Header({ links }) {
  return (
    <Header.NavWrapper>
      <Header.Nav>
        {links.map((link) =>
          link.navLogo.length > 0 ? (
            <Header.NavGroup key={link.title}>
              <AniLink cover duration={0.5} bg="#9E1E22" direction="left" to="/">
                <Image
                  src={link.navLogo[0].url}
                  alt="WesterosCraft"
                  height="26px"
                  sx={{
                    cursor: 'pointer',
                    '&:hover': {
                      transform: 'translateY(-1px)',
                      transition: 'transform 150ms ease-out 0s, color 150ms ease-out 0s',
                      textDecoration: 'none',
                    },
                  }}
                />
              </AniLink>
            </Header.NavGroup>
          ) : null,
        )}
        <Header.NavGroup display={['none', null, 'flex']}>
          {links.map((link) =>
            link.children.length > 0 ? (
              <Popup
                key={link.title}
                trigger={<Header.NavItem dropdown>{link.title}</Header.NavItem>}
                on="hover"
                closeOnDocumentClick
                mouseLeaveDelay={100}
                mouseEnterDelay={0}
                contentStyle={{
                  padding: '0px',
                  border: '2px solid black',

                  boxShadow:
                    '0 30px 60px -12px rgba(50,50,93,.25), 0 18px 36px -18px rgba(0,0,0,.3), 0 -12px 36px -8px rgba(0,0,0,.025)',
                }}
                arrowStyle={{
                  padding: '0px',
                  border: '2px solid black',
                  boxShadow:
                    '0 30px 60px -12px rgba(50,50,93,.25), 0 18px 36px -18px rgba(0,0,0,.3), 0 -12px 36px -8px rgba(0,0,0,.025)',
                }}
              >
                <Flex flexDirection="column">
                  {link.children.map((child) => (
                    <DropdownLink data={child} key={child.title} />
                  ))}
                </Flex>
              </Popup>
            ) : (
              !link.navLogo.length && (
                <a href={link.url} target="_blank" key={link.title} rel="noopener noreferrer">
                  <Header.NavItem>{link.title}</Header.NavItem>
                </a>
              )
            ),
          )}
        </Header.NavGroup>
        <Popup
          on="click"
          closeOnDocumentClick
          repositionOnResize
          arrow={false}
          position="bottom right"
          overlayStyle={{ background: 'transparent', zIndex: 999 }}
          offsetY={-40}
          offsetX={8}
          contentStyle={{
            boxShadow:
              '0 13px 27px -5px rgba(50,50,93,.25), 0 8px 16px -8px rgba(0,0,0,.3), 0 -6px 16px -6px rgba(0,0,0,.025)',
            borderRadius: '8px',
            border: 'none',
            zIndex: 1000,
            minWidth: '300px',
          }}
          trigger={
            <Box display={['block', null, 'none']}>
              <GiHamburgerMenu size="32px" style={{ cursor: 'pointer' }} />
            </Box>
          }
        >
          {(close) => <MobileHeader close={close} links={links} />}
        </Popup>
      </Header.Nav>
    </Header.NavWrapper>
  );
}

Header.NavWrapper = function ({ children, ...restProps }) {
  return (
    <Box as="nav" pt={[3, 9]} px={[5]} mx={[null, '5%', null, '10%']} {...restProps}>
      {children}
    </Box>
  );
};

Header.Nav = function ({ children, ...restProps }) {
  return (
    <Flex
      className="nav"
      flexDirection="row"
      justifyContent="space-between"
      alignItems="center"
      width={1}
      sx={{
        height: '3rem',
        textAlign: 'center',
        zIndex: 3,
      }}
      {...restProps}
    >
      {children}
    </Flex>
  );
};

Header.NavGroup = function NavGroup({ children, ...restProps }) {
  return (
    <Box className="nav-group" {...restProps}>
      {children}
    </Box>
  );
};

Header.NavItem = React.forwardRef(({ children, dropdown, ...restProps }, ref) => {
  return (
    <Box
      ref={ref}
      {...restProps}
      color="gray.100"
      sx={{
        lineHeight: '3rem',
        height: '3rem',
        cursor: 'pointer',
        '&:hover': {
          color: dropdown ? 'gray.200' : 'red.medium',
          transform: 'translateY(-1px)',
          transition: 'transform 150ms ease-out 0s, color 150ms ease-out 0s',
          textDecoration: 'none',
        },
      }}
      ml={[7]}
    >
      <Box
        sx={{
          cursor: 'pointer',
        }}
      >
        <Text as="span" fontSize={2} fontFamily="heading" fontWeight="bold">
          <>
            {children}
            {dropdown && (
              <IoIosArrowDown
                style={{
                  verticalAlign: 'text-top',
                  position: 'relative',
                  bottom: '-0.125em',
                  marginLeft: '0.4em',
                  zIndex: 3,
                }}
              />
            )}
          </>
        </Text>
      </Box>
    </Box>
  );
});
