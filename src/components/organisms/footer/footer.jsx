import React from 'react'
import { Box, Flex } from 'rebass'
import { FooterFrame } from '../../atoms/icons/footerFrame/footerFrame'
import { ShieldLogo } from '../../atoms/icons/shieldLogo/shieldLogo'

export const Footer = () => (
  <Box bg="gray.300" height={376} mt="5vh" sx={{ position: 'relative' }}>
    <Flex
      justifyContent="center"
      alignItems="center"
      bg="gray.300"
      width={200}
      height={200}
      mx="auto"
      sx={{ position: 'absolute', borderRadius: '100%', top: -60, left: 0, right: 0 }}
    >
      <ShieldLogo style={{ width: '78px', height: '94px' }} />
    </Flex>
    <FooterFrame
      style={{
        width: '88px',
        height: '100px',
        position: 'absolute',
        left: 0,
        top: 0,
        transform: 'scaleX(-1)',
      }}
    />
    <FooterFrame
      style={{ width: '88px', height: '100px', position: 'absolute', right: 0, top: 0 }}
    />
    <FooterFrame
      style={{
        width: '88px',
        height: '100px',
        position: 'absolute',
        left: 0,
        bottom: 0,
        transform: 'scaleX(-1) scaleY(-1)',
      }}
    />
    <FooterFrame
      style={{
        width: '88px',
        height: '100px',
        position: 'absolute',
        right: 0,
        bottom: 0,
        transform: 'scaleY(-1)',
      }}
    />
  </Box>
)
