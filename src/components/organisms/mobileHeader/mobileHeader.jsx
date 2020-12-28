import React from 'react';
import { Box, Flex, Text } from 'rebass';
import { MdClose } from 'react-icons/md';
import { DropdownLink } from '../../atoms/dropdownLink/dropdownLink';

export const MobileHeader = ({ close, links }) => {
  return (
    <Box sx={{ position: 'relative' }} width={1}>
      <MdClose
        onClick={close}
        size="36px"
        style={{ cursor: 'pointer', position: 'absolute', right: 24, top: 10 }}
      />
      <Flex flexDirection="column" alignItems="flex-start" py={5} px={4} bg="white">
        <Box
          width={'90%'}
          p={4}
          className="nav-container"
          sx={{
            textAlign: 'left',
            boxShadow: `0 3.9px 3.5px rgba(0, 0, 0, 0.046),
          0 9.4px 8.4px rgba(0, 0, 0, 0.065),
          0 17.7px 15.9px rgba(0, 0, 0, 0.073),
          0 31.5px 28.4px rgba(0, 0, 0, 0.076)
        `
          }}>
          {links.map((link, i) =>
            link.children.length > 0 && !link.navLogo.length > 0 ? (
              <>
                <Text variant="heading6" fontSize="18px" color="gray.100" mt={4} key={i}>
                  {link.title}
                </Text>

                <Flex
                  width={1}
                  flexDirection="column"
                  sx={{ '.dropdown-link': { textAlign: 'left' } }}>
                  {link.children.map((child) => (
                    <DropdownLink data={child} key={child.title} onClick={close} />
                  ))}
                </Flex>
              </>
            ) : null
          )}
        </Box>
      </Flex>
    </Box>
  );
};
