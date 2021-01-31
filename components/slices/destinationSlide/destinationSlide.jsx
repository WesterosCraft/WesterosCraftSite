import React, { useState } from 'react';
import { Text, Box, Flex } from 'rebass';
import Slider from '../../atoms/slider/slider';
import styled from '@emotion/styled';
import Link from 'next/link';
import { SanityBlockContent } from '../../atoms/blockContent';
import { Redactor } from '../../atoms/redactor/redactor';

const SlideSelection = styled(Box)`
  color: ${({ active }) => (active ? '#9E1E22' : '#333333')};
  cursor: pointer;
  list-style-type: none;
  font-weight: ${({ active }) => (active ? '500' : 'normal')};
`;

export const DestinationSlide = ({ data }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <Box className="destination-slide">
      <Flex
        className="destination-slide-header"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        sx={{
          textAlign: 'center'
        }}
        maxWidth={700}
        width={1}
        mx="auto">
        <Redactor>
          <SanityBlockContent blocks={data.copy.copy} />
        </Redactor>
      </Flex>

      <Flex
        className="destinationslide-slider"
        flexDirection={['column', null, 'row']}
        justifyContent="center"
        mx="auto"
        mt={17}
        maxWidth={870}
        height={364}
        sx={{
          '.carousel': {
            maxWidth: '632px',
            maxHeight: '360px',
            margin: '0 auto',
            border: '2px solid var(--theme-colors-text, #333333)'
          }
        }}>
        <Slider
          slides={data.slider}
          showThumbs={false}
          showIndicators={false}
          showArrows={false}
          showStatus={false}
          selectedItem={currentSlide}
          dynamicHeight={true}
        />
        <Flex
          flexDirection={['row', null, 'column']}
          flexWrap="wrap"
          as="ul"
          pl={[0, null, 8]}
          pt={[5, null, 0]}>
          {data.slider.map((slide, index) => (
            <SlideSelection
              as="li"
              key={index}
              onClick={() => {
                setCurrentSlide(index);
              }}
              py={2}
              px={3}
              active={index === currentSlide}
              width={[1 / 2, null, 1]}>
              <Text
                as="span"
                fontSize={2}
                color="light.text"
                sx={{
                  '&:hover': {
                    color: '#9E1E22 !important'
                  }
                }}>
                {slide.caption}
              </Text>
            </SlideSelection>
          ))}
          <Box
            as="li"
            sx={{
              borderTop: '1px solid #333333',
              listStyle: 'none'
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
                  color: '#9E1E22 !important'
                }
              }}
              key={i}>
              <Link href={link.link} key={i}>
                <Text
                  as="span"
                  color="light.text"
                  sx={{
                    '&:hover': {
                      color: '#9E1E22 !important'
                    }
                  }}
                  fontSize={2}>
                  {link.linkText}
                </Text>
              </Link>
            </Box>
          ))}
        </Flex>
      </Flex>
    </Box>
  );
};
