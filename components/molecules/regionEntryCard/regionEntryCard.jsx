import React from 'react';
import { Card, Flex, Text, Box } from 'rebass';
import _truncate from 'lodash/truncate';
import Link from 'next/link';
import Icon from '../../atoms/icon/icon';

const RegionEntryCard = ({ data }) => (
  <Card
    height={296}
    width={296}
    sx={{
      boxShadow: 'rgba(0, 0, 0, 0.08) 0px 4px 8px 0px;',
      borderRadius: '4px',
      position: 'relative',
      '&:hover': {
        boxShadow: ' rgba(0, 0, 0, 0.08) 0px 8px 18px 0px',
      },
    }}
    mx={3}
    my={7}
  >
    <Flex flexDirection="column" height="100%">
      <Box height="50%" maxHeight="50%" bg="gray">
        <Box
          width={1}
          sx={{
            backgroundImage: `url(${(data && data.images && data.images[0] && data.images[0].url) || ''})`,
            backgroundSize: 'cover',
            height: '100%',
          }}
        />
      </Box>
      <Flex height="50%" flexDirection="column" sx={{ position: 'relative' }} p={5} pb={3}>
        <Flex
          sx={{
            borderRadius: '50%',
            border: '1px solid #E1E1E1',
          }}
          bg="white"
          justifyContent="center"
          alignItems="center"
          width={42}
          height={42}
          mt={-41}
        >
          <Icon name={(data && data.region && data.region.toLowerCase()) || ''} width="24px" />
        </Flex>
        <Flex flexDirection="column" height="100%" justifyContent="space-between">
          <Text variant="heading6" as="h6" mt={1} lineHeight={1.5}>
            {data.title}
          </Text>
          <Text variant="paragraph" fontSize={[1, 2]}>
            {_truncate(data.synopsis, { length: 75 }) ||
              _truncate(
                data.synopsis || (data.copy && data.copy.replace(/<[^>]*>?/gm, '')) || 'No description available',
                {
                  length: 75,
                }
              )}
          </Text>
          <Link href={`/wiki/${data.region}/${data.slug}`}>
            <Text
              variant="paragraph"
              sx={{
                cursor: 'pointer',
                '&:hover': {
                  opacity: 0.7,
                },
              }}
              textAlign="right"
              color="brandRed"
              fontWeight="600"
            >{`View Entry >`}</Text>
          </Link>
        </Flex>
      </Flex>
    </Flex>
  </Card>
);

export default RegionEntryCard;
