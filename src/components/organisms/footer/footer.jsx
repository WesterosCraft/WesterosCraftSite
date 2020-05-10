import React, { Fragment } from 'react';
import { Box, Text, Flex } from 'rebass';
import {
  AiFillFacebook,
  AiFillTwitterSquare,
  AiFillRedditSquare,
  AiFillInstagram,
  AiFillYoutube,
} from 'react-icons/ai';
import { Link } from 'gatsby';

export const Footer = ({ links }) => (
  <Flex
    bg="gray.300"
    minHeight={376}
    sx={{ position: 'relative', zIndex: 500, outline: '8px outset #505652', outlineOffset: '-8px' }}
    as="footer"
    flexDirection="column"
    justifyContent="center"
    px={[3, 7]}
    py={9}
  >
    <Flex
      flexWrap="wrap"
      flexDirection="row"
      alignItems="flex-start"
      width={1}
      maxWidth={1120}
      mx="auto"
      justifyContent={['center', 'space-between']}
    >
      {links.map((link) =>
        link.children.length > 0 && !link.navLogo.length > 0 ? (
          <Box p={[0, 1]} width={[160, 182, 200]} py={[4, null, 0]} key={link.title}>
            <Text fontSize="16px" color="white" mb={4} sx={{ textTransform: 'uppercase' }} fontFamily="heading">
              {link.title}
            </Text>

            <Flex width={1} flexDirection="column">
              {link.children.map((child, i) => (
                <Fragment key={i}>
                  {child.element && child.element.slug ? (
                    <Link
                      to={`/${
                        child.element && child.element.slug === 'frequently-asked-questions'
                          ? `wiki/miscellaneous/${child.element.slug}`
                          : child.element.slug
                      }`}
                    >
                      <Text
                        fontSize={1}
                        py={1}
                        color="offWhite"
                        as="p"
                        width="fit-content"
                        sx={{
                          position: 'relative',
                          '&:after': {
                            display: 'none',
                            content: "''",
                            width: '100%',
                            height: '1px',
                            background: 'white',
                            position: 'absolute',
                            bottom: 0,
                            left: 0,
                          },
                          '&:hover:after': {
                            display: 'block',
                          },
                        }}
                      >
                        {child.title}
                      </Text>
                    </Link>
                  ) : (
                    <Text
                      key={i}
                      fontSize={1}
                      py={1}
                      color="offWhite"
                      as="a"
                      width="fit-content"
                      href={child.url}
                      sx={{
                        position: 'relative',
                        '&:after': {
                          display: 'none',
                          content: "''",
                          width: '100%',
                          height: '1px',
                          background: 'white',
                          position: 'absolute',
                          bottom: 0,
                          left: 0,
                        },
                        '&:hover:after': {
                          display: 'block',
                        },
                      }}
                    >
                      {child.title}
                    </Text>
                  )}
                </Fragment>
              ))}
            </Flex>
          </Box>
        ) : null,
      )}
      <Box p={[0, 1]} py={[4, null, 0]} width={[160, 182, 200]}>
        <Text fontSize="16px" color="white" mb={4} sx={{ textTransform: 'uppercase' }} fontFamily="heading">
          Donate
        </Text>

        <Flex width={1} flexDirection="column" maxWidth={[200]}>
          <Text fontSize={1} py={1} color="offWhite" lineHeight="1.5">
            We depend on user contributions to keep the community running. Please consider donating if you have enjoyed
            the project.
          </Text>
          <a
            href="https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=westeroscraft%40gmail%2ecom&lc=US&item_name=WesterosCraft&currency_code=USD&bn=PP%2dDonationsBF%3abtn_donateCC_LG%2egif%3aNonHosted"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Text
              fontSize={1}
              py={1}
              color="offWhite"
              textAlign="center"
              mt={2}
              as="p"
              width="fit-content"
              sx={{
                position: 'relative',
                '&:after': {
                  display: 'block',
                  content: "''",
                  width: '100%',
                  height: '1px',
                  background: 'white',
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                },
              }}
            >
              Donate Here
            </Text>
          </a>
        </Flex>
      </Box>
    </Flex>
    <Flex
      flexDirection="row"
      alignItems="flex-start"
      width={1}
      maxWidth={1120}
      mx="auto"
      justifyContent={['center', 'space-between']}
      mt={[6, null, 8]}
      flexWrap="wrap"
    >
      <Box py={[4, null, 0]} minWidth={200}>
        <Text fontSize="16px" color="white" mb={4} sx={{ textTransform: 'uppercase' }} fontFamily="heading">
          Contact Us
        </Text>
        <a href="mailto:westeroscraft@gmail.com" target="_blank" rel="noopener noreferrer">
          <Text
            fontSize={1}
            py={1}
            color="offWhite"
            width="fit-content"
            sx={{
              position: 'relative',
              '&:after': {
                display: 'none',
                content: "''",
                width: '100%',
                height: '1px',
                background: 'white',
                position: 'absolute',
                bottom: 0,
                left: 0,
              },
              '&:hover:after': {
                display: 'block',
              },
            }}
          >
            westeroscraft@gmail.com
          </Text>
        </a>
      </Box>
      <Box minWidth={200} py={[4, null, 0]}>
        <Text fontSize="16px" color="white" mb={4} sx={{ textTransform: 'uppercase' }} fontFamily="heading">
          Social
        </Text>
        <Flex flexDirection="row">
          <a href="https://www.facebook.com/WesterosCraft" target="_blank" rel="noopener noreferrer">
            <AiFillFacebook size="28px" color="#f3f4f4" />
            <span style={{ fontSize: 0, color: 'transparent' }}>Facebook</span>
          </a>
          <a href="https://twitter.com/westeroscraft" target="_blank" rel="noopener noreferrer">
            <AiFillTwitterSquare size="28px" color="#f3f4f4" />
            <span style={{ fontSize: 0, color: 'transparent' }}>Twitter</span>
          </a>
          <a href="https://www.youtube.com/user/WesterosCraft" target="_blank" rel="noopener noreferrer">
            <AiFillYoutube size="28px" color="#f3f4f4" />
            <span style={{ fontSize: 0, color: 'transparent' }}>Youtube</span>
          </a>
          <a href="https://www.reddit.com/r/WesterosCraft/" target="_blank" rel="noopener noreferrer">
            <AiFillRedditSquare size="28px" color="#f3f4f4" />
            <span style={{ fontSize: 0, color: 'transparent' }}>Reddit</span>
          </a>
          <a href="https://www.instagram.com/westeroscraft" target="_blank" rel="noopener noreferrer">
            <AiFillInstagram size="28px" color="#f3f4f4" />
            <span style={{ fontSize: 0, color: 'transparent' }}>Instagram</span>
          </a>
        </Flex>
      </Box>
    </Flex>
  </Flex>
);
