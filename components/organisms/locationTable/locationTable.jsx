import React from 'react';
import { Text, Box } from 'rebass';
import { RichText, Date } from 'prismic-reactjs';
import TableTitle from '../../atoms/tableTitle/tableTitle';
import { statusColor } from '../../../utility/helpers';
import ProgressTable from '../progressTable/progressTable';
import Tabs from '../../molecules/tabs/tabs';

const LocationTable = ({ pages }) => {
  return (
    <>
      <Tabs>
        <Box>hi</Box>
        <Box>hi</Box>
      </Tabs>
      <Box mt={200} width={1176} borderRadius="8px">
        <ProgressTable />
        <TableTitle />
        {pages.map((page, i) => (
          <Box
            key={RichText.asText(page.node.location_name)}
            textAlign="left"
            sx={{
              display: 'grid',
              gridTemplateColumns: '2fr 2fr 2fr 2fr 1fr 1fr',
              margin: '0 auto',
              height: 36,
              alignItems: 'center',
            }}
            bg={i % 2 === 0 ? 'white' : '#FAFAFC'}
          >
            <Text variant="progress" textAlign="left" pl={5}>
              {page.node.region}
            </Text>
            <Text variant="progress">{RichText.asText(page.node.location_name)}</Text>
            <Text variant="progress" color={statusColor(page.node.status)}>
              {page.node.status}
            </Text>
            <Text variant="progress">{page.node.type ? page.node.type : 'N/A'}</Text>
            <Text variant="progress">
              {page.node.date_started ? Date(page.node.date_started) : 'N/A'}
            </Text>
            <Text variant="progress">
              {page.node.date_completed ? Date(page.node.date_completed) : 'N/A'}
            </Text>
          </Box>
        ))}
      </Box>
    </>
  );
};

export default LocationTable;
