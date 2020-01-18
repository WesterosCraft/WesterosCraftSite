import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { NextSeo } from 'next-seo';
import { Flex, Text } from 'rebass';
import guideQuery from '../../../queries/guide.graphql';
import Loader from '../../../components/atoms/loader/loader';
import Layout from '../../../components/templates/layout/layout';
import WikiPage from '../../../components/templates/wikiPage/wikiPage';
import Redactor from '../../../components/atoms/redactor/redactor';

const Guide = ({ guide }) => {
  const { loading, error, data } = useQuery(guideQuery, {
    variables: {
      guide,
    },
  });

  if (error) {
    console.log(error);
  }

  if (loading) return <Loader />;

  const pageData = data.entries[0];

  console.log('GUIDE DATA: ', pageData);
  return (
    <Layout>
      <NextSeo title={`${pageData.title} | WesterosCraft Wiki`} description={pageData.synopsis || ''} />

      <WikiPage>
        <Flex flexDirection="row" justifyContent="space-between">
          <Text variant="heading2" mr={[0, 0, 0, 0, '50%']}>
            {pageData.title}
          </Text>
        </Flex>
        <Redactor dangerouslySetInnerHTML={{ __html: pageData.copy }} />
      </WikiPage>
    </Layout>
  );
};

Guide.getInitialProps = async ({ query }) => {
  return query;
};

export default Guide;
