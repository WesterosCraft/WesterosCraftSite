import React from 'react';
import Popup from 'reactjs-popup';
import Link from 'next/link';
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
              <Link href="/">
                <Image
                  src={link.navLogo[0].url}
                  alt="WesterosCraft"
                  height="26px"
                  sx={{
                    cursor: 'pointer',
                    '&:hover': {
                      transform: 'translateY(-1px)',
                      transition: 'transform 150ms ease-out 0s, color 150ms ease-out 0s',
                      textDecoration: 'none'
                    }
                  }}
                />
              </Link>
            </Header.NavGroup>
          ) : null
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
                  border: '1px solid #333333',

                  boxShadow:
                    '0 30px 60px -12px rgba(50,50,93,.25), 0 18px 36px -18px rgba(0,0,0,.3), 0 -12px 36px -8px rgba(0,0,0,.025)'
                }}
                arrowStyle={{
                  background: ' #fff',
                  border: '1px solid #333',
                  boxShadow:
                    'rgba(50,50,93,.25) 0 30px 60px -12px,rgba(0,0,0,.3) 0 18px 36px -18px,rgba(0,0,0,.024) 0 -12px 36px -8px',
                  color: '#fff',
                  height: '10px',
                  left: '50%',
                  lineHeight: '18.4px',
                  margin: '-5px',
                  padding: 0,
                  position: 'absolute',
                  textAlign: 'center',
                  top: 7,
                  transform: 'rotate(225deg)',
                  width: '10px',
                  zIndex: -1
                }}>
                <Flex flexDirection="column" bg="white">
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
            )
          )}
        </Header.NavGroup>
        <Popup
          on="click"
          closeOnDocumentClick
          repositionOnResize
          arrow={false}
          position="bottom right"
          overlayStyle={{ background: 'transparent', zIndex: 999 }}
          offsetY={0}
          offsetX={0}
          className="mobile-popup"
          contentStyle={{
            position: 'absolute',
            left: 0,
            top: 0,
            right: 0,
            bottom: 0,
            width: '100vw',
            height: '100%',
            boxShadow:
              '0 13px 27px -5px rgba(50,50,93,.25), 0 8px 16px -8px rgba(0,0,0,.3), 0 -6px 16px -6px rgba(0,0,0,.025)',
            border: '1px solid #333333',
            zIndex: 1000,
            minWidth: '300px',
            overflowY: 'scroll'
          }}
          arrowStyle={{
            padding: '0px',
            border: '1px solid #333333',
            boxShadow:
              '0 30px 60px -12px rgba(50,50,93,.25), 0 18px 36px -18px rgba(0,0,0,.3), 0 -12px 36px -8px rgba(0,0,0,.025)'
          }}
          trigger={
            <Box display={['block', null, 'none']}>
              <GiHamburgerMenu size="32px" style={{ cursor: 'pointer' }} />
            </Box>
          }>
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
        zIndex: 3
      }}
      {...restProps}>
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
      className="header-nav-item"
      ref={ref}
      {...restProps}
      color="gray.100"
      sx={{
        lineHeight: '3rem',
        height: '3rem',
        cursor: 'pointer',
        textAlign: 'center',
        '&:hover': {
          color: dropdown ? 'gray.200' : 'red.medium',
          transform: 'translateY(-1px)',
          transition: 'transform 150ms ease-out 0s, color 150ms ease-out 0s',
          textDecoration: 'none'
        }
      }}
      ml={[7]}>
      <Box
        sx={{
          cursor: 'pointer'
        }}>
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
                  zIndex: 3
                }}
              />
            )}
          </>
        </Text>
      </Box>
    </Box>
  );
});
