import styled from '@emotion/styled';
import { Box } from 'rebass';
import { flexbox } from 'styled-system';
import { motion } from 'framer-motion';

export const Column = styled(Box)`
  ${flexbox}
`;

export const MotionImg = styled(motion.img)`
  position: absolute;
  left: 0;
  bottom: 0;
  overflow: hidden;
  width: 458px;
  height: 482px;
  opacity: 0;
`;
