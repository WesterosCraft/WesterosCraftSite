import React, { useState } from 'react'
import { Text, Image, Box, Flex, Heading } from 'rebass'
import { Fleur } from '../../atoms/icons/fleur/fleur'
import Slider from '../../atoms/slider/slider'
import styled from '@emotion/styled'
import { Redactor } from '../../atoms/redactor/redactor'

const SlideSelection = styled(Box)`
  color: ${({ active }) => (active ? 'green' : 'black')};
  cursor: pointer;
  list-style-type: none;
  border-radius: 8px;
  box-shadow: ${({ active }) => (active ? 'rgba(0, 0, 0, 0.2) 0px 2px 6px 0px' : 'none')};
`

export const DestinationSlide = ({ data }) => {
  const [currentSlide, setCurrentSlide] = useState(0)

  return (
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
        <Redactor dangerouslySetInnerHTML={{ __html: data.redactor }} />
      </Flex>

      <Flex
        className="destinationslide-slider"
        flexDirection={['column', null, 'row']}
        justifyContent="center"
        mx="auto"
        mt={17}
        maxWidth={870}
        sx={{
          '.carousel': {
            maxWidth: '632px',
            maxHeight: '360px',
            margin: '0 auto',
          },
        }}
      >
        <Slider
          slides={data.slider}
          showThumbs={false}
          showIndicators={false}
          showArrows={false}
          showStatus={false}
          selectedItem={currentSlide}
        />
        <Flex flexDirection={['row', null, 'column']} as="ul" pl={[0, null, 8]} pt={[5, null, 0]}>
          {data.slider.map((slide, index) => (
            <SlideSelection
              as="li"
              key={slide.slideName}
              onClick={() => {
                setCurrentSlide(index)
              }}
              py={2}
              px={3}
              active={index === currentSlide}
              width={[1 / 2, null, 1]}
            >
              <Text as="span" fontSize={2}>
                {slide.slideName}
              </Text>
            </SlideSelection>
          ))}
          {data.linkBuilder.map((link) => (
            <a href={link.url}>{link.customLinkText}</a>
          ))}
        </Flex>
      </Flex>
    </Box>
  )
}
