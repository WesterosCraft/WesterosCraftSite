import React, { useState } from 'react'
import { Text, Image, Box, Flex, Heading } from 'rebass'
import { Fleur } from '../../atoms/icons/fleur/fleur'
import Slider from '../../atoms/slider/slider'

export const DestinationSlide = ({ data }) => {
  return (
    <Box className="destinationslide" my={160}>
      {console.log('desttination data', data)}
      <Flex
        className="destinationslide-header"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        sx={{
          textAlign: 'center',
        }}
        maxWidth={700}
        width={1}
        mx="auto"
      >
        <Heading variant="heading2">Destinations</Heading>
        <Fleur width="36px" height="30px" />
        <Text variant="heading5" mt={5}>
          Synopsis text - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
          dolor in.
        </Text>
      </Flex>

      <Flex
        className="destinationslide-slider"
        flexDirection="row"
        mx="auto"
        mt={17}
        maxWidth={870}
      >
        <Slider slides={data.slider} />
      </Flex>
    </Box>
  )
}
