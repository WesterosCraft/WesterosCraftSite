import React from 'react';
import { Box, Flex, Text } from 'rebass';
import { MdClose } from 'react-icons/md';
import { DropdownLink } from '../../atoms/dropdownLink/dropdownLink';
import DarkModeToggle from '../../atoms/darkModeToggle';

export const MobileHeader = ({ close, links }) => {
  return (
    <Box sx={{ position: 'relative' }} width={1}>
      <MdClose
        onClick={close}
        size="36px"
        color="var(--theme-colors-text)"
        style={{ cursor: 'pointer', position: 'absolute', right: 24, top: 10 }}
      />
      <Flex
        flexDirection="column"
        alignItems="flex-start"
        py={5}
        px={4}
        bg="var(--theme-colors-background)">
        <Box width={'90%'} p={4} className="nav-container">
          <DarkModeToggle />
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
