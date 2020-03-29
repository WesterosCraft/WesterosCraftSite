import React from 'react'
import { Box, Text, Flex } from 'rebass'

export const Footer = () => (
  <Box bg="gray.300" height={376} mt="5vh" sx={{ position: 'relative' }}>
    <Flex
      justifyContent="center"
      alignItems="center"
      bg="gray.300"
      width={200}
      height={200}
      mx="auto"
      sx={{ position: 'absolute', borderRadius: '100%', top: -60, left: 0, right: 0 }}
    >
      <Text color="white" fontSize="96px">
        W
      </Text>
    </Flex>
  </Box>
)
