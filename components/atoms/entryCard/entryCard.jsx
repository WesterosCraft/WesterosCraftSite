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

export const EntryCard = React.forwardRef(({ data, href }, ref) => {
  const theme = useTheme();
  const entryImage =
    (data.images && data.images.length && urlFor(data.images[0].asset._ref)) ||
    'https://cdn.westeroscraft.com/web/assets/images/crafting-table.svg';

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
            // backgroundImage: `url(${
            //   (data.images && data.images.length && urlFor(data.images[0].asset._ref)) ||
            //   'https://cdn.westeroscraft.com/web/assets/images/crafting-table.svg'
            // })`,
            // backgroundSize:
            //   data.images && data.images.length && data.images[0].asset._ref
            //     ? 'cover'
            //     : ['auto', null, '30%'],
            boxShadow: `inset 0 0.75rem 0 ${data.region ? theme.colors[data.region] : '#333333'}`
          }
        }}
        pt={140}
        px={4}
        pb={5}>
        <Image height={130} width={240} src={entryImage.toString()} />
        <Flex flexDirection="column">
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
