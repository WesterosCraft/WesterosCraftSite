import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import navigationQuery from '../../../queries/navigation.graphql';
import Navigation from '../../organisms/navigation/navigation';

const PageWrapper = ({ children }) => {
  const { loading, data } = useQuery(navigationQuery);
  const navData = data.allNavigations.edges[0].node;

  if (loading) return <h1> Loading... </h1>;

  return (
    <div>
      <Navigation nav={navData} />
      {children}
    </div>
  );
};

export default PageWrapper;
