import React from 'react';
import { Box, Flex, Text } from 'rebass';
import { CardBar } from '../../atoms/icons/cardBar/cardBar';
import { ButtonSelector } from '../../organisms/buttonSelector';
import { Redactor } from '../../atoms/redactor/redactor';
import { configProps } from '../../../utility/helpers';

export const ContentBanner = ({ data }) => (
  <Box
    sx={{ position: 'relative' }}
    className="content-banner"
    px={5}
    {...(data.spacings && data.spacings.length && configProps(data.spacings[0]))}
  >
    <Flex
      className="content-banner-content-card"
      flexDirection={['column']}
      justifyContent={['center', null, 'space-between']}
      alignItems="center"
      bg="white"
      maxWidth={1120}
      minHeight={[240, null, 220]}
      sx={{ borderRadius: 8, position: 'relative', boxShadow: 'inset 0 0 0 4px #000, inset -4px -4px 0 6px #CCC' }}
      mx="auto"
      px={['46px', '80px', null, '100px']}
      py={11}
    >
      <Box textAlign={['center', null, 'left']} mb={[5, null, 0]}>
        <Redactor dangerouslySetInnerHTML={{ __html: data.redactor }} />
      </Box>
      <Box mt={[10]} mb={[8]}>
        <ButtonSelector data={data.buttons} mt="42px" />
      </Box>
      <Flex flexDirection="row">
        {data.linkBuilder.map((link) => (
          <Box
            py={2}
            px={3}
            as="a"
            color="black"
            sx={{
              cursor: 'pointer',
              listStyleType: 'none',
              '&:hover': {
                outline: '1px solid white',
              },
            }}
            href={link.url}
            key={link.customLinkText}
          >
            <Text as="span" fontSize={2}>
              {link.customLinkText}
            </Text>
          </Box>
        ))}
      </Flex>
    </Flex>
    <Box
      sx={{
        position: 'absolute',
        top: '50%',
        bottom: 0,
        height: 55,
        zIndex: -1,
        left: '50%',
        right: '50%',
        marginLeft: '-50vw',
        marginRight: '-50vw',
        transform: 'translateY(-50%)',
      }}
      bg="gold"
      width="100vw"
    />
  </Box>
);
