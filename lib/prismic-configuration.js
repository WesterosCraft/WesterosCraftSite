export const linkResolver = doc => {
  if (doc.type === 'post') {
    return `/blog/${doc.uid}`;
  }
  return '/';
};

// Additional helper function for Next/Link components
export const hrefResolver = doc => {
  if (doc.type === 'post') {
    return `/post?uid=${doc.uid}`;
  }
  return '/';
};
