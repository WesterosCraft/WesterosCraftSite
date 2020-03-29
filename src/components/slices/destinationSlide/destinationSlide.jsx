import React from 'react'
import { Text, Image, Box, Flex, Heading } from 'rebass'
import { Fleur } from '../../atoms/icons/fleur/fleur'

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
      maxWidth={700}
      width={1}
      mx="auto"
    >
      <Heading variant="heading2">Destinations</Heading>
      <Fleur width="36px" height="30px" />
      <Text variant="heading5" mt={5}>
        Synopsis text - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
        in.
      </Text>
    </Flex>
    <Flex
      className="destinationslide-slider"
      flexDirection="row"
      maxWidth={870}
      width={1}
      mx="auto"
      mt={17}
    >
      <Image
        src="https://westeroscraft.com/web/assets/images/launcher_screenshot.jpg"
        sx={{ maxHeight: 360 }}
      />
      <Flex flexDirection="column" pl={12}>
        <Text>Castle Black</Text>
        <Text>King's Landing</Text>
        <Text>Winterfell</Text>
        <Text>The Eyrie</Text>

        <Text>Full Destination List</Text>
        <Text>View Wiki</Text>
      </Flex>
    </Flex>
  </Box>
)
