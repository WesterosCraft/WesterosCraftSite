import React from 'react';
import { Flex, Box } from 'rebass';
import ProgressBar from '../../atoms/progressBar/progressBar';
import Stat from '../../atoms/stat/stat';

const StatsBar = ({ data }) => (
  <Flex width={1} flexDirection="column">
    <Box maxWidth={1024} width="100%" mx="auto">
      <ProgressBar progress={60} label="Total Project Completion" />
    </Box>
    <Flex flexDirection="row" justifyContent="space-evenly" maxWidth={1024} mx="auto" width={1} my={80} flexWrap="wrap">
      <Stat stat={data.length} label="Total Projects" />
      <Stat
        stat={data.reduce((acc, cur) => (cur.locationStatus === 'completed' ? acc + 1 : acc), 0)}
        label="Completed"
        color="success"
      />
      <Stat
        stat={data.reduce((acc, cur) => (cur.locationStatus === 'inProgress' ? acc + 1 : acc), 0)}
        label="In Progress"
        color="warning"
      />
      <Stat
        stat={data.reduce((acc, cur) => (cur.locationStatus === 'orphaned' ? acc + 1 : acc), 0)}
        label="Orphaned"
        color="orphaned"
      />
      <Stat
        stat={data.reduce((acc, cur) => (cur.locationStatus === 'notStarted' ? acc + 1 : acc), 0)}
        label="Not Started"
        color="gray2"
      />
    </Flex>
  </Flex>
);

export default StatsBar;
