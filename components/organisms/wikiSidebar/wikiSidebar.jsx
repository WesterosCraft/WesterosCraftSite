import React from 'react';
import { Flex, Box, Text } from 'rebass';
import styled from '@emotion/styled';
import Link from 'next/link';
import SidebarGroup from '../../atoms/sidebarGroup/sidebarGroup';

const ColumnLabel = styled(Text)`
  text-transform: uppercase;
  margin-top: 24px;
  color: #c4c4c4;
`;

const regions = [
  'Crownlands',
  'Dorne',
  'Reach',
  'Stormlands',
  'Westerlands',
  'Iron Islands',
  'Vale',
  'Riverlands',
  'The North',
  'The Wall',
  'Beyond the Wall',
];

const WikiSidebar = () => {
  return (
    <Flex as="aside" className="wiki-nav" width={[250, 300]} pr={5}>
      <Box
        width={1}
        sx={{
          position: 'sticky',
          top: '0.75rem',
          height: 'calc(100vh - 0.75rem)',
          paddingBottom: '2rem',
          overflowY: 'auto',
        }}
      >
        <Flex flexDirection="column" pl={[10]}>
          <Box>
            <Link href="/wiki">
              <Text fontSize={['32px']} fontWeight="600" sx={{ cursor: 'pointer' }}>
                Wiki
              </Text>
            </Link>
            <ColumnLabel variant="progress">Explore</ColumnLabel>
            <SidebarGroup label="Regions" open>
              {regions.map(region => (
                <Link href={`/wiki/${region.replace(/\s+/g, '-').toLowerCase()}`} key={region}>
                  <Text
                    fontSize="14px"
                    lineHeight={2.5}
                    fontWeight="500"
                    sx={{
                      cursor: 'pointer',
                      '&:hover': {
                        color: 'brandRed',
                        opacity: 0.7,
                      },
                    }}
                  >
                    {region}
                  </Text>
                </Link>
              ))}
            </SidebarGroup>
            <ColumnLabel variant="progress">Learn</ColumnLabel>
            <SidebarGroup label="Guides">
              <Text>One guide</Text>
              <Text>Two guide</Text>
              <Text>Three guide</Text>
              <Text>Four guide</Text>
            </SidebarGroup>
          </Box>
          <Box />
        </Flex>
      </Box>
    </Flex>
  );
};

export default WikiSidebar;
