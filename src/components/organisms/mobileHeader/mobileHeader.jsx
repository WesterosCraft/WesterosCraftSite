import React from 'react'
import { Box, Flex, Text } from 'rebass'
import { MdClose } from 'react-icons/md'

export const MobileHeader = ({ close, links }) => {
  return (
    <Box sx={{ position: 'relative' }} width={1}>
      <MdClose onClick={close} size="32px" style={{ cursor: 'pointer', position: 'absolute', right: 0 }} />
      <Flex flexDirection="column" alignItems="flex-start" py={5} px={4}>
        <Box>
          {links.map((link) =>
            link.children.length > 0 && !link.navLogo.length > 0 ? (
              <>
                <Text variant="heading6" fontSize="18px" color="gray.100">
                  {link.title}
                </Text>

                <Box>
                  {link.children.map((child) => (
                    <Text>{child.title}</Text>
                  ))}
                </Box>
              </>
            ) : null,
          )}
        </Box>
      </Flex>
    </Box>
  )
}
