import React from 'react';
import Dorne from './icons/dorne';
import Riverlands from './icons/riverlands';
import Wall from './icons/wall';
import North from './icons/north';
import Vale from './icons/vale';
import IronIslands from './icons/ironislands';
import Westerlands from './icons/westerlands';
import Crownlands from './icons/crownlands';
import Stormlands from './icons/stormlands';
import Reach from './icons/reach';
import BeyondTheWall from './icons/beyondthewall';

const Icon = props => {
  switch (props.name) {
    case 'dorne':
      return <Dorne {...props} />;
    case 'riverlands':
      return <Riverlands {...props} />;
    case 'thewall':
    case 'wall':
      return <Wall {...props} />;
    case 'north':
      return <North {...props} />;
    case 'vale':
      return <Vale {...props} />;
    case 'ironislands':
      return <IronIslands {...props} />;
    case 'westerlands':
      return <Westerlands {...props} />;
    case 'crownlands':
      return <Crownlands {...props} />;
    case 'stormlands':
      return <Stormlands {...props} />;
    case 'reach':
      return <Reach {...props} />;
    case 'beyondthewall':
      return <BeyondTheWall {...props} />;
    default:
      return <div />;
  }
};
export default Icon;
