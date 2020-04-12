const regionSlugFormatter = (slug) => {
  switch (slug) {
    case 'beyondTheWall':
      return 'beyond-the-wall'
    case 'theWall':
      return 'the-wall'
    case 'ironIslands':
      return 'iron-islands'
    default:
      return slug
  }
}

module.exports.regionSlugFormatter = regionSlugFormatter
