import React from 'react';
import { Box, Text, Flex, Image } from 'rebass';
import Link from 'next/link';
import DropdownContainer from '../../atoms/dropdownContainer/dropdownContainer';

const WikiDropdown = ({ data }) => {
  return (
    <DropdownContainer className="wiki-dropdown" sx={{ transform: 'translateX(0px)' }}>
      <Box p={8}>
        {data.map((item, i) => (
          <Link href={item.dropdownLink} key={i}>
            <Text variant="heading6" as="a">
              {item.dropdownLabel}
            </Text>
          </Link>
        ))}
      </Box>
    </DropdownContainer>
  );
};

export default WikiDropdown;
