import React from 'react';

import { Heading, Box, Flex, Text } from 'rebass';
import { Input } from '@rebass/forms';
import { Button } from '../components/atoms/button';
import SEO from '../components/organisms/seo/seo';
import { useRouter } from 'next/router';
import { getClient, urlFor, usePreviewSubscription } from '../utils/sanity';
import Error from 'next/error';
import { QuoteBlock } from '../components/atoms/quoteBlock';
import Image from 'next/image';
import useDarkMode from 'use-dark-mode';
import MailchimpSubscribe from 'react-mailchimp-subscribe';

const query = `*[_type == "rookery"]`;

const RookeryPage = ({ preview, rookeryData }) => {
  const { data } = usePreviewSubscription(query, {
    initialData: rookeryData,
    enabled: preview
  });
  const darkMode = useDarkMode(false);

  const router = useRouter();

  const {
    heading,
    editions,
    // subheading,
    title,
    pageDescription,
    pageEntry,
    pageImage,
    quote,
    quoteAuthor
  } = data[0];

  const url =
    'https://westeroscraft.us6.list-manage.com/subscribe/post?u=f917cc7f538901fd1172c9ee9&amp;id=510f1ee5b1';

  const CustomForm = ({ status, onValidated }) => {
    let email;

    const submit = (e) => {
      e.preventDefault();

      return (
        email &&
        email.value.indexOf('@') > -1 &&
        onValidated({
          EMAIL: email.value
        })
      );
    };

    return (
      <form>
        <Input
          placeholder="Email Address"
          className="news-input"
          ref={(node) => (email = node)}
          type="email"
          mb={7}
        />
        <Flex
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          sx={{ position: 'relative' }}>
          <Button onClick={submit} variant="red" disabled={status === 'sending'}>
            Subscribe
          </Button>
          <Box
            sx={{
              position: 'absolute',
              bottom: -50
            }}>
            {status === 'sending' && (
              <Text fontWeight="bold" color="pending">
                sending...
              </Text>
            )}
            {status === 'error' && (
              <Text fontWeight="bold" color="error">
                Something went wrong
              </Text>
            )}
            {status === 'success' && (
              <Text fontWeight="bold" color="success">
                Success!
              </Text>
            )}
          </Box>
        </Flex>
      </form>
    );
  };

  if (!router.isFallback && !rookeryData) {
    return <Error statusCode={404} />;
  }

  return (
    <>
      <SEO title={title} description={pageDescription} image={pageEntry && pageImage.url} />
      <Flex flexDirection="column">
        <Flex
          mt={[3, 10, 75]}
          justifyContent="center"
          flexDirection={['column', null, 'row']}
          width={[1, null, 800]}
          mx="auto"
          px={5}>
          <Flex
            height={300}
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            width={[1, null, 1 / 2]}
            pr={[3, null, 5]}>
            <Box my="auto" sx={{ position: 'relative' }}>
              {/* <Box
                width={300}
                sx={{ position: 'absolute', left: -175, top: -75, transform: 'scaleX(-1)' }}>
                <Image src="/red-dragon.png" width={300} height={168} />
              </Box> */}
              <Heading variant="heading2" textAlign="left">
                {heading}
              </Heading>
              <Text textAlign="left" lineHeight={1.5} maxWidth={786} mx="auto" mt={4}>
                The Rookery is a community created magazine that details all the latest happenings
                in the realm of WesterosCraft. Sign up to keep up to date with the server!
                <br />
                <br />
                Sent once a quarter.
                {/* {subheading} */}
              </Text>
            </Box>
          </Flex>
          <Flex
            flexDirection="column"
            my="auto"
            width={[1, null, 1 / 2]}
            pl={[3, null, 5]}
            sx={{
              position: 'relative'
            }}>
            <MailchimpSubscribe
              url={url}
              render={({ subscribe, status, message }) => (
                <CustomForm
                  status={status}
                  message={message}
                  onValidated={(formData) => subscribe(formData)}
                />
              )}
            />
            {/* <Input mb={7} placeholder="Email Address" /> */}
            {/* <Flex alignItems="center" justifyContent="center">
              <Button variant="red">Subscribe</Button>
            </Flex> */}
          </Flex>
        </Flex>
        {/* <Image src="/crow-icon.png" width={78} height={78} alt="crow" /> */}
        <Heading variant="h3" textAlign="center" mt={20}>
          All Editions
        </Heading>
      </Flex>

      <Flex
        mt={8}
        width={1}
        flexDirection="row"
        justifyContent="center"
        alignItems="center"
        flexWrap="wrap">
        {editions.map((item, i) => {
          const srcurl = item && item.thumbnail && urlFor(item.thumbnail.asset._ref).url();
          return (
            item &&
            item.thumbnail && (
              <Flex
                as="a"
                flexShrink={1}
                target="_blank"
                rel="noreferrer"
                href={item.link}
                key={item._key}
                maxWidth={570}
                width={[1, 1 / 2, 1 / 3]}
                p={4}
                sx={{
                  position: 'relative',
                  '&:hover .edition-image': {
                    transform: 'scale(1.015)',
                    transition: 'transform .3s ease, filter .3s ease',
                    filter: 'brightness(40%)',
                    cursor: 'pointer'
                  },
                  '&:hover .edition-title': {
                    visibility: 'visible'
                  }
                }}>
                <Image
                  priority={i <= 2}
                  width={538}
                  height={696}
                  src={srcurl}
                  className="edition-image"
                  alt={item.title}
                />
                <Box
                  className="edition-title"
                  sx={{
                    cursor: 'pointer',
                    visibility: 'hidden',
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)'
                  }}>
                  <Heading textAlign="center" color="white" variant="h3">
                    {item.title} Issue
                  </Heading>
                  <Text mt={3} textAlign="center" color="white" variant="h3">
                    Click to view
                  </Text>
                </Box>
              </Flex>
            )
          );
        })}
      </Flex>

      <QuoteBlock
        content={
          quote ||
          'A reader lives a thousand lives before he dies. The man who never reads lives only one.'
        }
        author={quoteAuthor || 'Jojen Reed'}
        darkMode={darkMode.value}
      />
    </>
  );
};

export async function getStaticProps({ preview = false }) {
  const rookeryData = await getClient(preview).fetch(query);

  return {
    props: {
      preview,
      rookeryData
    },
    revalidate: 1
  };
}

export default RookeryPage;
