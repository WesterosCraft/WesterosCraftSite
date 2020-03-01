import React from 'react';
import { Box, Text, Flex, Image } from 'rebass';
import DropdownContainer from '../../atoms/dropdownContainer/dropdownContainer';

const CommunityDropdown = ({ data }) => (
  // <DropdownContainer className="community-dropdown" sx={{ transform: 'translateX(0px)' }}>
  <Box p={8}>
    <Flex flexDirection="column">
      {data.map((item, i) =>
        item.dropdownLinkType === 'interal' ? (
          // <Link href={item.dropdownLink} key={i}>
          <Text variant="heading6" as="a">
            {item.dropdownLabel}
          </Text>
        ) : (
          // </Link>
          <Text variant="heading6" as="a" href={item.dropdownLink} key={i}>
            {item.dropdownLabel}
          </Text>
        )
      )}
      <Flex flexDirection="row" my={4}>
        {[...new Array(5)].map((a, i) => (
          <Image width="18px" height="18px" bg="black" key={i} />
        ))}
      </Flex>
    </Flex>
  </Box>
  // </DropdownContainer>
);

export default CommunityDropdown;
