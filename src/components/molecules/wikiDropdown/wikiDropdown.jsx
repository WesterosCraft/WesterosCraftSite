import React from 'react';
import { Box, Text, Flex, Image } from 'rebass';
import DropdownContainer from '../../atoms/dropdownContainer/dropdownContainer';

const WikiDropdown = ({ data }) => {
  return (
    // <DropdownContainer className="wiki-dropdown" sx={{ transform: 'translateX(0px)' }}>
    <Box p={8} width={350}>
      {data.map(
        (item, i) =>
          i === 0 && (
            // <Link href={item.dropdownLink} key={i}>
            <Box sx={{ cursor: 'pointer', '&:hover': { color: '#494849' } }}>
              <Text fontSize={[3, 4]} fontWeight={500} lineHeight={1.7}>
                {item.dropdownLabel}
              </Text>
              <Text fontSize={[2]} fontWeight="normal" lineHeight={1.4} mb={2}>
                {item.dropdownDescription}
              </Text>
            </Box>
            // </Link>
          )
      )}

      <Flex width={1} pt={3}>
        <Box width={1 / 2}>
          <Text fontSize={2} sx={{ textTransform: 'uppercase' }} fontWeight={500}>
            Destinations
          </Text>
          <Box pt={2}>
            {data.map(
              (item, i) =>
                i > 0 &&
                i < 5 && (
                  // <Link href={item.dropdownLink} key={i}>
                  <Box sx={{ cursor: 'pointer', '&:hover': { color: '#494849' } }}>
                    <Text fontSize={2} py="6px">
                      {item.dropdownLabel}
                    </Text>
                  </Box>
                  // </Link>
                )
            )}
          </Box>
        </Box>
        <Box width={1 / 2}>
          <Text fontSize={2} sx={{ textTransform: 'uppercase' }} fontWeight={500}>
            Guides
          </Text>
          <Box pt={2}>
            {data.map(
              (item, i) =>
                i > 4 && (
                  // <Link href={item.dropdownLink} key={i}>
                  <Box sx={{ cursor: 'pointer', '&:hover': { color: '#494849' } }}>
                    <Text fontSize={2} py="6px">
                      {item.dropdownLabel}
                    </Text>
                  </Box>
                  // </Link>
                )
            )}
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};

export default WikiDropdown;
