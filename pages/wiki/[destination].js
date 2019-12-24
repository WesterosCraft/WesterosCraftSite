import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import destinationQuery from '../../queries/destination.graphql';
import Loader from '../../components/atoms/loader/loader';

const Destination = ({ destination }) => {
  const { loading, error, data } = useQuery(destinationQuery, {
    variables: {
      destination,
    },
  });

  console.log(data);

  if (error) {
    console.log(error);
  }

  if (loading) return <Loader />;

  return (
    <div>
      <p>{data.entries[0].title}</p>
    </div>
  );
};

Destination.getInitialProps = async ({ query }) => {
  return query;
};

export default Destination;
