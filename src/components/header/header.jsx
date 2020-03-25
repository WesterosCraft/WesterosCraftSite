import React from 'react';
import { Flex, Text, Box } from 'rebass';
import { IoIosArrowDown } from 'react-icons/io';

export function Header({ links }) {
    return (
        <Header.NavWrapper>
            <Header.Nav>
                <Header.NavGroup>
                    <Text>Link</Text>
                </Header.NavGroup>
                <Header.NavGroup>
                    {links.map((link) =>
                        <Header.NavItem>
                            {link.name}
                        </Header.NavItem>
                    )}
                </Header.NavGroup>
            </Header.Nav>
        </Header.NavWrapper>
    )
}


Header.NavWrapper = function({ children, ...restProps}) {
    return (
        <Box as="nav" pt={[3, 9]} px={[5]} mx={[null, "5%", "10%"]}>
            {children}
        </Box>
    )
}

Header.Nav = function({children, ...restProps}) {
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
    }}>
        {children}
    </Flex>
    )
}


Header.NavGroup = function NavGroup({ children, ...restProps }) {
    return (
        <Flex {...restProps}>{children}</Flex>
    )
}

Header.NavItem = function({ children, ...restProps }) {
    return (
        <Box {...restProps} sx={{
            lineHeight: '3rem',
            height: '3rem',
        }}
        ml={[7]}
        >
            <Box as="a" sx={{ 
                cursor: 'pointer',
                 '&:hover': { 
                     color: 'gray.200',
                     transform: 'translateY(-1px)',
                     transition: 'transform 150ms ease-out 0s, color 150ms ease-out 0s',
                     textDecoration: 'none' }
                }}>
                <Text as="span" fontSize={2} fontFamily="heading" fontWeight="bold" color="gray.100">
                    <>
                    {children}
                    <IoIosArrowDown 
                        style={{
                            verticalAlign: 'text-top',
                            position: 'relative',
                            bottom: '-0.125em',
                            marginLeft: '0.4em',
                        }} 
                    />
                    </>
                </Text>
            </Box>
        </Box>
    )
}