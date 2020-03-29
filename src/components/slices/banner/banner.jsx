import React from 'react'
import { Box, Heading, Flex } from 'rebass'
import { Button } from '../../atoms/button'
import { CardBar } from '../../atoms/icons/cardBar/cardBar'
import { ButtonSelector } from '../../organisms/buttonSelector'

export const Banner = ({ data }) => (
  <Box sx={{ position: 'relative' }}>
    {console.log('banner data', data)}
    <Flex
      className="banner-content-card"
      flexDirection={['column', null, 'row']}
      justifyContent={['center', null, 'space-between']}
      alignItems="center"
      bg="green"
      maxWidth={1120}
      minHeight={[240, null, 220]}
      sx={{ borderRadius: 8, position: 'relative' }}
      mx="auto"
      px={['80px', null, '100px']}
    >
      <CardBar
        sx={{
          position: 'absolute',
          width: '91px',
          left: ['8px', null, '16px'],
          bottom: ['8px', null, '16px'],
          transform: 'scaleX(-1) scaleY(-1)',
        }}
      />
      <Box textAlign={['center', null, 'left']}>
        <div dangerouslySetInnerHTML={{ __html: data.redactor }} />
        {/* <Heading as="h3" color="white" variant="heading3">
          Ready to explore Westeros?
        </Heading>
        <Heading color="white" variant="heading4" mt={[4, null, 5]}>
          Get our launcher or read more about us
        </Heading> */}
      </Box>
      <ButtonSelector data={data.buttons} />
      {/* <Button variant="white" mt={[5, null, 0]}>
        Get Started
      </Button> */}
      <CardBar
        sx={{
          position: 'absolute',
          width: '91px',
          right: ['8px', null, '16px'],
          top: ['8px', null, '16px'],
        }}
      />
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
)
