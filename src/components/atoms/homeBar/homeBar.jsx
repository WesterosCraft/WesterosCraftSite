import React from 'react'
import { Flex, Text, Box } from 'rebass'

export const HomeBar = () => (
  <Flex
    flexDirection={['column', null, 'row']}
    justifyContent="center"
    alignItems="center"
    mx="auto"
    maxWidth={750}
    mt={['20px', null, -50]}
    bg="white"
    width={[250, null, 'auto']}
    sx={{
      position: 'relative',
      zIndex: 5,
      boxShadow: `0 13px 27px -5px rgba(50,50,93,.25), 0 8px 16px -8px rgba(0,0,0,.3), 0 -6px 16px -6px rgba(0,0,0,.025);`,
    }}
  >
    <HomeBar.Card>Get The Launcher</HomeBar.Card>
    <HomeBar.Card>Explore The Wiki</HomeBar.Card>
    <HomeBar.Card>See Our Progress</HomeBar.Card>
  </Flex>
)

HomeBar.Card = function ({ children, ...restProps }) {
  return (
    <Flex
      height={[160]}
      width={[250]}
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      {...restProps}
    >
      <Box bg="gray.100" width={60} height={60} />
      <Text mt={5}>{children}</Text>
    </Flex>
  )
}
