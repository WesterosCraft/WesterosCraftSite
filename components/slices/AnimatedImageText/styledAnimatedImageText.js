import styled from '@emotion/styled';
import { motion } from 'framer-motion';

export const MotionImage = styled(motion.img)`
  position: absolute;
  left: 0;
  bottom: 0;
  overflow: hidden;
  width: 372px;
  height: 482px;
  opacity: 0;

  @media screen and (min-width: ${props => props.theme.breakpoints[0]}) {
    width: 458px;
  }
`;

export const MotionImageContainer = styled(motion.div)`
  position: absolute;
  left: 0;
  bottom: 0;
  overflow: hidden;
  width: 372px;

  opacity: 0;

  @media screen and (min-width: ${props => props.theme.breakpoints[0]}) {
    width: 458px;
  }
`;
