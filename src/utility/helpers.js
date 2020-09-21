import _startCase from 'lodash/startCase';
import _camelCase from 'lodash/camelCase';
import * as dayjs from 'dayjs';
import _merge from 'lodash/merge';

export const configProps = (data) => {
  return {
    mt: [
      data.marginTop[0].mobile,
      data.marginTop[0].tablet,
      data.marginTop[0].desktop,
      data.marginTop[0].wide
    ],
    mb: [
      data.marginBottom[0].mobile,
      data.marginBottom[0].tablet,
      data.marginBottom[0].desktop,
      data.marginBottom[0].wide
    ],
    pt: [
      data.paddingTop[0].mobile,
      data.paddingTop[0].tablet,
      data.paddingTop[0].desktop,
      data.paddingTop[0].wide
    ],
    pb: [
      data.paddingBottom[0].mobile,
      data.paddingBottom[0].tablet,
      data.paddingBottom[0].desktop,
      data.paddingBottom[0].wide
    ]
  };
};

export const camelCaseFormatter = (string) => {
  return _startCase(_camelCase(string));
};

export const formatDate = (date) => {
  if (!date) {
    return;
  }
  const d = dayjs(date).format('MMMM D, YYYY');
  return d;
};

export const getOS = () => {
  const platform = window.navigator.platform;
  const macosPlatforms = ['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K'];
  const windowsPlatforms = ['Win32', 'Win64', 'Windows', 'WinCE'];
  // const userAgent = window.navigator.userAgent;
  // const iosPlatforms = ['iPhone', 'iPad', 'iPod'];
  let os = null;

  if (macosPlatforms.indexOf(platform) !== -1) {
    os = 'Mac';
  } else if (windowsPlatforms.indexOf(platform) !== -1) {
    os = 'Windows';
  } else if (!os && /Linux/.test(platform)) {
    os = 'Linux';
  } else {
    os = null;
  }

  return os;
};

export const completionPercentage = (completedLevel, inProgressLevel, notStartedLevel) => {
  return Math.ceil(
    ((completedLevel + inProgressLevel / 2) /
      (completedLevel + inProgressLevel + notStartedLevel)) *
      100
  );
};

export const flatten = (data) =>
  data.reduce((arr, elem) => {
    if (elem.projectDetails && elem.projectDetails.length) {
      arr.push(_merge(elem, elem.projectDetails[0]));
    }
    return arr;
  }, []);

export const getDestinationLevel = (num) => {
  switch (num) {
    case 'one':
      return 1;
    case 'two':
      return 2;
    case 'three':
      return 3;
    case 'four':
      return 4;
    case 'five':
      return 5;
    case 'six':
      return 6;
    default:
      return 0;
  }
};
