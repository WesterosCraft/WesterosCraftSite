import React from 'react';
import { NextSeo } from 'next-seo';

const SEO = ({ title, description, image, article }) => {
  const seo = {
    title: title,
    description: description,
    image: `https://www.westeroscraft.com/${image}`
    // url: `${siteUrl}${pathname}`
  };

  return <NextSeo title={`${seo.title} | WesterosCraft`} description={seo.description} />;
};

export default SEO;
