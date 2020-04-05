import React from 'react'
import { Box, Flex } from 'rebass'
import { CardBar } from '../../atoms/icons/cardBar/cardBar'
import { ButtonSelector } from '../../organisms/buttonSelector'
import { Redactor } from '../../atoms/redactor/redactor'
import { configProps } from '../../../utility/helpers'

export const Banner = ({ data }) => (
  <Box sx={{ position: 'relative' }} className="banner" {...(data.spacings.length && configProps(data.spacings[0]))}>
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
      px={['46px', '80px', null, '100px']}
      py={11}
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
      <Box textAlign={['center', null, 'left']} mb={[5, null, 0]}>
        <Redactor dangerouslySetInnerHTML={{ __html: data.redactor }} />
      </Box>
      <ButtonSelector data={data.buttons} />
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
