import React from 'react'
import { Flex, Text, Image, Box } from 'rebass'

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
      boxShadow: `0px 2.76726px 2.21381px rgba(0, 0, 0, 0.0196802),
        0px 6.6501px 5.32008px rgba(0, 0, 0, 0.0282725),
        0px 22.3363px 17.869px rgba(0, 0, 0, 0.0417275),
        0px 100px 80px rgba(0, 0, 0, 0.07);`,
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
    >
      <Box bg="gray.100" width={60} height={60} />
      <Text mt={5}>{children}</Text>
    </Flex>
  )
}
