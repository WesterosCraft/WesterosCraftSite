import React from 'react';
import { Card, Flex, Text, Box } from 'rebass';
import Link from 'next/link';
import Icon from '../../atoms/icon/icon';

const WikiCard = ({ data }) => (
  <Card
    height={420}
    width={296}
    sx={{
      boxShadow:
        '0px 4.5288px 3.62304px rgba(0, 0, 0, 0.0278729), 0px 12.5216px 10.0172px rgba(0, 0, 0, 0.04), 0px 30.1471px 24.1177px rgba(0, 0, 0, 0.0521271), 0px 100px 80px rgba(0, 0, 0, 0.08)',
      borderRadius: '4px',
      position: 'relative',
    }}
    mx={[2, 6]}
    my={7}
  >
    <Flex flexDirection="column" p={6}>
      <Icon name={data.icon} width="36" height="36" />
      <Text variant="heading6" as="h6" mt={3}>
        {data.heading}
      </Text>
      <Text variant="paragraph" as="p">
        {data.subheading}
      </Text>
      <Box mt={8}>
        {data.wikiCardLinks.map((link, i) => (
          <Link href={link.wikiCardLink} key={i}>
            <Text
              mb={6}
              color="brandRed"
              variant="paragraph"
              fontWeight="600"
              sx={{
                cursor: 'pointer',
                '&:hover': {
                  opacity: 0.7,
                },
              }}
            >
              {link.wikiCardLabel}
            </Text>
          </Link>
        ))}
      </Box>
    </Flex>
    <Flex
      mt="auto"
      width={1}
      height={48}
      sx={{
        position: 'absolute',
        bottom: 0,
        borderRadius: '0 0 4px 4px',
      }}
    >
      <Box
        bg="red"
        width={1}
        height={48}
        sx={{
          position: 'absolute',
          bottom: 0,
          borderRadius: '0 0 4px 4px',
          opacity: 0.1,
        }}
      />
      <Text>{data.wikiCardLinkLabel}</Text>
    </Flex>
  </Card>
);

export default WikiCard;
