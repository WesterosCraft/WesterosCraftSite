import React from 'react';
import { Box, Text } from 'rebass';
import styled from '@emotion/styled';

const ProgressUI = styled(Box)`
  position: relative;
  display: block;
  max-width: 100%;
  border: none;
  background: rgba(0, 0, 0, 0.1);
  padding: 0;
  border-radius: 4px;
  width: 100%;
`;

const Bar = styled(Box)`
  height: 1.75em;
  display: block;
  line-height: 1;
  position: relative;
  width: ${({ progress }) => `${progress}%`};
  min-width: 2em;
  border-radius: 4px;
  transition: width 0.1s ease, background-color 0.1s ease;
`;

const BarText = styled(Text)`
  white-space: nowrap;
  position: absolute;
  width: auto;
  top: 50%;
  right: 0.5em;
  left: auto;
  bottom: auto;
  text-shadow: none;
  margin-top: -0.5em;
  text-align: left;
`;

const ProgressBar = ({ progress, label }) => (
  <>
    <ProgressUI className="progress-bar">
      <Bar progress={progress} bg="brandRed">
        <BarText fontSize={[1, 2]} color="white">
          {progress}%
        </BarText>
      </Bar>
    </ProgressUI>
    {label && (
      <Text textAlign="center" mt={3} variant="heading6">
        {label}
      </Text>
    )}
  </>
);

export default ProgressBar;
