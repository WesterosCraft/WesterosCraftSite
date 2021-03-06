import React, { useState } from 'react';
import { Box, Text, Flex } from 'rebass';
import Link from 'next/link';
import { IoMdArrowDropdown } from 'react-icons/io';
import { Search } from '../search';

const WikiNavGroup = ({ navItem }) => {
  const [open, setOpen] = useState(true);
  const buildLink = (child) => {
    switch (child.parent.title) {
      case 'Miscellaneous':
      case 'Guides':
        return `/wiki/guides/${child.element.slug}`;
      default:
        return `/wiki/${child.element.slug}`;
    }
  };

  return (
    <>
      <Box
        className="wiki-nav-group"
        key={navItem.title}
        sx={{ boxShadow: ['none', null, 'inset -1px 0 0 rgba(48,48,49,0.2)'] }}>
        <Flex
          flexDirection="row"
          alignItems="center"
          mb={2}
          className="group-title"
          onClick={() => {
            setOpen(!open);
          }}
          sx={{
            cursor: 'pointer'
          }}>
          <Text variant="heading6" fontSize="18px" fontWeight="bold">
            {navItem.title}
          </Text>
          <IoMdArrowDropdown size="24px" style={{ transform: !open ? 'scaleY(-1)' : '' }} />
        </Flex>
        {open && (
          <Flex
            className="group-items"
            flexDirection="column"
            as="ol"
            pl={[0, null, null, 5]}
            pb={3}
            pr={5}
            sx={{
              listStyleType: 'none'
            }}>
            {navItem.children.map((child) => (
              <Link key={child.title} href={buildLink(child)} passHref>
                <Box as="li" sx={{ cursor: 'pointer' }}>
                  <Text
                    py={1}
                    color="gray.100"
                    sx={{
                      '&:hover': {
                        color: 'red.medium'
                      }
                    }}>
                    {child.title}
                  </Text>
                </Box>
              </Link>
            ))}
          </Flex>
        )}
      </Box>
    </>
  );
};

export const WikiNav = ({ navData }) => {
  return (
    <Flex
      flexDirection="column"
      as="nav"
      className="wiki-nav"
      maxWidth={['100%', null, 320]}
      sx={{ position: 'relative', flexShrink: 0, flexGrow: 1 }}>
      <Search />
      <Box
        className="wiki-nav-container"
        width={1}
        display={['none', null, 'block']}
        maxWidth={246}>
        {navData.map((navItem, i) => (
          <WikiNavGroup navItem={navItem} key={i} />
        ))}
      </Box>
    </Flex>
  );
};
