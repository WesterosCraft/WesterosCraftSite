import React from 'react';
import { Flex, Text } from 'rebass';

export function Header() {
    return (
        <Header.NavWrapper>
            <Text>Link</Text>
        </Header.NavWrapper>
    )
}

Header.NavWrapper = function({ children, ...restProps}) {
    return (
        <Flex as="nav" flexDirection="row" pt={[3, 9]} px={[5]} mx={[null, "5%", "10%"]}>
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
        <Text {...restProps}>{children}</Text>
    )
}