import React from 'react';
import { Card, Flex, Text, Box } from 'rebass';
import Link from 'next/link';
import Icon from '../../atoms/icon/icon';

const FeaturedEntryCard = ({ data }) => (
  <Card
    height={168}
    width={296}
    sx={{
      boxShadow: 'rgba(0, 0, 0, 0.2) 0px 2px 6px 0px',
      borderRadius: '4px',
      position: 'relative',
    }}
    mx={3}
    my={7}
  >
    {data.title}
  </Card>
);

export default FeaturedEntryCard;
