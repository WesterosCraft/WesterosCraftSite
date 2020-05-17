import React from 'react';
import { Progress } from 'react-sweet-progress';
import 'react-sweet-progress/lib/style.css';
import { Box } from 'rebass';

export const Gauge = () => {
  return (
    <Box className="gauge-chart">
      <Progress type="circle" percent={69} width={250} />
    </Box>
  );
};
