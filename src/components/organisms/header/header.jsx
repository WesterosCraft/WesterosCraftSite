import React from 'react'
import Popup from 'reactjs-popup'

import { Link } from 'gatsby'
import { Flex, Text, Box, Image } from 'rebass'
import { IoIosArrowDown } from 'react-icons/io'

export function Header({ links }) {
  return (
    <Header.NavWrapper>
      <Header.Nav>
        {links.map((link) =>
          link.navLogo.length > 0 ? (
            <Header.NavGroup key={link.title}>
              <Link to="/">
                <Image src={link.navLogo[0].url} alt="WesterosCraft" height="26px" />
              </Link>
            </Header.NavGroup>
          ) : null
        )}
        <Header.NavGroup>
          {links.map((link) =>
            link.children.length > 0 ? (
              <Popup
                key={link.title}
                trigger={<Header.NavItem dropdown>{link.title}</Header.NavItem>}
                on="hover"
                closeOnDocumentClick
                mouseLeaveDelay={0}
                mouseEnterDelay={0}
                contentStyle={{ padding: '0px', border: 'none' }}
                arrowStyle={{ padding: '0px', border: 'none' }}
              >
                <Text>test</Text>
              </Popup>
            ) : (
              !link.navLogo.length && <Header.NavItem key={link.title}>{link.title}</Header.NavItem>
            )
          )}
        </Header.NavGroup>
      </Header.Nav>
    </Header.NavWrapper>
  )
}

Header.NavWrapper = function ({ children, ...restProps }) {
  return (
    <Box as="nav" pt={[3, 9]} px={[5]} mx={[null, '5%', '10%']}>
      {children}
    </Box>
  )
}

Header.Nav = function ({ children, ...restProps }) {
  return (
    <Flex
      flexDirection="row"
      justifyContent="space-between"
      alignItems="center"
      width={1}
      sx={{
        height: '3rem',
        textAlign: 'center',
        zIndex: 3,
      }}
    >
      {children}
    </Flex>
  )
}

Header.NavGroup = function NavGroup({ children, ...restProps }) {
  return <Flex {...restProps}>{children}</Flex>
}

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
          color: 'gray.200',
          transform: 'translateY(-1px)',
          transition: 'transform 150ms ease-out 0s, color 150ms ease-out 0s',
          textDecoration: 'none',
        },
      }}
      ml={[7]}
    >
      <Box
        as="a"
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
  )
})
