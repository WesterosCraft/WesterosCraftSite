import React from 'react'
import { Box, Flex, Text } from 'rebass'
import { RegionIcon } from '../icons/regionIcon'
import { useTheme } from 'emotion-theming'
import { LocationTypeIcon } from '../icons/locationTypeIcon/locationTypeIcon'

export const EntryCard = ({ data }) => {
  const theme = useTheme()
  return (
    <Box
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

          backgroundImage: `url(${(data.images.length && data.images[0].url) || null})`,
          backgroundSize: 'cover',
          boxShadow: `inset 0 0.75rem 0 ${theme.colors[data.projectDetails[0].region]}`,
        },
      }}
      pt={140}
      px={4}
      pb={5}
    >
      <Flex flexDirection="column">
        <Flex flexDirection="row">
          {data.projectDetails && (
            <RegionIcon region={data.projectDetails.length && data.projectDetails[0].region} width="24px" />
          )}
          {data.projectDetails && data.projectDetails.length && (
            <LocationTypeIcon
              type={data.projectDetails[0].destinationType}
              width="24px"
              style={{ marginLeft: '8px' }}
            />
          )}
        </Flex>
        <Text mt={2} variant="heading6" fontSize="18px" fontWeight="bold" as="h6" color="black" fontFamily="heading">
          {data.title || ''}
        </Text>
        <Text mt={2} variant="paragraph" color="black">
          {data.projectDetails.length && data.projectDetails[0].house}
        </Text>
      </Flex>
    </Box>
  )
}
