import React, { useState } from 'react';
import { Flex, Box, Text } from 'rebass';
import { IoMdArrowDropdown } from 'react-icons/io';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { IoIosCopy } from 'react-icons/io';
import styled from '@emotion/styled';
import _replace from 'lodash/replace';
import { urlFor } from '../../../utils/sanity';

const SVGWrapper = styled(Box)`
  &:hover {
    svg {
      fill: red;
      transition: all 0.2s cubic-bezier(0.25, 0.8, 0.25, 1);
      transform: translate3d(0px, -2px, 0px);
    }
  }
`;

export const ImageGrid = ({ data }) => {
  const [open, setOpen] = useState(true);

  return (
    <Box className="image-grid">
      <Flex
        flexDirection="row"
        alignItems="center"
        mb={2}
        className="group-title"
        onClick={() => {
          setOpen(!open);
        }}
        sx={{
          cursor: 'pointer'
        }}>
        <Text variant="heading3" as="h3">
          {data.heading || ''}
        </Text>
        <IoMdArrowDropdown size="42px" style={{ transform: !open ? 'scaleY(-1)' : '' }} />
      </Flex>

      {open && (
        <Flex
          flexDirection={['column', null, 'row']}
          flexWrap="wrap"
          className="image-grid-content-container">
          {data.images.map((image, i) => {
            const script = _replace(data.copyScript, '<ID>', ` ${image.heading}`);
            return (
              <Box
                className="image-grid-item"
                height={272}
                width={[1, null, 240]}
                mt={[5]}
                mr={[0, null, 5]}
                sx={{
                  cursor: 'pointer',
                  position: 'relative',
                  boxShadow: ' 0 0 0 2px #333333',
                  overflow: 'hidden',
                  transition: 'all 0.3s cubic-bezier(.25,.8,.25,1)',
                  '&:hover': {
                    boxShadow: '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)'
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
                    borderBottom: '2px solid #333333',
                    backgroundColor: 'white',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    zIndex: 1,
                    backgroundImage: `url(${(image.asset && urlFor(image.asset._ref)) || null})`,
                    backgroundSize: 'cover'
                  }
                }}
                pt={140}
                px={4}
                pb={5}
                key={i}>
                <Flex flexDirection="column">
                  <Text
                    mt={2}
                    variant="heading6"
                    fontSize="18px"
                    fontWeight="bold"
                    as="h6"
                    color="text"
                    fontFamily="heading">
                    {image.heading || ''}
                  </Text>
                  <Text mt={2} variant="paragraph" color="text">
                    {image.description || ''}
                  </Text>
                  {data.copyScript !== '' && (
                    <CopyToClipboard text={script}>
                      <SVGWrapper
                        sx={{
                          position: 'absolute',
                          bottom: '12px',
                          right: '12px'
                        }}>
                        <IoIosCopy size="20px" />
                      </SVGWrapper>
                    </CopyToClipboard>
                  )}
                </Flex>
              </Box>
            );
          })}
        </Flex>
      )}
    </Box>
  );
};
