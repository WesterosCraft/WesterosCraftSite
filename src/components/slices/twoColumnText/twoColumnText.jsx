import React from 'react'
import { Flex, Box } from 'rebass'
import { Redactor } from '../../atoms/redactor/redactor'
import { ButtonSelector } from '../../organisms/buttonSelector'

export const TwoColumnText = ({ data }) => (
  <Flex
    className="two-column-text"
    width={1}
    flexDirection={['column', null, 'row']}
    maxWidth={data.maxWidth}
    mx="auto"
    sx={{
      '.button': {
        marginLeft: 0,
        marginTop: 24,
      },
    }}
  >
    <Box px={5} className="column" width={[1, null, data.columnWidths === '3/5' ? 3 / 5 : 1 / 2]}>
      <Redactor dangerouslySetInnerHTML={{ __html: data.children[0].redactor }} />
      {data.children[0].buttons && <ButtonSelector data={data.children[0].buttons} />}
    </Box>
    <Flex flexDirection="row" justifyContent="center" px={5} className="column" width={[1, null, data.columnWidths === '3/5' ? 2 / 5 : 1 / 2]}>
      <Redactor dangerouslySetInnerHTML={{ __html: data.children[1].redactor }} />
      {data.children[1].buttons && <ButtonSelector data={data.children[1].buttons} />}
    </Flex>
  </Flex>
)
