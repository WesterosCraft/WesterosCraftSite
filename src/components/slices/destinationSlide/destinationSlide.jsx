import React, { useState } from 'react';
import { Text, Box, Flex } from 'rebass';
import Slider from '../../atoms/slider/slider';
import styled from '@emotion/styled';
import { Redactor } from '../../atoms/redactor/redactor';
import { configProps } from '../../../utility/helpers';
import { Link } from 'gatsby';

const SlideSelection = styled(Box)`
  color: ${({ active }) => (active ? '#9E1E22' : 'black')};
  cursor: pointer;
  list-style-type: none;
  font-weight: ${({ active }) => (active ? '500' : 'normal')};
`;

export const DestinationSlide = ({ data }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <Box className="destination-slide" {...(data.spacings && data.spacings.length && configProps(data.spacings[0]))}>
      <Flex
        className="destination-slide-header"
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
            border: '2px solid black',
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
          dynamicHeight={true}
        />
        <Flex flexDirection={['row', null, 'column']} flexWrap="wrap" as="ul" pl={[0, null, 8]} pt={[5, null, 0]}>
          {data.slider.map((slide, index) => (
            <SlideSelection
              as="li"
              key={slide.slideName}
              onClick={() => {
                setCurrentSlide(index);
              }}
              py={2}
              px={3}
              active={index === currentSlide}
              width={[1 / 2, null, 1]}
              sx={{
                '&:hover': {
                  color: '#9E1E22',
                },
              }}
            >
              <Text as="span" fontSize={2}>
                {slide.slideName}
              </Text>
            </SlideSelection>
          ))}
          <Box
            sx={{
              borderTop: '1px solid black',
            }}
            my={2}
          />
          {data.linkBuilder.map((link, i) => (
            <Box
              py={2}
              px={3}
              as="li"
              width={[1 / 2, null, 1]}
              sx={{
                cursor: 'pointer',
                listStyleType: 'none',
                '&:hover': {
                  color: '#9E1E22',
                },
              }}
              key={i}
            >
              <Link to={link.additionalLink} key={link.customLinkText}>
                <Text
                  as="span"
                  color="black"
                  sx={{
                    '&:hover': {
                      color: '#9E1E22',
                    },
                  }}
                  fontSize={2}
                >
                  {link.customLinkText}
                </Text>
              </Link>
            </Box>
          ))}
        </Flex>
      </Flex>
    </Box>
  );
};
