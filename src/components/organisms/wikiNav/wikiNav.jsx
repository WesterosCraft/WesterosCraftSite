import React, { useState } from 'react'
import { Box, Text, Flex } from 'rebass'
import { Input } from '@rebass/forms'
import { Link } from 'gatsby'
import { IoMdArrowDropdown } from 'react-icons/io'

const WikiNavGroup = ({ navItem }) => {
  const [open, setOpen] = useState(true)

  return (
    <>
      <Box key={navItem.title} sx={{ boxShadow: 'inset -1px 0 0 rgba(48,48,49,0.2)' }}>
        <Flex
          flexDirection="row"
          alignItems="center"
          mb={2}
          className="group-title"
          onClick={() => {
            setOpen(!open)
          }}
          sx={{
            cursor: 'pointer',
          }}
        >
          <Text variant="heading6" fontSize="18px" fontWeight="bold">
            {navItem.title}
          </Text>
          <IoMdArrowDropdown size="24px" />
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
              listStyleType: 'none',
            }}
          >
            {navItem.children.map((child) => (
              <Box as="li" key={child.title}>
                <Link to={`/wiki/${child.element.slug}`}>
                  <Text
                    py={1}
                    color="gray.100"
                    sx={{
                      '&:hover': {
                        color: 'red.medium',
                      },
                    }}
                  >
                    {child.title}
                  </Text>
                </Link>
              </Box>
            ))}
          </Flex>
        )}
      </Box>
    </>
  )
}

export const WikiNav = ({ navData }) => {
  const searchIndices = [{ name: `Destinations`, title: `Destinations`, hitComp: `DestinationHit` }]

  return (
    <Flex
      flexDirection="column"
      as="nav"
      className="wiki-nav"
      maxWidth={['100%', null, 320]}
      sx={{ position: 'relative' }}
    >
      <Input placeholder="Search Wiki" mb="44px" />
      <Box
        sx={{
          display: ['none', null, 'block'],
        }}
        width={1}
      >
        {navData.craft.wikiNav.map((navItem, i) => (
          <WikiNavGroup navItem={navItem} key={i} />
        ))}
      </Box>
    </Flex>
  )
}
