import { graphql } from 'gatsby'

export const bannerFragment = graphql`
  fragment banner on Craft_pageSlices_banner_BlockType {
    typeHandle
    redactor
    buttons {
      ... on Craft_buttons_button_BlockType {
        buttonText
        buttonLink
        variant
      }
    }
  }
`

export const destinationSliderFragment = graphql`
  fragment destinationSlider on Craft_pageSlices_destinationSlider_BlockType {
    typeHandle
    redactor
    slider {
      ... on Craft_slider_slide_BlockType {
        image {
          url
        }
        slideName
        slideLink
        caption
      }
    }
    linkBuilder {
      ... on Craft_linkBuilder_additionalLinks_BlockType {
        additionalLink
        customLinkText
      }
    }
  }
`

export const twoColumnTextFragment = graphql`
  fragment twoColumnText on Craft_pageSlices_twoColumnText_BlockType {
    typeHandle
    maxWidth
    columnWidths
    children {
      ... on Craft_pageSlices_column_BlockType {
        redactor
        buttons {
          ... on Craft_buttons_button_BlockType {
            variant
            buttonText
            buttonLink
          }
        }
      }
    }
  }
`

export const video = graphql`
  fragment video on Craft_pageSlices_video_BlockType {
    typeHandle
    videoUrl
    maxWidth
    thumbnail {
      url
    }
  }
`

export const text = graphql`
  fragment text on Craft_pageSlices_text_BlockType {
    typeHandle
    redactor
  }
`

export const twoColumnVideo = graphql`
  fragment twoColumnVideo on Craft_pageSlices_twoColumnVideo_BlockType {
    typeHandle
    images {
      url
    }
    children {
      ... on Craft_pageSlices_column_BlockType {
        typeHandle
        redactor
        buttons {
          ... on Craft_buttons_button_BlockType {
            variant
            buttonText
            buttonLink
          }
        }
      }
      ... on Craft_pageSlices_video_BlockType {
        typeHandle
        maxWidth
        thumbnail {
          url
        }
        videoUrl
      }
    }
  }
`
