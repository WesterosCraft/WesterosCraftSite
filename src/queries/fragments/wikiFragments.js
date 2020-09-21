import { graphql } from 'gatsby';

export const wikiText = graphql`
  fragment wikiText on Craft_wikiSlices_text_BlockType {
    typeHandle
    redactor
  }
`;

export const entryGrid = graphql`
  fragment entryGrid on Craft_wikiSlices_entryGrid_BlockType {
    typeHandle
    heading
    entryList {
      title
      slug
      typeHandle
      parent {
        slug
      }
      ... on Craft_wiki_wikiDestination_Entry {
        images {
          url
        }
        projectDetails {
          ... on Craft_projectDetails_details_BlockType {
            region
            house
            destinationType
          }
        }
      }
      ... on Craft_wiki_wikiGuide_Entry {
        heroImage {
          url
        }
      }
      ... on Craft_wiki_wikiMiscellaneous_Entry {
        heroImage {
          url
        }
      }
    }
    spacings {
      ... on Craft_spacings_spacing_BlockType {
        ...spacings
      }
    }
  }
`;

export const imageGrid = graphql`
  fragment imageGrid on Craft_wikiSlices_imageGrid_BlockType {
    typeHandle
    heading
    imageList {
      ... on Craft_imageList_listItem_BlockType {
        imageTitle
        imageDescription
        image {
          title
          url
        }
      }
    }
    spacings {
      ... on Craft_spacings_spacing_BlockType {
        ...spacings
      }
    }
    clickToCopyScript
  }
`;

export const accordion = graphql`
  fragment accordion on Craft_wikiSlices_accordion_BlockType {
    typeHandle
    heading
    accordionContent {
      ... on Craft_accordionContent_accordionItem_BlockType {
        heading
        copy
      }
    }
    spacings {
      ... on Craft_spacings_spacing_BlockType {
        ...spacings
      }
    }
  }
`;
