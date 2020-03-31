import React from 'react'
import { Flex, Box } from 'rebass'

export const TwoColumnText = ({ data }) => (
    <Flex width={1} flexDirection={['column', null, 'row']} maxWidth={1120} mx="auto">
      {data.children.map((column) => (
        <Box width={[1, null, 1 / 2]} px={5}>
          <div dangerouslySetInnerHTML={{ __html: column.redactor }} />
        </Box>
      ))}
    </Flex>
  )

