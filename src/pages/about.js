import React from 'react';

import { graphql } from 'gatsby';
import { Heading } from 'rebass';
import { SliceZone } from '../components/slices/sliceZone/sliceZone';
import SEO from '../components/organisms/seo/seo';

const AboutPage = ({ data }) => {
  return (
    <>
      <SEO
        title={data.craft.entry.pageTitle || data.craft.entry.title}
        description={data.craft.entry.pageDescription}
        image={data.craft.entry.pageEntry && data.craft.entry.pageImage[0].url}
      />
      <Heading variant="heading2" textAlign="center" mt={[12]}>
        {data.craft.entry.heading}
      </Heading>
      <SliceZone slices={data.craft.entry.pageSlices} />
    </>
  );
};

export const pageQuery = graphql`
  query aboutQuery {
    craft {
      entry(site: "westeroscraft", section: "about") {
        title
        ... on Craft_about_about_Entry {
          heading
          pageTitle
          pageDescription
          pageImage {
            url
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

export default AboutPage;
