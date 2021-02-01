import React, { useState } from 'react';
import { Box, Flex, Text } from 'rebass';
import { IoMdArrowDropdown } from 'react-icons/io';
import { configProps } from '../../../utils/helpers';
import SanityBlockContent from '@sanity/block-content-to-react';

const AccordionItem = ({ data, dataLength, index }) => {
  const [open, setOpen] = useState(false);

  return (
    <Box
      className="accordion-item"
      sx={{
        borderTop: '2px solid',
        borderColor: 'light.text',
        borderBottom: dataLength - 1 === index ? '2px solid' : null,
        borderBottomColor: 'light.text'
      }}>
      <Flex
        onClick={() => {
          setOpen(!open);
        }}
        py={7}
        sx={{ cursor: 'pointer' }}
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between">
        <Text variant="heading6" as="h6" fontWeight="500" sx={{ userSelect: 'none' }}>
          {data.heading}
        </Text>
        <IoMdArrowDropdown size="32px" style={{ transform: open ? 'scaleY(-1)' : '' }} />
      </Flex>
      {open && (
        <Box mb={6} className="accordion-content">
          <SanityBlockContent blocks={data.copy} />
        </Box>
      )}
    </Box>
  );
};

export const Accordion = ({ data }) => {
  return (
    <Box
      className="accordion"
      {...(data.spacings && data.spacings.length && configProps(data.spacings[0]))}>
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
  );
};
