import React from 'react'
import { Flex } from 'rebass'
import { Redactor } from '../../atoms/redactor/redactor'
import { ButtonSelector } from '../../organisms/buttonSelector'
import { configProps } from '../../../utility/helpers'

export const TwoColumnText = ({ data }) => (
  <Flex
    className="two-column-text"
    width={1}
    flexDirection={['column', null, 'row']}
    maxWidth={data.maxWidth}
    mx="auto"
    sx={{
      '.button': {
        marginLeft: ['auto', null, 0],
        marginRight: ['auto', null, 0],
        marginTop: 24,
      },
    }}
    {...(data.spacings && data.spacings.length && configProps(data.spacings[0]))}
  >
    {console.log('two column data: ', data)}
    <Flex
      px={5}
      className="column"
      width={[1, null, data.columnWidths === '3/5' ? 3 / 5 : 1 / 2]}
      flexDirection="column"
      alignItems="center"
    >
      <Redactor dangerouslySetInnerHTML={{ __html: data.children[0].redactor }} />
      {data.children[0].buttons && <ButtonSelector data={data.children[0].buttons} />}
    </Flex>
    <Flex
      flexDirection="column"
      justifyContent="center"
      px={5}
      className="column"
      width={[1, null, data.columnWidths === '3/5' ? 2 / 5 : 1 / 2]}
      pt={[5, null, 0]}
    >
      <Redactor dangerouslySetInnerHTML={{ __html: data.children[1].redactor }} />
      {data.children[1].buttons && <ButtonSelector data={data.children[1].buttons} />}
    </Flex>
  </Flex>
)
