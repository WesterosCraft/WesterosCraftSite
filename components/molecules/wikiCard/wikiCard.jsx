import React from 'react';
import { Card, Flex, Text } from 'rebass';

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
      <Text>{data.heading}</Text>
      <Text>{data.subheading}</Text>
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
