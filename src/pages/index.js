import React from 'react';

import { graphql } from 'gatsby';
import { Heading, Box, Flex, Image, Text } from 'rebass';
import { SliceZone } from '../components/slices/sliceZone/sliceZone';
import ScrollAnimation from 'react-animate-on-scroll';
import { Button } from '../components/atoms/button';
import { BsTriangleFill } from 'react-icons/bs';
import AniLink from 'gatsby-plugin-transition-link/AniLink';

const IndexPage = ({ data }) => {
  const homepageData = data.craft.entry.homePageContent[0];

  return (
    <>
      <Flex as="section" className="homepage-hero" flexDirection="column" width={1} pt={6} px={5}>
        <Box textAlign="center">
          <ScrollAnimation animateIn="fadeIn" delay={250} animateOnce>
            <Heading as="h1" variant="heading1">
              {homepageData.heading || ''}
            </Heading>
          </ScrollAnimation>
          <ScrollAnimation animateIn="fadeIn" delay={650} animateOnce>
            <Heading as="h2" variant="heading2" mt={5}>
              {homepageData.subheading || ''}
            </Heading>
          </ScrollAnimation>
          <ScrollAnimation animateIn="fadeIn" delay={1150} animateOnce>
            <AniLink to="/launcher" cover duration={0.5} bg="#9E1E22" direction="right">
              <Button variant="red" mt={9} as="div">
                Get the Launcher
              </Button>
            </AniLink>
            <AniLink to="/wiki" cover duration={0.5} bg="#9E1E22" direction="right">
              <Button variant="white" mt={9} as="div">
                <BsTriangleFill
                  size="16px"
                  style={{ transform: 'rotate(90deg)', marginRight: '6px', marginTop: '-1px', marginBottom: '-2px' }}
                  color="#333333"
                />
                Explore the Wiki
              </Button>
            </AniLink>
          </ScrollAnimation>
        </Box>
        <Box>
          <Image
            src={homepageData.heroImage[0].url}
            alt="Baelors"
            sx={{ textAlign: 'center' }}
            width={1}
            maxWidth={1536}
            display="block"
            mx="auto"
          />
        </Box>
      </Flex>
      <Flex alignItems="center" flexDirection="column" mx="auto" className="homepage-content" px={5}>
        <SliceZone slices={data.craft.entry.pageSlices} />
      </Flex>
      <Box>
        <Box sx={{ position: 'relative' }} maxWidth={1120} px={5} mx="auto" width={1}>
          <Box
            width={1 / 2}
            sx={{ position: 'absolute', top: 65, right: 0, zIndex: 50 }}
            maxWidth={1120}
            pr={5}
            display={['none', null, null, 'block']}
            textAlign="right"
          >
            <Text variant="heading4" fontWeight="bold" as="h4">
              Get started with WesterosCraft
            </Text>
            <Text variant="heading5" mt={4} as="h5" pl={5} lineHeight="1.5">
              Ready to start exploring? All you need is a copy of{' '}
              <Box
                as="a"
                color="green"
                fontWeight="500"
                sx={{ cursor: 'pointer', zIndex: 50 }}
                href="https://www.minecraft.net/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Minecraft Java Edition
              </Box>
            </Text>
            <Button variant="red" mt={7} href="/launcher">
              Get the Launcher
            </Button>
          </Box>
        </Box>
        <Image
          src={homepageData.footerImage[0].url}
          alt="Kings Landing"
          sx={{ textAlign: 'center', transform: 'scaleX(-1)' }}
          width={1}
          maxWidth={1536}
          display="block"
          mx="auto"
        />
      </Box>
    </>
  );
};

export const pageQuery = graphql`
  query homeQuery {
    craft {
      entry(site: "westeroscraft", section: "home") {
        ... on Craft_home_home_Entry {
          homePageContent {
            ... on Craft_homePageContent_hero_BlockType {
              heading
              subheading
              heroImage {
                url
              }
              footerImage {
                url
              }
            }
            ... on Craft_homePageContent_homebar_BlockType {
              children {
                ... on Craft_homePageContent_homeBarItem_BlockType {
                  heading
                  thumbnail {
                    url
                  }
                  singleLink
                }
              }
            }
          }
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
            ... on Craft_pageSlices_video_BlockType {
              ...video
            }
            ... on Craft_pageSlices_timeline_BlockType {
              ...timeline
            }
          }
        }
      }
    }
  }
`;

export default IndexPage;
