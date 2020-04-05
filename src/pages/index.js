import React from 'react'

import Layout from '../components/layout'
import { graphql } from 'gatsby'
import { Heading, Box, Flex, Image, Text } from 'rebass'
import { HomeBar } from '../components/atoms/homeBar'
import { TwoColumnLayout } from '../components/organisms/twoColumnLayout'
import { VideoEmbed } from '../components/organisms/videoEmbed'
import { SliceZone } from '../components/slices/sliceZone/sliceZone'

const IndexPage = ({ data }) => {
  console.log('page data', data)
  return (
    <Layout>
      <Flex as="section" className="homepage-hero" flexDirection="column" width={1} pt={12} px={5}>
        <Box textAlign="center">
          <Heading as="h1" variant="heading1">
            Seven Kingdoms. All Blocks.
          </Heading>
          <Heading as="h2" variant="heading2" mt={5}>
            A Minecraft Server
          </Heading>
        </Box>
        <Box>
          <Image src="https://westeroscraft.com/web/assets/images/baelors-1.png" alt="Baelors" />
          <HomeBar />
          {/* <TwoColumnLayout py={[120, null, 160]}>
            <TwoColumnLayout.ColumnOne>
              <Text as="h5" variant="heading5">
                WesterosCraft is meticialulosy recreated the world of Game of Thrones
              </Text>
              <Text as="h2" variant="heading2" py={6}>
                over 1.5 billion blocks placed over 7.5 square miles
              </Text>
              <Text as="h5" variant="heading5">
                as seen in
              </Text>
              <Flex>
                <Box width={1}>
                  <Box my={2} px={5} width={1 / 2}>
                    <Image
                      src="https://westeroscraft.com/web/assets/images/minecraft-logo.svg"
                      alt="Minecraft"
                      width={1}
                      sx={{
                        maxHeight: '36px',
                        maxWidth: '190px',
                      }}
                    />
                  </Box>
                  <Box my={2} px={5} width={1 / 2}>
                    <Image
                      src="https://westeroscraft.com/web/assets/images/va_logo.svg"
                      alt="VA Museum"
                      width={1}
                      sx={{
                        maxHeight: '36px',
                        maxWidth: '63px',
                      }}
                    />
                  </Box>
                </Box>
                <Box width={1}>
                  <Box my={2} px={5} width={1 / 2}>
                    <Image
                      src="https://westeroscraft.com/web/assets/images/wired-logo.svg"
                      alt="Wired"
                      sx={{
                        maxHeight: '36px',
                        maxWidth: '176px',
                      }}
                    />
                  </Box>
                  <Box my={2} px={5} width={1 / 2}>
                    <Image
                      src="https://westeroscraft.com/web/assets/images/kotaku_logo.svg"
                      alt="Kotaku"
                      sx={{
                        maxHeight: '36px',
                        maxWidth: '192px',
                      }}
                    />
                  </Box>
                </Box>
              </Flex>
            </TwoColumnLayout.ColumnOne>
          </TwoColumnLayout> */}
          <SliceZone slices={data.craft.entry.pageSlices} />
        </Box>
      </Flex>
    </Layout>
  )
}

export const pageQuery = graphql`
  query homeQuery {
    craft {
      entry(site: "westeroscraft", section: "home") {
        ... on Craft_home_home_Entry {
          pageSlices {
            ... on Craft_pageSlices_banner_BlockType {
              ...banner
            }
            ... on Craft_pageSlices_destinationSlider_BlockType {
              ...destinationSlider
            }
            ... on Craft_pageSlices_twoColumnText_BlockType {
              ...twoColumnText
            }
            ... on Craft_pageSlices_twoColumnVideo_BlockType {
              ...twoColumnVideo
            }
            ... on Craft_pageSlices_text_BlockType {
              ...text
            }
          }
        }
      }
    }
  }
`

export default IndexPage
