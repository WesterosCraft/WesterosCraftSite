import gql from 'graphql-tag';
import {
  VIDEO_FRAGMENT,
  ANIMATED_IMAGE_WITH_TEXT,
  FEATURED_BANNER,
  TEXT_BANNER,
  TEXT_FRAGMENT,
} from './fragments/sliceFragments';

export const GET_HOME_PAGE = gql`
  query($section: [String]) {
    entries(section: $section) {
      ... on homePage_homePage_Entry {
        footerImage {
          url
        }
        slices {
          ...video
          ...text
          ...textBanner
          ...featuredBanner
          ...animatedImageWithText
        }
      }
    }
  }
  ${VIDEO_FRAGMENT}
  ${ANIMATED_IMAGE_WITH_TEXT}
  ${FEATURED_BANNER}
  ${TEXT_BANNER}
  ${TEXT_FRAGMENT}
`;
