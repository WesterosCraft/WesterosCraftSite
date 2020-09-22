import React from 'react';

import { Heading } from 'rebass';
import { graphql } from 'gatsby';
import { SliceZone } from '../components/slices/sliceZone/sliceZone';
import SEO from '../components/organisms/seo/seo';

const LauncherPage = ({ data }) => (
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

export const pageQuery = graphql`
  query launcherQuery {
    craft {
      entry(site: "westeroscraft", section: "launcher") {
        title
        ... on Craft_launcher_launcher_Entry {
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
            ... on Craft_pageSlices_video_BlockType {
              ...video
            }
            ... on Craft_pageSlices_text_BlockType {
              ...text
            }
            ... on Craft_pageSlices_contentBanner_BlockType {
              ...contentBanner
            }
          }
        }
      }
    }
  }
`;

export default LauncherPage;
