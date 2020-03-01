import React from 'react';
import { Text, Flex, Image } from 'rebass';
import { useQuery } from '@apollo/react-hooks';
import SliceZone from '../slices/sliceZone';
import HomePageTemplate from '../templates/homepage/homePageTemplate';
import Layout from '../templates/layout/layout';
import Loader from '../atoms/loader/loader';
import { GET_HOME_PAGE } from '../../queries/homeQuery.js';

const HomePage = () => {
  const { loading, error, data } = useQuery(GET_HOME_PAGE, {
    variables: {
      section: 'homePage',
    },
  });

  if (loading) return <Loader />;
  if (error) {
    console.log('error: ', error);
  }

  const page = data.entries[0];

  console.log(data);
  return (
    <Layout title="WesterosCraft">
      <HomePageTemplate>
        <Flex flexDirection="column" width={1} mx="auto" textAlign="center" px={[5, 8]}>
          <Text fontSize={[42, 60]} maxWidth={540} mx="auto" fontWeight="bold">
            hello
          </Text>
          <Text variant="heading3" mt={6} fontWeight="bold">
            ikmsdi
          </Text>
        </Flex>
        {/* <Weirwood /> */}
      </HomePageTemplate>
      <SliceZone slices={page.slices} />
      <Image src={page.footerImage[0].url} sx={{ position: 'absolute', bottom: 0 }} />
    </Layout>
  );
};

export default HomePage;
