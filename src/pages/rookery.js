import React from 'react';
import { Heading } from 'rebass';

const RookeryPage = ({ data }) => {
  return (
    <>
      <Heading variant="heading2" textAlign="center" mt={[12]}>
        The Rookery
      </Heading>
      <Heading>
        The WesterosCraft newsletter aiming to bring you up to date on all the latest community happenings
      </Heading>
      {/* <SliceZone slices={data.craft.entry.pageSlices} /> */}
    </>
  );
};

export default RookeryPage;
