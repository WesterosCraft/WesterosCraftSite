import React from 'react';
import { Box, Flex, Text } from 'rebass';
import { MdClose } from 'react-icons/md';
import { DropdownLink } from '../../atoms/dropdownLink/dropdownLink';

export const MobileHeader = ({ close, links }) => {
  return (
    <Box sx={{ position: 'relative' }} width={1}>
      <MdClose onClick={close} size="32px" style={{ cursor: 'pointer', position: 'absolute', right: 0 }} />
      <Flex flexDirection="column" alignItems="flex-start" py={5} px={4}>
        <Box width={1} className="nav-container" sx={{ textAlign: 'left' }}>
          {links.map((link) =>
            link.children.length > 0 && !link.navLogo.length > 0 ? (
              <>
                <Text variant="heading6" fontSize="18px" color="gray.100" mt={4}>
                  {link.title}
                </Text>

                <Flex width={1} flexDirection="column">
                  {link.children.map((child) => (
                    <DropdownLink data={child} key={child.title} />
                  ))}
                </Flex>
              </>
            ) : null,
          )}
        </Box>
      </Flex>
    </Box>
  );
};
