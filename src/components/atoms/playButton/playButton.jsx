import React from 'react';
import { Box } from 'rebass';
import { motion } from 'framer-motion';
import { PlayArrow } from './styledPlayButton';

const PlayButton = ({ display }) => (
  <motion.div
    style={{
      display: display ? 'none' : 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'absolute',
      zIndex: 1000,
      top: 0,
      bottom: 0,
      margin: 'auto',
      width: '100%',
    }}
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
  >
    <Box
      bg="white"
      width={['65px', '120px']}
      height={['65px', '120px']}
      opacity={0.5}
      sx={{
        borderRadius: '100%',
        cursor: 'pointer',
      }}
    />
    <PlayArrow xmlns="http://www.w3.org/2000/svg" viewBox="0 0 124.512 124.512">
      <path d="M113.956 57.006l-97.4-56.2c-4-2.3-9 .6-9 5.2v112.5c0 4.6 5 7.5 9 5.2l97.4-56.2c4-2.401 4-8.2 0-10.5z" />
    </PlayArrow>
  </motion.div>
);

export default PlayButton;
