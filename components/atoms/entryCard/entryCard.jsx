import React from 'react';
import { Box, Flex, Text } from 'rebass';
import { RegionIcon } from '../icons/regionIcon';
import { useTheme } from 'emotion-theming';
import { LocationTypeIcon } from '../icons/locationTypeIcon/locationTypeIcon';
import Popup from 'reactjs-popup';
import { camelCaseFormatter } from '../../../utils/helpers';
import { DestinationStatusIcon } from '../icons/destinationStatusIcon/destinationStatusIcon';
import { urlFor } from '../../../utils/sanity';
import Image from 'next/image';

const Table = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="96px" height="96px">
    <path fill="#7C4A13" d="M23 23.999H25V44H23z" />
    <path
      fill="#C68632"
      d="M6 14L24 5 42 14 24 23zM32 25L32 21 34 20 34 24zM16 25L16 21 14 20 14 24z"
    />
    <path fill="#C68632" d="M30 24L36 21 36 19 30 22zM18 24L12 21 12 19 18 22z" />
    <g>
      <path
        fill="#995F1A"
        d="M26 18L16 13 14 14 24 19zM34 14L24 9 22 10 32 15zM30 16L20 11 18 12 28 17zM22 22L24 21 26 22 24 23zM22 6L24 5 26 6 24 7zM6 14L8 13 10 14 8 15z"
      />
      <path
        fill="#995F1A"
        d="M14 14L24 9 26 10 16 15zM18 16L28 11 30 12 20 17zM22 18L32 13 34 14 24 19zM38 14L40 13 42 14 40 15zM18 22L18 24 16 23 16 25 14 24 14 22 12 21 12 19 6 16 6 34 23 42.5 23 24.5zM36 19L36 21 34 22 34 24 32 25 32 23 30 24 30 22 25 24.5 25 42.5 42 34 42 16z"
      />
    </g>
    <g>
      <path
        fill="#56300D"
        d="M34 39.667L32 39.667 32 25 34 24zM30 24L30 26 32 25 32 23zM28 23L28 25 30 24 30 22zM34 24L34 22 36 21 36 23zM36 21L36 19 38 18 38 20zM14 39.667L16 39.667 16 25 14 24zM18 24L18 26 16 25 16 23zM20 23L20 25 18 24 18 22zM14 24L14 22 12 21 12 23zM12 21L12 19 10 18 10 20zM42 14H44V34.001000000000005H42zM4 14H6V34.001000000000005H4z"
      />
      <path
        fill="#56300D"
        d="M6 34L4 33 4 35 24 45 24 43zM20 21L22 20 24 21 22 22zM8 13L10 12 12 13 10 14zM12 15L10 14 8 15 10 16zM28 21L26 20 24 21 26 22zM20 7L22 6 24 7 22 8zM28 7L26 6 24 7 26 8z"
      />
      <path
        fill="#56300D"
        d="M24 5L24 3.001 4 13 4 15zM24 5L24 3.001 44 13 44 15zM44 33L42 34 24 43 24 45 44 35z"
      />
      <path
        fill="#56300D"
        d="M36 13L38 12 40 13 38 14zM40 15L38 14 36 15 38 16zM4 15L24 25 24 23 6 14z"
      />
      <path fill="#56300D" d="M44 15L24 25 24 23 42 14z" />
    </g>
  </svg>
);

export const EntryCard = React.forwardRef(({ data, href }, ref) => {
  const theme = useTheme();
  const entryImage = data.images && data.images.length && urlFor(data.images[0].asset._ref);

  return (
    <Box
      as="a"
      href={href}
      className="entry-card"
      ref={ref}
      sx={{
        position: 'relative',
        boxShadow: '0 0 0 1px #191a1b',
        padding: 0,
        background: data.region ? theme.colors[data.region] : '#333333',
        zIndex: 1,
        width: 'auto',
        cursor: 'pointer'
      }}
      mt={[5]}
      mr={[0, null, 5]}>
      <Box
        height={252}
        width={[1, null, 240]}
        sx={{
          cursor: 'pointer',
          boxShadow: ' 0 0 0 2px #333333',
          background: 'white',
          position: 'relative',
          overflow: 'hidden',
          transition: 'all 0.3s cubic-bezier(.25,.8,.25,1)',
          '&:hover': {
            boxShadow: ' 0 0 0 2px #333333',
            transform: 'translate(-0.35em, -0.35em)'
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
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            zIndex: 1,
            borderBottom: '2px solid #333333',
            boxShadow: `inset 0 0.75rem 0 ${data.region ? theme.colors[data.region] : '#333333'}`
          }
        }}>
        {entryImage ? (
          <Image height={130} width={240} src={entryImage.toString()} />
        ) : (
          <Flex width={240} height={130} justifyContent="center" alignItems="center">
            <Table />
          </Flex>
        )}

        <Flex flexDirection="column" px={4} pb={5} pt={1}>
          <Flex flexDirection="row">
            {data._type === 'guide' && (
              <Popup
                on="hover"
                position="bottom left"
                contentStyle={{
                  width: 'auto',
                  borderRadius: '4px'
                }}
                trigger={
                  <span style={{ height: '24px' }}>
                    <RegionIcon region="guide" width="24px" />
                  </span>
                }>
                <Text as="span" color="text" px={4} bg="white" sx={{ border: '1px solid black' }}>
                  Guide
                </Text>
              </Popup>
            )}
            {data.region && (
              <Popup
                on="hover"
                position="bottom left"
                contentStyle={{
                  width: 'auto',
                  borderRadius: '4px'
                }}
                trigger={
                  <span style={{ height: '24px' }}>
                    <RegionIcon region={data.region} width="24px" />
                  </span>
                }>
                <Text as="span" color="text" px={4} bg="white" sx={{ border: '1px solid black' }}>
                  {camelCaseFormatter(data.region)}
                </Text>
              </Popup>
            )}
            {data.buildType && (
              <Popup
                on="hover"
                position="bottom left"
                contentStyle={{
                  width: 'auto',
                  borderRadius: '4px'
                }}
                trigger={
                  <span style={{ height: '24px' }}>
                    <LocationTypeIcon
                      type={data.buildType}
                      width="24px"
                      style={{ marginLeft: '8px' }}
                    />
                  </span>
                }>
                <Text as="span" color="text" px={4} bg="white" sx={{ border: '1px solid black' }}>
                  {camelCaseFormatter(data.buildType)}
                </Text>
              </Popup>
            )}
            {data.projectStatus && (
              <Popup
                on="hover"
                position="bottom left"
                contentStyle={{
                  width: 'auto',
                  borderRadius: '4px'
                }}
                trigger={
                  <span style={{ height: '24px' }}>
                    <DestinationStatusIcon
                      status={data.projectStatus}
                      width="24px"
                      style={{ marginLeft: '8px' }}
                    />
                  </span>
                }>
                <Text as="span" color="text" px={4} bg="white" sx={{ border: '1px solid black' }}>
                  {camelCaseFormatter(data.projectStatus)}
                </Text>
              </Popup>
            )}
          </Flex>
          <Text
            mt={2}
            variant="heading6"
            fontSize="18px"
            fontWeight="bold"
            as="h6"
            color="text"
            fontFamily="heading">
            {data.name || ''}
          </Text>
          <Text mt={2} variant="paragraph" color="text">
            {data.house || ''}
          </Text>
        </Flex>
      </Box>
    </Box>
  );
});
