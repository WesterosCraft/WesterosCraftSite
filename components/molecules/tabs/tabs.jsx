import React, { useState } from 'react';
import { Flex } from 'rebass';
import Tab from '../../atoms/tab/tab';
import { StyledTabs } from './styledTabs';

const Tabs = ({ children }) => {
  const [activeTab, setActiveTab] = useState('All Projects');

  const onClickTabItem = tab => {
    setActiveTab(tab);
  };

  const regions = [
    'All Projects',
    'Dorne',
    'Riverlands',
    'The Wall',
    'The North',
    'The Vale',
    'Iron Islands',
    'The Westerlands',
    'The Crownlands',
    'The Stormlands',
    'The Reach',
    'Beyond the Wall',
  ];

  return (
    <StyledTabs flexDirection="row" width={1} justifyContent="space-around">
      {regions.map(region => (
        <Tab label={region} key={region} activeTab={activeTab} onClick={onClickTabItem} />
      ))}
    </StyledTabs>
  );
};

export default Tabs;
