import React, { useState } from 'react'
import { Flex, Box, Text } from 'rebass'
import { IoMdArrowDropdown } from 'react-icons/io'
import { configProps } from '../../../utility/helpers'

export const ImageGrid = ({ data }) => {
  const [open, setOpen] = useState(true)

  return (
    <Box className="image-grid" {...(data.spacings && data.spacings.length && configProps(data.spacings[0]))}>
      <Flex
        flexDirection="row"
        alignItems="center"
        mb={2}
        className="group-title"
        onClick={() => {
          setOpen(!open)
        }}
        sx={{
          cursor: 'pointer',
        }}
      >
        <Text variant="heading3">{data.heading || ''}</Text>
        <IoMdArrowDropdown size="42px" />
      </Flex>

      {open && (
        <Flex flexDirection="row" flexWrap="wrap">
          {data.imageList.map((image, i) => (
            <Box
              className="image-grid-item"
              height={252}
              width={[1, null, 240]}
              mt={[5]}
              mr={[0, null, 5]}
              sx={{
                cursor: 'pointer',
                borderRadius: '4px',
                position: 'relative',
                overflow: 'hidden',
                boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
                transition: 'all 0.3s cubic-bezier(.25,.8,.25,1)',
                '&:hover': {
                  boxShadow: '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)',
                },
                '&:before': {
                  content: "''",
                  display: 'block',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: 0,
                  paddingTop: '8rem',
                  backgroundColor: 'white',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'center',
                  zIndex: 1,
                  backgroundImage: `url(${(image.image.length && image.image[0].url) || null})`,
                  backgroundSize: 'cover',
                },
              }}
              pt={140}
              px={4}
              pb={5}
              key={i}
            >
              <Flex flexDirection="column">
                <Text
                  mt={2}
                  variant="heading6"
                  fontSize="18px"
                  fontWeight="bold"
                  as="h6"
                  color="black"
                  fontFamily="heading"
                >
                  {image.imageTitle || ''}
                </Text>
                <Text mt={2} variant="paragraph" color="black">
                  {image.imageDescription || ''}
                </Text>
              </Flex>
            </Box>
          ))}
        </Flex>
      )}
    </Box>
  )
}
