import React from 'react';

import { Box, Text, Flex } from 'rebass';

// design ideas

// https://codepen.io/havardob/pen/gOamzGq

//inputs
// https://codepen.io/havardob/pen/GbrQob

//buttons
// https://codepen.io/kathykato/pen/gOOjgmP
// https://codepen.io/b1tn3r/pen/YjOzRv
// https://codepen.io/Zeindelf/pen/vZbyEg
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
  </Flex>
);

export default PlaygroundPage;
