import React, { useState } from 'react';
import { Text, Flex, Box } from 'rebass';
import { AiFillCaretDown } from 'react-icons/ai';
import { projectTypeLabel } from '../../../utility/helpers';

const CardGroup = ({ children, label }) => {
  const [toggleGroup, setToggleGroup] = useState(true);
  return (
    <Box className={`${label}-group`}>
      <Flex
        flexDirection="column"
        width={1}
        sx={{ cursor: 'pointer' }}
        onClick={() => {
          setToggleGroup(!toggleGroup);
        }}
        mt={8}
      >
        <Flex px={3} flexDirection="row" width={1} justifyContent="space-between">
          <Text variant="heading5" fontWeight={500}>
            {projectTypeLabel(label)}
          </Text>
          <AiFillCaretDown
            size={20}
            style={{
              transform: toggleGroup ? 'rotate(0deg)' : 'rotate(180deg)',
            }}
          />
        </Flex>
        <Box sx={{ borderBottom: '2px solid #3282B8' }} m={3} />
      </Flex>
      {toggleGroup && (
        <Flex flexDirection="row" flexWrap="wrap">
          {children}
        </Flex>
      )}
    </Box>
  );
};

export default CardGroup;
