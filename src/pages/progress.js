import React, { useMemo } from 'react';

import { graphql } from 'gatsby';
import { Heading, Box } from 'rebass';
import { ProgressTable } from '../components/organisms/progressTable/progressTable';
import _merge from 'lodash/merge';
import { PieChart } from '../components/organisms/pieChart/pieChart';

const ProgressPage = ({ data }) => {
  const flatten = (data) =>
    data.reduce((arr, elem) => {
      if (elem.projectDetails && elem.projectDetails.length) {
        arr.push(_merge(elem, elem.projectDetails[0]));
        delete elem.projectDetails;
      }
      return arr;
    }, []);

  const memoData = useMemo(() => data && flatten(data.craft.entries), [data]);

  return (
    <>
      <Heading variant="heading2" textAlign="center" mt={[12]}>
        progress page
      </Heading>
      <Box sx={{ height: 500 }}>
        <PieChart />
      </Box>
      <ProgressTable data={memoData} />
    </>
  );
};

export const pageQuery = graphql`
  query progressQuery {
    craft {
      entries(site: "westeroscraft", section: "wiki", type: "wikiDestination") {
        title
        slug
        ... on Craft_wiki_wikiDestination_Entry {
          projectDetails {
            ... on Craft_projectDetails_details_BlockType {
              house
              region
              destinationStatus
              destinationType
              warp
              redoAvailable
              serverBuild
            }
          }
        }
      }
    }
  }
`;

export default ProgressPage;
