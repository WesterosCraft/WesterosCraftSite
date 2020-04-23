import React from 'react';
import { WikiLayout } from '../components/templates/wikiLayout';
import { Redactor } from '../components/atoms/redactor/redactor';
import { Flex } from 'rebass';
import { Image } from 'rebass';
import { Carousel } from 'react-responsive-carousel';

const DestinationPage = ({ pageContext }) => {
  return (
    <WikiLayout
      title={(pageContext && pageContext.data && pageContext.data.title) || 'WesterosCraft Wiki'}
      breadcrumb={pageContext.breadcrumb}
    >
      {pageContext.data.images && pageContext.data.images.length > 0 && (
        <Flex
          flexDirection={['column', null, 'row']}
          justifyContent="center"
          mx="auto"
          sx={{
            '.carousel': {
              maxWidth: '632px',
              maxHeight: '360px',
              margin: '0 auto',
            },
          }}
        >
          <Carousel>
            {pageContext.data.images.map((slide, index) => (
              <Image key={index} src={slide.url} alt={slide.title || ''} />
            ))}
          </Carousel>
        </Flex>
      )}
      {pageContext.data && pageContext.data.copy && (
        <Redactor dangerouslySetInnerHTML={{ __html: pageContext.data.copy }} />
      )}
    </WikiLayout>
  );
};

export default DestinationPage;
