import { GetStaticProps } from 'next';
import { Heading, Box, Flex, Text } from '@chakra-ui/react';
import Error from 'next/error';
import { useRouter } from 'next/router';
import { siteSettingsQuery } from '@/lib/queries';
import { sanityClient, usePreviewSubscription, urlFor } from '@/lib/sanity';
import { SiteSettings } from '@/models/site-settings';
import { Page } from '@/models/page';
import { Post } from '@/models/post';
import { Layout, PostList, Marquee } from '@/components/common';
import { RenderSection } from '@/components/utils';

import { SliceZone } from '../components/slices/sliceZone/sliceZone';
import ScrollAnimation from 'react-animate-on-scroll';
import { Button } from '../components/atoms/button';
import Link from 'next/link';
import { BsTriangleFill } from 'react-icons/bs';
import { LazyLoadImage } from 'react-lazy-load-image-component';
// import { useMediaQuery } from 'react-responsive';
// import { event } from 'react-ga';
import Image from 'next/image';

const query = `*[_type == "home"][0]{..., marquee[]{...,destination->{...}, ...}}`;

const Index = ({ pageData, siteSettings }: any) => {
	const router = useRouter();
	// const isMobile = useMediaQuery({ query: '(max-width: 520px)' });

	const { heading, marquee, pageBuilder, subheading, title } = pageData;

	const { data: page } = usePreviewSubscription(query, {
		params: { slug: pageData?.slug?.current },
		initialData: pageData,
		enabled: pageData && router.query.preview !== null,
	});

	const myLoader = ({ src, width, quality }: any) => {
		return `${src}?fit=crop&h=${width}&w=${width}&q=100`;
	};

	if (!router.isFallback && !pageData) {
		return <Error statusCode={404} />;
	}

	return (
		<Layout meta={page?.meta} siteSettings={siteSettings}>
			{/* <Box px={8}>
        <Flex flexDirection="row" justifyContent="center" alignItems="center">
          <Flex flexDirection="row" justifyContent="center" alignItems="center">
            <Text px={2}>Item One</Text>
            <Text px={2}>Item Two</Text>
          </Flex>
        </Flex>
        <Flex
          flexDirection="column"
          width="72rem"
          height={600}
          minHeight={600}
          mt="1rem"
          mx="auto"
          sx={{
            position: 'relative',
            border: '1px solid gray',
            background:
              'linear-gradient(hsl(30,40%,98%) 60%,hsl(40,80%,92%) 80%,hsl(10,100%,90%) 100%)'
          }}>
          <Flex flexDirection="row" justifyContent="center" alignItems="center" height={60}>
            <Flex
              width={1}
              flexWrap="nowrap"
              flexDirection="row"
              justifyContent="center"
              alignItems="center">
              <Text color="var(--theme-colors-gray-100)" fontSize={2} fontWeight="bold">
                Winterfell
              </Text>
              <Text mx={4} color="var(--theme-colors-gray-100)" fontSize={2} fontWeight="bold">
                King's Landing
              </Text>
              <Text color="var(--theme-colors-gray-100)" fontSize={2} fontWeight="bold">
                Castle Black
              </Text>
            </Flex>
          </Flex>
          <Flex className="kings-landing-slide-container" width={1}>
            <Box
              sx={{
                position: 'absolute',
                bottom: 0,
                right: 0,
                zIndex: 10
              }}>
              <Image src="/kl-1.png" width={1152} height={372} />
            </Box>
            <Box
              sx={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                zIndex: 5
              }}>
              <Image src="/kl-2.png" width={1152} height={302} />
            </Box>
          </Flex>
        </Flex>
      </Box> */}

			<Flex className='slider-section' maxWidth={'100vw'} sx={{ overflow: 'hidden' }} mt={120} height={350} mb={140}>
				<Marquee>
					{marquee?.map((item: any, i: number) => (
						<Box
							mx={3}
							display='block'
							width={350}
							height={350}
							key={i}
							sx={{
								boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1),0 4px 6px -2px rgba(0, 0, 0, 0.05);',
							}}
						>
							<Image
								loader={myLoader}
								src={`${urlFor(item?.marqueeImage?.asset?._ref)?.url()}`}
								width={350}
								height={350}
							/>

							<Text color='white'>{item.destination.name}</Text>
						</Box>
					))}
					{marquee?.map((item: any, i: number) => (
						<Box
							mx={3}
							display='block'
							width={350}
							height={350}
							key={i}
							sx={{
								boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1),0 4px 6px -2px rgba(0, 0, 0, 0.05);',
							}}
						>
							<Image
								loader={myLoader}
								src={`${urlFor(item?.marqueeImage?.asset?._ref)?.url()}`}
								width={350}
								height={350}
							/>
							<Text color='white'>{item.destination.name}</Text>
						</Box>
					))}
				</Marquee>
			</Flex>

			{/* <Flex
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
        <Box textAlign="center" className="homepage-text" sx={{ zIndex: 1 }}>
          <ScrollAnimation animateIn="fadeIn" delay={200} animateOnce>
            <Heading as="h1" variant="heading1">
              {heading || ''}
            </Heading>
          </ScrollAnimation>
          <ScrollAnimation animateIn="fadeIn" delay={600} animateOnce>
            <Heading as="h2" variant="heading2" mt={5}>
              {subheading || ''}
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
                  color="var(--theme-colors-text, #ffffff)"
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
            zIndex: 0,
            backgroundColor: 'rgba(81, 179, 255, 0.25)',
            backgroundImage: 'var(--theme-colors-hero-gradient)'
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
              placeholderSrc="/wall-light-loading-1920.png"
              src="/wall-light-520.png"
              width="512px"
              height="100%"
            />
          ) : (
            <LazyLoadImage
              className="hero-image"
              loading="eager"
              srcSet="/wall-light-520.png 520w, /wall-light-1200.png 1200w, /wall-light-1920.png 1920w"
              alt="The Wall"
              placeholderSrc="/wall-light-loading-1920.png"
              src="/wall-light-1920.png"
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
        <SliceZone slices={pageBuilder} />
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
            srcSet="/redkeep-520.png 520w, /redkeep-1640.png 1640w"
            alt="Red Keep"
            placeholderSrc="/redkeep-loading-1640.png"
            src="/redkeep-1640.png"
            width="100%"
            height="100%"
            wrapperClassName="lazy-loaded-image-span"
            threshold={300}
            style={{ display: 'block' }}
          />
        </Box>
      </Box> */}
		</Layout>
	);
};

export const getStaticProps: GetStaticProps = async () => {
	const pageData = await sanityClient.fetch<any>(query);
	const siteSettings = await sanityClient.fetch<SiteSettings>(siteSettingsQuery);

	if (!pageData) {
		return {
			notFound: true,
		};
	}

	return { props: { siteSettings, pageData: pageData }, revalidate: 60 };
};

// type Props = {
// 	pageData: Page;
// 	posts: Post[];
// 	siteSettings: SiteSettings;
// };

// const Index = ({ pageData, siteSettings }: Props) => {
// 	const router = useRouter();

// 	const { data: page } = usePreviewSubscription(pageQuery, {
// 		params: { slug: pageData?.slug?.current },
// 		initialData: pageData,
// 		enabled: pageData && router.query.preview !== null,
// 	});

// 	if ((!router.isFallback && !page?.slug) || !page) {
// 		return <Error statusCode={404} />;
// 	}

// 	return (
// 		<Layout meta={page?.meta} siteSettings={siteSettings}>
// 			{page?.content?.map((section) => {
// 				if (!section || Object.keys(section).length === 0) {
// 					return null;
// 				}

// 				return <RenderSection key={section._key} section={section} />;
// 			})}

// 			<Heading as='h2' size='lg' paddingY={4}>
// 				Recent articles
// 			</Heading>
// 		</Layout>
// 	);
// };

// export const getStaticProps: GetStaticProps = async () => {
// 	const siteSettings = await sanityClient.fetch<SiteSettings>(siteSettingsQuery);
// 	const pageData = await sanityClient.fetch<Page>(pageQuery, {
// 		slug: 'frontpage',
// 	});

// 	if (!pageData) {
// 		return {
// 			notFound: true,
// 		};
// 	}

// 	return { props: { siteSettings, pageData }, revalidate: 60 };
// };

export default Index;
