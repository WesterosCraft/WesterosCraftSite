import React from 'react'
import { Text, Image, Box, Flex, Heading } from 'rebass'

export const DestinationSlide = () => (
  <Box className="destinationslide" my={160}>
    <Flex
      className="destinationslide-header"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      sx={{
        textAlign: 'center',
      }}
    >
      <Heading variant="heading2">Destinations</Heading>
      <Image />
      <Text variant="heading5">
        Synopsis text - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
        in.
      </Text>
    </Flex>
    <Flex className="destinationslide-slider" flexDirection="row">
      <Image
        src="https://westeroscraft.com/web/assets/images/launcher_screenshot.jpg"
        sx={{ maxHeight: 360 }}
      />
      <Flex flexDirection="column">
        <Text>Castle Black</Text>
        <Text>King's Landing</Text>
        <Text>Winterfell</Text>
        <Text>The Eyrie</Text>
      </Flex>
      <Flex flexDirection="column">
        <Text>Full Destination List</Text>
        <Text>View Wiki</Text>
      </Flex>
    </Flex>
  </Box>
)
