import gql from 'graphql-tag';

export const GET_NAV = gql`
  {
    globalSets {
      ... on nav_GlobalSet {
        navLogo {
          url
        }
        navLink {
          ... on navLink_mainNavItem_BlockType {
            mainNavLink
            mainNavLabel
            dropdownItems {
              ... on dropdownItems_BlockType {
                dropdownLabel
                dropdownLink
                dropdownDescription
                dropdownSubtitle
                dropdownLinkType
                dropdownIcon {
                  url
                }
              }
            }
          }
        }
      }
    }
  }
`;
