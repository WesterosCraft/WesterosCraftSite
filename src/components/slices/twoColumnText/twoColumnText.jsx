import React from 'react'
import { Flex, Box } from 'rebass'
import { Redactor } from '../../atoms/redactor/redactor'

export const TwoColumnText = ({ data }) => (
  <Flex
    className="two-column-text"
    width={1}
    flexDirection={['column', null, 'row']}
    maxWidth={1120}
    mx="auto"
  >
    {data.children.map((column, index) => (
      <Box className="column" width={[1, null, 1 / 2]} px={5} key={index}>
        <Redactor dangerouslySetInnerHTML={{ __html: column.redactor }} />
      </Box>
    ))}
  </Flex>
)
