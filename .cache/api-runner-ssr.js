var plugins = [{
      plugin: require('/Users/jacobgranberry/Working/WesterosCraftSite/node_modules/gatsby-plugin-react-helmet/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      plugin: require('/Users/jacobgranberry/Working/WesterosCraftSite/node_modules/gatsby-plugin-transition-link/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      plugin: require('/Users/jacobgranberry/Working/WesterosCraftSite/node_modules/gatsby-plugin-layout/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      plugin: require('/Users/jacobgranberry/Working/WesterosCraftSite/node_modules/gatsby-plugin-manifest/gatsby-ssr'),
      options: {"plugins":[],"name":"westeroscraft-site","short_name":"westeroscraft","start_url":"/","background_color":"#FFFFFF","theme_color":"#9E1E22","display":"minimal-ui","lang":"en","icon":"src/images/shield-logo.svg","cache_busting_mode":"query","include_favicon":true,"legacy":true,"theme_color_in_head":true,"cacheDigest":"d18696cefed18a2270f879fb89e68113"},
    },{
      plugin: require('/Users/jacobgranberry/Working/WesterosCraftSite/node_modules/gatsby-plugin-breadcrumb/gatsby-ssr'),
      options: {"plugins":[],"useAutoGen":true,"crumbLabelUpdates":[{"pathname":"/wiki","crumbLabel":"Wiki"}]},
    },{
      plugin: require('/Users/jacobgranberry/Working/WesterosCraftSite/node_modules/gatsby-plugin-google-analytics/gatsby-ssr'),
      options: {"plugins":[],"trackingId":"UA-33220222-1","head":true,"respectDNT":true,"pageTransitionDelay":100,"defer":false},
    }]
// During bootstrap, we write requires at top of this file which looks like:
// var plugins = [
//   {
//     plugin: require("/path/to/plugin1/gatsby-ssr.js"),
//     options: { ... },
//   },
//   {
//     plugin: require("/path/to/plugin2/gatsby-ssr.js"),
//     options: { ... },
//   },
// ]

const apis = require(`./api-ssr-docs`)

// Run the specified API in any plugins that have implemented it
module.exports = (api, args, defaultReturn, argTransform) => {
  if (!apis[api]) {
    console.log(`This API doesn't exist`, api)
  }

  // Run each plugin in series.
  // eslint-disable-next-line no-undef
  let results = plugins.map(plugin => {
    if (!plugin.plugin[api]) {
      return undefined
    }
    const result = plugin.plugin[api](args, plugin.options)
    if (result && argTransform) {
      args = argTransform({ args, result })
    }
    return result
  })

  // Filter out undefined results.
  results = results.filter(result => typeof result !== `undefined`)

  if (results.length > 0) {
    return results
  } else {
    return [defaultReturn]
  }
}
