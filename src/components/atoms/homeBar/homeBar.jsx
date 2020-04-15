import React from 'react'
import { Flex, Text, Image } from 'rebass'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

export const HomeBar = ({ data }) => (
  <Flex
    flexDirection={['column', null, 'row']}
    justifyContent="center"
    alignItems="center"
    mx="auto"
    maxWidth={750}
    mt={['20px', null, -50]}
    bg="white"
    width={[250, null, 'auto']}
    sx={{
      position: 'relative',
      zIndex: 5,
      boxShadow: `0 13px 27px -5px rgba(50,50,93,.25), 0 8px 16px -8px rgba(0,0,0,.3), 0 -6px 16px -6px rgba(0,0,0,.025);`,
    }}
  >
    {data.children.map((child, i) => (
      <AniLink cover duration={0.5} bg="#9E1E22" direction="right" to={child.singleLink} key={i}>
        <HomeBar.Card data={child} />
      </AniLink>
    ))}
  </Flex>
)

HomeBar.Card = function ({ data }) {
  return (
    <Flex height={[160]} width={[250]} flexDirection="column" justifyContent="center" alignItems="center">
      <Image src={data.thumbnail[0].url} width={60} height={60} />
      <Text mt={5} variant="heading6" color="black" fontWeight={500}>
        {data.heading}
      </Text>
    </Flex>
  )
}
