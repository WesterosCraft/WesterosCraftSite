import { graphql } from 'gatsby'

export const spacings = graphql`
  fragment spacings on Craft_spacings_spacing_BlockType {
    marginTop {
      mobile
      tablet
      desktop
      wide
    }
    marginBottom {
      mobile
      tablet
      desktop
      wide
    }
    paddingTop {
      mobile
      tablet
      desktop
      wide
    }
    paddingBottom {
      mobile
      tablet
      desktop
      wide
    }
  }
`
