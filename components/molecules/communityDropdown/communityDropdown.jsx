import React from 'react';
import { Box, Text, Flex, Image } from 'rebass';
import DropdownContainer from '../../atoms/dropdownContainer/dropdownContainer';

const CommunityDropdown = ({ data }) => {
  return (
    <DropdownContainer className="community-dropdown" sx={{ transform: 'translateX(0px)' }}>
      <Box p={8}>
        {data.map((item, i) => (
          <Text variant="heading6" key={i}>
            {item.dropdownLabel}
          </Text>
        ))}
        <Flex flexDirection="row" my={4}>
          {Array(5)
            .fill(5)
            .map(() => (
              <Image width="18px" height="18px" bg="black" />
            ))}
        </Flex>
      </Box>
    </DropdownContainer>
  );
};

export default CommunityDropdown;
