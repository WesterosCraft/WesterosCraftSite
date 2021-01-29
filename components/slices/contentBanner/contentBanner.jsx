import React from 'react';
import { Box, Flex, Text } from 'rebass';
import { ButtonSelector } from '../../organisms/buttonSelector';
import { configProps } from '../../../utils/helpers';
import ScrollAnimation from 'react-animate-on-scroll';
import { Element } from 'react-scroll';
import { OutboundLink } from 'react-ga';
import { SanityBlockContent } from '../../atoms/blockContent';

export const ContentBanner = ({ data }) => (
  <Element name="launcher-download" className="element">
    <Box
      sx={{ position: 'relative' }}
      className="content-banner"
      px={5}
      {...(data.spacings && data.spacings.length && configProps(data.spacings[0]))}>
      <ScrollAnimation animateIn="fadeInUp" animateOnce>
        <Flex
          className="content-banner-content-card"
          flexDirection={['column']}
          justifyContent={['center', null, 'space-between']}
          alignItems="center"
          bg="white"
          maxWidth={1120}
          minHeight={[240, null, 220]}
          sx={{
            position: 'relative',
            boxShadow: 'inset 0 0 0 4px #333, inset -4px -4px 0 6px #CCC'
          }}
          mx="auto"
          px={['46px', '80px', null, '100px']}
          py={11}>
          <Box textAlign={['center', null, 'left']} mb={[5, null, 0]}>
            <SanityBlockContent blocks={data.copy.copy} />
          </Box>
          {data.warningText.copy && (
            <Box mt={4}>
              <SanityBlockContent blocks={data.warningText.copy} />
            </Box>
          )}
          <Box mt={[10]} mb={[8]}>
            <ButtonSelector buttons={data.buttonBuilder} mt="42px" />
          </Box>
          <Flex flexDirection="row">
            {data.linkBuilder.map((link) => (
              <OutboundLink
                target="_blank"
                to={link.link}
                download
                key={link.link}
                eventLabel="launcher_page">
                <Box
                  py={2}
                  px={3}
                  color="text"
                  sx={{
                    cursor: 'pointer',
                    listStyleType: 'none'
                  }}>
                  <Text
                    as="span"
                    fontSize={2}
                    sx={{
                      position: 'relative',
                      '&:after': {
                        display: 'none',
                        content: "''",
                        width: '100%',
                        height: '1.5px',
                        background: '#333333',
                        position: 'absolute',
                        bottom: 0,
                        left: 0
                      },
                      '&:hover:after': {
                        display: 'block'
                      }
                    }}>
                    {link.linkText}
                  </Text>
                </Box>
              </OutboundLink>
            ))}
          </Flex>
        </Flex>
      </ScrollAnimation>
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
          transform: 'translateY(-50%)'
        }}
        bg="gold"
        width="100vw"
      />
    </Box>
  </Element>
);
