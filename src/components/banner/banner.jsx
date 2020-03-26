import React from 'react'
import { Box, Card, Heading, Flex } from 'rebass'
import { Button } from '../button'

export const Banner = () => (
  <Flex
    className="banner-content-card"
    flexDirection="row"
    justifyContent="space-between"
    alignItems="center"
    bg="green"
    maxWidth={1120}
    minHeight={220}
    sx={{ borderRadius: 8 }}
    mx="auto"
    px="100px"
  >
    <Box>
      <Heading as="h3" color="white" variant="heading3">
        Ready to explore Westeros?
      </Heading>
      <Heading color="white" variant="heading4">
        Get our launcher or read more about us
      </Heading>
    </Box>
    <Button variant="white">Get Started</Button>
  </Flex>
)
