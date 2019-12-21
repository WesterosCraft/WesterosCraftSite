import React from 'react';
import { Card, Flex, Text, Box } from 'rebass';
import Link from 'next/link';
import Icon from '../../atoms/icon/icon';

const WikiCard = ({ data }) => (
  <Card
    height={420}
    width={296}
    sx={{
      boxShadow: 'rgba(0, 0, 0, 0.2) 0px 2px 6px 0px',
      borderRadius: '4px',
      position: 'relative',
    }}
    mx={6}
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
            <Text mb={6} color="brandRed" variant="paragraph" fontWeight="600" sx={{ cursor: 'pointer' }}>
              {link.wikiCardLabel}
            </Text>
          </Link>
        ))}
      </Box>
    </Flex>
    <Flex
      bg="red"
      mt="auto"
      width={1}
      height={48}
      sx={{
        position: 'absolute',
        bottom: 0,
        borderRadius: '0 0 4px 4px',
        opacity: 0.1,
      }}
    >
      <Text>{data.wikiCardLinkLabel}</Text>
    </Flex>
  </Card>
);

export default WikiCard;
