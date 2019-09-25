import React from 'react';
import { Flex } from 'rebass';

const Tab = ({ onClick, activeTab, label }) => {
  const setActiveTab = () => {
    onClick(label);
  };

  return (
    <Flex
      className="tab"
      justifyContent="center"
      alignItems="center"
      width={1}
      height="48px"
      onClick={setActiveTab}
      bg={activeTab === label ? 'white' : '#FAFAFE'}
    >
      O
    </Flex>
  );
};

export default Tab;
