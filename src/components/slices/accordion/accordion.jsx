import React, { useState } from 'react'
import { Box, Flex, Text } from 'rebass'
import { Redactor } from '../../atoms/redactor'
import { IoMdArrowDropdown } from 'react-icons/io'
import { configProps } from '../../../utility/helpers'


const AccordionItem = ({ data, dataLength, index }) => {
  const [open, setOpen] = useState(false)

  return (
    <Box className="accordion-item" sx={{ borderTop: '1px solid', borderColor: 'gold', borderBottom: dataLength - 1 === index ? '1px solid' : null, borderBottomColor: 'gold', }}>
      <Flex
        onClick={() => {
          setOpen(!open)
        }}
        py={7}
        sx={{ cursor: 'pointer' }}
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
      >
        <Text variant="heading6" as="h6" fontWeight="500" sx={{ userSelect: 'none' }}>
          {data.heading}
        </Text>
        <IoMdArrowDropdown size="32px" style={{ transform: open ? 'scaleY(-1)' : '' }} />
      </Flex>
      {open && (
        <Box mb={6} className="accordion-content">
          <Redactor dangerouslySetInnerHTML={{ __html: data.copy }} />
        </Box>
      )}
    </Box>
  )
}

export const Accordion = ({ data }) => {
  return (
    <Box className="accordion" {...(data.spacings && data.spacings.length && configProps(data.spacings[0]))}>
      {data.heading && (
        <Text variant="heading3" as="h3">
          {data.heading}
        </Text>
      )}

      <Flex flexDirection="column" mt={7}>
        {data.accordionContent.map((item, i) => (
          <AccordionItem data={item} dataLength={data.accordionContent.length} key={i} index={i} />
        ))}
      </Flex>
    </Box>
  )
}
