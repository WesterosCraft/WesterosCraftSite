import React from 'react';
import { Flex, Box } from 'rebass';
import ProgressBar from '../../atoms/progressBar/progressBar';
import Stat from '../../atoms/stat/stat';

const StatsBar = ({ data }) => {
  console.log('data: ', data);

  return (
    <Flex width={1} flexDirection="column">
      <Box maxWidth={1024} width="100%" mx="auto">
        <ProgressBar progress={60} />
      </Box>
      <Flex flexDirection="row" justifyContent="center">
        <Stat stat={data.length} label="Total Projects" />
        <Stat
          stat={data.reduce((acc, cur) => (cur.locationStatus === 'completed' ? acc + 1 : acc), 0)}
          label="Total Completed"
        />
        <Stat />
        <Stat />
        <Stat />
      </Flex>
    </Flex>
  );
};

export default StatsBar;
