import React from 'react';
import { Heading, Box, Flex, Text } from 'rebass';
import { SliceZone } from '../components/slices/sliceZone/sliceZone';
import ScrollAnimation from 'react-animate-on-scroll';
import { Button } from '../components/atoms/button';
import Link from 'next/link';
import { BsTriangleFill } from 'react-icons/bs';
import SEO from '../components/organisms/seo/seo';
// import Pixel from '../../public/images/bright-squares.png';
import { LazyLoadImage } from 'react-lazy-load-image-component';
// import { trackCustomEvent } from 'gatsby-plugin-google-analytics';
import { useMediaQuery } from 'react-responsive';
import { HOME_QUERY } from '../queries/homeQuery.gql';
import { initializeApollo } from '../../lib/apolloClient';
import { gql, useQuery } from '@apollo/client';
import { event } from 'react-ga';

const IndexPage = () => {
  const { data, loading } = useQuery(HOME_QUERY);
  const homepageData = data.entry.homePageContent[0];
  const isMobile = useMediaQuery({ query: '(max-width: 520px)' });

  console.log(data);

  return (
    <>
      {/* <SEO
        title={data.entry.pageTitle || data.entry.title}
        description={data.entry.pageDescription}
        image={data.entry.pageEntry && data.entry.pageImage[0].url}
      /> */}
      <Flex
        as="section"
        className="homepage-hero"
        flexDirection="column"
        width={1}
        pt={6}
        px={5}
        height={['calc(100vh - 72px)', 'calc(100vh - 124px)']}
        justifyContent="space-between"
        sx={{
          position: 'relative'
        }}>
        <Box textAlign="center">
          <ScrollAnimation animateIn="fadeIn" delay={200} animateOnce>
            <Heading as="h1" variant="heading1">
              {homepageData.heading || ''}
            </Heading>
          </ScrollAnimation>
          <ScrollAnimation animateIn="fadeIn" delay={600} animateOnce>
            <Heading as="h2" variant="heading2" mt={5}>
              {homepageData.subheading || ''}
            </Heading>
          </ScrollAnimation>
          <ScrollAnimation animateIn="fadeIn" delay={1000} animateOnce>
            <Link href="/launcher" cover duration={0.5} bg="#9E1E22" direction="right">
              <Button
                variant="red"
                mt={9}
                as="div"
                onClick={() => {
                  event({
                    category: 'Button',
                    action: 'Click',
                    label: `homepage-top-cta-launcher-button`
                  });
                }}>
                Start Exploring
              </Button>
            </Link>
            <a href="https://forum.westeroscraft.com">
              <Button
                variant="white"
                mt={9}
                as="div"
                onClick={() => {
                  event({
                    category: 'Button',
                    action: 'Click',
                    label: `homepage-cta-forums-button`
                  });
                }}>
                <BsTriangleFill
                  size="16px"
                  style={{
                    transform: 'rotate(90deg)',
                    marginRight: '6px',
                    marginTop: '-1px',
                    marginBottom: '-2px'
                  }}
                  color="#333333"
                />
                Join the Forums
              </Button>
            </a>
          </ScrollAnimation>
        </Box>
        <Box
          className="hero-image-gradient"
          width="100%"
          height="100%"
          sx={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            zIndex: -1,
            backgroundColor: 'rgba(81, 179, 255, 0.14)'
            // backgroundImage: `linear-gradient(to top, rgba(255, 255, 255, 0) 40%, white 60%), url(${Pixel})`,
          }}
        />
        <Box
          className="hero-image-container"
          sx={{
            left: '50%',
            marginLeft: '-50vw',
            marginRight: '-50vw',
            maxWidth: '100vw',
            position: 'relative',
            right: '50%',
            width: '100vw',
            imageRendering: 'pixelated'
          }}>
          {isMobile ? (
            <LazyLoadImage
              className="hero-image"
              loading="eager"
              alt="The Wall"
              placeholderSrc="https://cdn.westeroscraft.com/web/assets/website/wall-light-loading-1920.png"
              src="https://cdn.westeroscraft.com/web/assets/website/wall-light-520.png"
              width="512px"
              height="100%"
            />
          ) : (
            <LazyLoadImage
              className="hero-image"
              loading="eager"
              srcSet="https://cdn.westeroscraft.com/web/assets/website/wall-light-520.png 520w, https://cdn.westeroscraft.com/web/assets/website/wall-light-1200.png 1200w, https://cdn.westeroscraft.com/web/assets/website/wall-light-1920.png 1920w"
              alt="The Wall"
              placeholderSrc="https://cdn.westeroscraft.com/web/assets/website/wall-light-loading-1920.png"
              src="https://cdn.westeroscraft.com/web/assets/website/wall-light-1920.png"
              width="100%"
              height="100%"
            />
          )}
        </Box>
      </Flex>
      <Flex
        alignItems="center"
        flexDirection="column"
        mx="auto"
        className="homepage-content"
        px={5}>
        <SliceZone slices={data.entry.pageSlices} />
      </Flex>
      <Box>
        <Box sx={{ position: 'relative' }} maxWidth={1120} px={5} mx="auto" width={1}>
          <Box
            width={1 / 2}
            sx={{
              position: 'absolute',
              top: [0, null, null, null, 65],
              right: 0,
              zIndex: 50
            }}
            maxWidth={1120}
            pr={5}
            display={['none', null, null, 'block']}
            textAlign="right"
            className="footer-cta">
            <Text variant="heading4" fontWeight="bold" as="h4">
              Get started with WesterosCraft
            </Text>
            <Text variant="heading5" mt={4} as="h5" pl={5} lineHeight="1.5">
              Ready to start exploring? All you need is a copy of{' '}
              <Box
                as="a"
                color="green"
                fontWeight="500"
                sx={{ cursor: 'pointer', zIndex: 50 }}
                href="https://www.minecraft.net/"
                target="_blank"
                rel="noopener noreferrer">
                Minecraft Java Edition
              </Box>
            </Text>
            <Button
              variant="red"
              mt={7}
              href="/launcher"
              onClick={() => {
                event({
                  category: 'Button',
                  action: 'Click',
                  label: `homepage-bottom-cta-launcher-button`
                });
              }}>
              Get the Launcher
            </Button>
          </Box>
        </Box>
        <Box className="footer-image" sx={{ transform: 'scaleX(-1)' }}>
          <LazyLoadImage
            srcSet="https://cdn.westeroscraft.com/web/assets/website/redkeep-520.png 520w, https://cdn.westeroscraft.com/web/assets/website/redkeep-1640.png 1640w"
            alt="Red Keep"
            placeholderSrc="https://cdn.westeroscraft.com/web/assets/website/redkeep-loading-1640.png"
            src="https://cdn.westeroscraft.com/web/assets/website/redkeep-1640.png"
            width="100%"
            height="100%"
            wrapperClassName="lazy-loaded-image-span"
            threshold={300}
            style={{ display: 'block' }}
            loading="lazy"
          />
        </Box>
      </Box>
    </>
  );
};

export async function getStaticProps() {
  const apolloClient = initializeApollo();

  await apolloClient.query({
    query: HOME_QUERY
  });

  return {
    props: {
      initialApolloState: apolloClient.cache.extract()
    },
    revalidate: 1
  };
}

export default IndexPage;
