/* eslint-disable react/no-array-index-key */
import React from 'react';
import TextSlice from './Text/text';

const SliceZone = ({ slices }) => {
  const module = slices.map((slice, index) => {
    switch (slice.slice_type) {
      case 'text':
        return <TextSlice input={slice} />;
      default:
        return null;
    }
  });
  return <>{module}</>;
};

export default SliceZone;
