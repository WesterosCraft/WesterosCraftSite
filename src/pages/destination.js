import React, { useState } from 'react';
import { WikiLayout } from '../components/templates/wikiLayout';
import { Redactor } from '../components/atoms/redactor/redactor';
import { Flex, Image, Text } from 'rebass';
import _lowerCase from 'lodash/lowerCase';
import { camelCaseFormatter, formatDate } from '../utility/helpers';
import SEO from '../components/organisms/seo/seo';
import Carousel, { Modal, ModalGateway } from 'react-images';

const View = ({ data, ...props }) => (
  <>
    <Image src={data.url} alt={data.tite} onClick={props.carouselProps.onClick} {...props} />
  </>
);

const DestinationPage = ({ pageContext }) => {
  const [modalOpen, setModalOpen] = useState(false);

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
            <Carousel onClick={() => setModalOpen(!modalOpen)} views={pageContext.data.images} components={{ View }} />
          </Flex>
        )}
        <ModalGateway>
          {modalOpen ? (
            <Modal
              onClose={() => {
                setModalOpen(!modalOpen);
              }}
            >
              <Carousel views={pageContext.data.images} components={{ View }} />
            </Modal>
          ) : null}
        </ModalGateway>
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
            {pageContext &&
              pageContext.data &&
              pageContext.data.projectDetails &&
              pageContext.data.projectDetails.length &&
              pageContext.data.projectDetails[0].banner.length > 0 && (
                <Image src={pageContext.data.projectDetails[0].banner[0].url} maxHeight={150} />
              )}
            <Flex as="ol" flexDirection="column" width={[1, null, null, '42%']} sx={{ paddingInlineStart: 0 }}>
              <Flex as="li" justifyContent={['space-between', null, null, 'flex-start']} py={2} width={1}>
                <Text as="h4" fontWeight={600} width={1 / 2}>
                  Region
                </Text>
                <Text as="p" width={1 / 2}>
                  {camelCaseFormatter(pageContext.data.projectDetails[0].region)}
                </Text>
              </Flex>
              <Flex as="li" justifyContent={['space-between', null, null, 'flex-start']} py={2} width={1}>
                <Text as="h4" fontWeight={600} width={1 / 2}>
                  House
                </Text>
                <Text as="p" width={1 / 2}>
                  {pageContext.data.projectDetails[0].house}
                </Text>
              </Flex>
              <Flex as="li" justifyContent={['space-between', null, null, 'flex-start']} py={2} width={1}>
                <Text as="h4" fontWeight={600} width={1 / 2}>
                  Status
                </Text>
                <Text as="p" width={1 / 2}>
                  {camelCaseFormatter(pageContext.data.projectDetails[0].destinationStatus)}
                </Text>
              </Flex>
              <Flex as="li" justifyContent={['space-between', null, null, 'flex-start']} py={2} width={1}>
                <Text as="h4" fontWeight={600} width={1 / 2}>
                  Date started
                </Text>
                <Text as="p" width={1 / 2}>
                  {formatDate(pageContext.data.projectDetails[0].dateStarted)}
                </Text>
              </Flex>
            </Flex>
            <Flex as="ol" flexDirection="column" width={[1, null, null, '42%']} sx={{ paddingInlineStart: 0 }}>
              <Flex as="li" justifyContent={['space-between', null, null, 'flex-start']} py={2} width={1}>
                <Text as="h4" fontWeight={600} width={1 / 2}>
                  Type
                </Text>
                <Text as="p" width={1 / 2}>
                  {camelCaseFormatter(pageContext.data.projectDetails[0].destinationType)}
                </Text>
              </Flex>
              <Flex as="li" justifyContent={['space-between', null, null, 'flex-start']} py={2} width={1}>
                <Text as="h4" fontWeight={600} width={1 / 2}>
                  Warp
                </Text>
                <Text as="p" width={1 / 2}>{`/${_lowerCase(pageContext.data.projectDetails[0].warp)}`}</Text>
              </Flex>
              <Flex as="li" justifyContent={['space-between', null, null, 'flex-start']} py={2} width={1}>
                <Text as="h4" fontWeight={600} width={1 / 2}>
                  Project lead(s)
                </Text>
                <Text as="p" width={1 / 2}>
                  {pageContext.data.projectDetails[0].projectLead}
                </Text>
              </Flex>
              <Flex as="li" justifyContent={['space-between', null, null, 'flex-start']} py={2} width={1}>
                <Text as="h4" fontWeight={600} width={1 / 2}>
                  Date completed
                </Text>
                <Text as="p" width={1 / 2}>
                  {formatDate(pageContext.data.projectDetails[0].dateCompleted)}
                </Text>
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
