import React from 'react';

const Destination = () => (
  <div>
    <p>hello</p>
  </div>
);

Destination.getInitialProps = async ({ query }) => {
  console.log('QUERY: ', query);
  return query;
};

export default Destination;
