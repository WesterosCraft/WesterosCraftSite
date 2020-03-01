import gql from 'graphql-tag';

export const ANIMATED_IMAGE_WITH_TEXT = gql`
  fragment animatedImageWithText on slices_animatedImageWithText_BlockType {
    sequence
    heading
    copy
    buttonLabel
    buttonLink
    image {
      url
      title
    }
    order
    marginTop
    marginBottom
    paddingTop
    paddingBottom
  }
`;

export const FEATURED_BANNER = gql`
  fragment featuredBanner on slices_featureBanner_BlockType {
    heading
    buttonType
    buttonLabel
    buttonUrl
    logo {
      ... on logo_BlockType {
        imageHeight
        imageWidth
        image {
          url
        }
      }
    }
  }
`;

export const TEXT_BANNER = gql`
  fragment textBanner on slices_textBanner_BlockType {
    heading
    subtitle
    buttonType
    buttonText
    marginTop
    marginBottom
    paddingTop
    paddingBottom
  }
`;

export const TEXT_FRAGMENT = gql`
  fragment text on slices_text_BlockType {
    text
    variant
    fontWeight
    textAlign
    marginTop
    marginBottom
    paddingTop
    paddingBottom
  }
`;

export const VIDEO_FRAGMENT = gql`
  fragment video on slices_video_BlockType {
    videoEmbed
    marginTop
    marginBottom
    paddingTop
    paddingBottom
    thumbnail {
      url
      title
    }
  }
`;
