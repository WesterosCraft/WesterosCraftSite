import React from 'react'
import Popup from 'reactjs-popup'

import { Flex, Text, Box, Image } from 'rebass'
import { IoIosArrowDown } from 'react-icons/io'
import { ConditionalWrapper } from '../conditionalWrapper'

export function Header({ links }) {
  return (
    <Header.NavWrapper>
      <Header.Nav>
        <Header.NavGroup>
          <a href="/">
            <Image
              src="https://westeroscraft.com/web/assets/images/wc-logo.svg"
              alt="WesterosCraft"
              height="26px"
            />
          </a>
        </Header.NavGroup>
        <Header.NavGroup>
          {links.map((link) => (
            <Popup
              trigger={<Header.NavItem>{link.name}</Header.NavItem>}
              on="hover"
              closeOnDocumentClick
              mouseLeaveDelay={0}
              mouseEnterDelay={0}
              contentStyle={{ padding: '0px', border: 'none' }}
              arrowStyle={{ padding: '0px', border: 'none' }}
            >
              <Text>test</Text>
            </Popup>
          ))}
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

Header.NavItem = React.forwardRef(({ children, ...restProps }, ref) => {
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
            <IoIosArrowDown
              style={{
                verticalAlign: 'text-top',
                position: 'relative',
                bottom: '-0.125em',
                marginLeft: '0.4em',
                zIndex: 3,
              }}
            />
          </>
        </Text>
      </Box>
    </Box>
  )
})
