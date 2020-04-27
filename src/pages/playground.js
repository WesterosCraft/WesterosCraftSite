import React from 'react';

import { Box, Text, Flex } from 'rebass';
import { Button } from '../components/atoms/button';
import { BsTriangleFill } from 'react-icons/bs';
import { ServerStatus } from '../components/atoms/serverStatus/serverStatus';

// design ideas

// https://codepen.io/havardob/pen/gOamzGq

//buttons
// https://codepen.io/kathykato/pen/gOOjgmP - meh
// https://codepen.io/b1tn3r/pen/YjOzRv - meh
// https://codepen.io/Zeindelf/pen/vZbyEg - hmm
// https://codepen.io/rauldronca/pen/Pzrgzp
// https://codepen.io/MikeMcChillin/pen/noJwe
// https://codepen.io/ReGGae/pen/qKwKmz
// https://codepen.io/veronicadev/pen/GyGLyN

//outline styles
// https://codepen.io/ananyaneogi/pen/NZmLQQ

//accordion (div with the border on the left)
// https://vectorly.team/

const PlaygroundPage = () => (
  <Flex my={200} width={1} flexDirection="column" justifyContent="center" alignItems="center">
    <Box width={300} height={300} sx={{ boxShadow: 'inset 0 0 0 4px #000, inset -4px -4px 0 6px #CCC' }}>
      <Text variant="heading4">TEST</Text>
    </Box>
    <Box>
      <Button variant="red" mt={9} as="div">
        Get the Launcher
      </Button>
      <Button variant="white" mt={9} as="div">
        <BsTriangleFill
          size="16px"
          style={{ transform: 'rotate(90deg)', marginRight: '6px', marginTop: '-1px', marginBottom: '-2px' }}
          color="#333333"
        />
        Explore the Wiki
      </Button>
    </Box>
    <Box my={200}>
      <ServerStatus />
    </Box>
  </Flex>
);

export default PlaygroundPage;
