import React from 'react';
import { WikiLayout } from '../components/templates/wikiLayout';
import { Redactor } from '../components/atoms/redactor/redactor';
import { Flex, Image, Text } from 'rebass';
import { Carousel } from 'react-responsive-carousel';
import _lowerCase from 'lodash/lowerCase';
import { camelCaseFormatter, formatDate } from '../utility/helpers';
import SEO from '../components/organisms/seo/seo';

const DestinationPage = ({ pageContext }) => {
  return (
    <>
      {pageContext && pageContext.data && (
        <SEO
          title={pageContext.data.title}
          description={pageContext.data.pageDescription}
          image={pageContext.data.pageEntry && pageContext.data.pageImage[0].url}
        />
      )}
      <WikiLayout
        title={(pageContext && pageContext.data && pageContext.data.title) || 'WesterosCraft Wiki'}
        breadcrumb={pageContext.breadcrumb}
      >
        {pageContext.data && pageContext.data.images && pageContext.data.images.length > 0 && (
          <Flex flexDirection={['column', null, 'row']} justifyContent="center" mx="auto">
            <Carousel showThumbs={false}>
              {pageContext.data.images.map((slide, index) => (
                <Image key={index} src={slide.url} alt={slide.title || ''} />
              ))}
            </Carousel>
          </Flex>
        )}
        <Text
          variant="heading3"
          as="h3"
          mb={5}
          mt={pageContext.data && pageContext.data.images && pageContext.data.images.length > 0 ? 5 : 0}
        >
          Project details
        </Text>
        {pageContext && pageContext.data && pageContext.data.projectDetails && pageContext.data.projectDetails.length && (
          <Flex
            flexDirection="row"
            flexWrap="wrap"
            alignItems="center"
            justifyContent="space-between"
            width={[1, 2 / 3, 1]}
            mb={10}
            mx="auto"
          >
            <Flex flexDirection="column" width={[1, null, '45%']}>
              <Flex justifyContent={['space-between', null, 'flex-start']} py={2} width={1}>
                <Text fontWeight={600} width={120}>
                  Region
                </Text>
                <Text>{camelCaseFormatter(pageContext.data.projectDetails[0].region)}</Text>
              </Flex>
              <Flex justifyContent={['space-between', null, 'flex-start']} py={2} width={1}>
                <Text fontWeight={600} width={120}>
                  House
                </Text>
                <Text>{pageContext.data.projectDetails[0].house}</Text>
              </Flex>
              <Flex justifyContent={['space-between', null, 'flex-start']} py={2} width={1}>
                <Text fontWeight={600} width={120}>
                  Status
                </Text>
                <Text>{camelCaseFormatter(pageContext.data.projectDetails[0].destinationStatus)}</Text>
              </Flex>
              <Flex justifyContent={['space-between', null, 'flex-start']} py={2} width={1}>
                <Text fontWeight={600} width={120}>
                  Date started
                </Text>
                <Text>{formatDate(pageContext.data.projectDetails[0].dateStarted)}</Text>
              </Flex>
            </Flex>
            <Flex flexDirection="column" width={[1, null, '45%']}>
              <Flex justifyContent={['space-between', null, 'flex-start']} py={2} width={1}>
                <Text fontWeight={600} width={120}>
                  Type
                </Text>
                <Text>{camelCaseFormatter(pageContext.data.projectDetails[0].destinationType)}</Text>
              </Flex>
              <Flex justifyContent={['space-between', null, 'flex-start']} py={2} width={1}>
                <Text fontWeight={600} width={120}>
                  Warp
                </Text>
                <Text>{`/${_lowerCase(pageContext.data.projectDetails[0].warp)}`}</Text>
              </Flex>
              <Flex justifyContent={['space-between', null, 'flex-start']} py={2} width={1}>
                <Text fontWeight={600} width={120}>
                  Project lead(s)
                </Text>
                <Text>{pageContext.data.projectDetails[0].projectLead}</Text>
              </Flex>
              <Flex justifyContent={['space-between', null, 'flex-start']} py={2} width={1}>
                <Text fontWeight={600} width={120}>
                  Date completed
                </Text>
                <Text>{formatDate(pageContext.data.projectDetails[0].dateCompleted)}</Text>
              </Flex>
            </Flex>
          </Flex>
        )}
        {pageContext.data && pageContext.data.copy && (
          <Redactor dangerouslySetInnerHTML={{ __html: pageContext.data.copy }} />
        )}
      </WikiLayout>
    </>
  );
};

export default DestinationPage;
