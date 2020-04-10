import _startCase from 'lodash/startCase'
import _camelCase from 'lodash/camelCase'

export const configProps = (data) => {
  return {
    mt: [data.marginTop[0].mobile, data.marginTop[0].tablet, data.marginTop[0].desktop, data.marginTop[0].wide],
    mb: [
      data.marginBottom[0].mobile,
      data.marginBottom[0].tablet,
      data.marginBottom[0].desktop,
      data.marginBottom[0].wide,
    ],
    pt: [data.paddingTop[0].mobile, data.paddingTop[0].tablet, data.paddingTop[0].desktop, data.paddingTop[0].wide],
    pb: [
      data.paddingBottom[0].mobile,
      data.paddingBottom[0].tablet,
      data.paddingBottom[0].desktop,
      data.paddingBottom[0].wide,
    ],
  }
}

export const breadcrumbFormatter = (string) => {
  return _startCase(_camelCase(string))
}
