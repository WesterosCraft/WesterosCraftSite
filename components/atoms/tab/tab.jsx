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
      style={{
        borderBottom: activeTab === label ? '1px solid white' : '1px solid #d4d4d5',
      }}
    >
      O
    </Flex>
  );
};

export default Tab;
