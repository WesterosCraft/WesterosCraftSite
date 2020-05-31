import React, { useMemo } from 'react';

import { graphql } from 'gatsby';
import { Heading, Flex, Text, Box } from 'rebass';
import { ProgressTable } from '../components/organisms/progressTable/progressTable';
import SEO from '../components/organisms/seo/seo';
import { Card } from '../components/atoms/card/card';
import { Progress } from 'react-sweet-progress';
import { useCountUp } from 'react-countup';
import { completionPercentage, getDestinationLevel, flatten } from '../utility/helpers';
import { useTheme } from 'emotion-theming';

import 'react-sweet-progress/lib/style.css';

const RegionProgress = ({ children, percent = 40, theme }) => (
  <Flex flexDirection={['column', 'row']} width={1} my={1}>
    <Text fontWeight="bold" fontFamily="heading" width={200}>
      {children || ''}
    </Text>
    <Progress percent={percent} theme={theme} />
  </Flex>
);

const ProgressPage = ({ data }) => {
  const theme = useTheme();

  const memoData = useMemo(() => flatten(data.craft.entries), [data.craft.entries]);
  const totalComplete = memoData.filter((item) => item.destinationStatus === 'completed');
  const totalInProgress = memoData.filter(
    (item) => item.destinationStatus === 'inProgress' || item.destinationStatus === 'redoInProgress',
  );
  const totalNotStarted = memoData.filter(
    (item) => item.destinationStatus === 'abandoned' || item.destinationStatus === 'notStarted',
  );

  // Overall percentage //
  const levelComplete = totalComplete.reduce((a, b) => {
    return a + getDestinationLevel(b.destinationLevel);
  }, 0);

  const levelInProgress = totalInProgress.reduce((a, b) => {
    return a + getDestinationLevel(b.destinationLevel);
  }, 0);

  const levelNotStarted = totalNotStarted.reduce((a, b) => {
    return a + getDestinationLevel(b.destinationLevel);
  }, 0);

  const regionLevelComplete = (region) =>
    totalComplete
      .filter((item) => item.region === region)
      .reduce((a, b) => {
        return a + getDestinationLevel(b.destinationLevel);
      }, 0);

  const regionLevelInProgress = (region) =>
    totalInProgress
      .filter((item) => item.region === region)
      .reduce((a, b) => {
        return a + getDestinationLevel(b.destinationLevel);
      }, 0);

  const regionLevelNotStarted = (region) =>
    totalNotStarted
      .filter((item) => item.region === region)
      .reduce((a, b) => {
        return a + getDestinationLevel(b.destinationLevel);
      }, 0);

  // Region percentages //

  const TOTAL_PERCENTAGE = completionPercentage(levelComplete, levelInProgress, levelNotStarted);
  const TOTAL_DORNE_PERCENTAGE = completionPercentage(
    regionLevelComplete('dorne'),
    regionLevelInProgress('dorne'),
    regionLevelNotStarted('dorne'),
  );
  const TOTAL_WESTERLANDS_PERCENTAGE = completionPercentage(
    regionLevelComplete('westerlands'),
    regionLevelInProgress('westerlands'),
    regionLevelNotStarted('westerlands'),
  );
  const TOTAL_CROWNLANDS_PERCENTAGE = completionPercentage(
    regionLevelComplete('crownlands'),
    regionLevelInProgress('crownlands'),
    regionLevelNotStarted('crownlands'),
  );
  const TOTAL_REACH_PERCENTAGE = completionPercentage(
    regionLevelComplete('reach'),
    regionLevelInProgress('reach'),
    regionLevelNotStarted('reach'),
  );
  const TOTAL_STORMLANDS_PERCENTAGE = completionPercentage(
    regionLevelComplete('stormlands'),
    regionLevelInProgress('stormlands'),
    regionLevelNotStarted('stormlands'),
  );
  const TOTAL_VALE_PERCENTAGE = completionPercentage(
    regionLevelComplete('vale'),
    regionLevelInProgress('vale'),
    regionLevelNotStarted('vale'),
  );
  const TOTAL_WALL_PERCENTAGE = completionPercentage(
    regionLevelComplete('theWall'),
    regionLevelInProgress('theWall'),
    regionLevelNotStarted('theWall'),
  );
  const TOTAL_NORTH_PERCENTAGE = completionPercentage(
    regionLevelComplete('north'),
    regionLevelInProgress('north'),
    regionLevelNotStarted('north'),
  );
  const TOTAL_BEYONDTHEWALL_PERCENTAGE = completionPercentage(
    regionLevelComplete('beyondTheWall'),
    regionLevelInProgress('beyondTheWall'),
    regionLevelNotStarted('beyondTheWall'),
  );
  const TOTAL_RIVERLANDS_PERCENTAGE = completionPercentage(
    regionLevelComplete('riverlands'),
    regionLevelInProgress('riverlands'),
    regionLevelNotStarted('riverlands'),
  );
  const TOTAL_IRONISLANDS_PERCENTAGE = completionPercentage(
    regionLevelComplete('ironIslands'),
    regionLevelInProgress('ironIslands'),
    regionLevelNotStarted('ironIslands'),
  );

  const { countUp } = useCountUp({ start: 0, end: TOTAL_PERCENTAGE, duration: 2.5 });

  const columns = useMemo(
    () => [
      {
        Header: () => <span style={{ margin: '0 auto' }}>Level</span>,

        accessor: 'destinationLevel',
        filterable: false,
        width: 64,
      },
      {
        Header: 'Destination',
        accessor: 'title',
        filterable: false,
      },
      {
        Header: 'Region',
        accessor: 'region',
        filterable: false,
      },
      {
        Header: 'Status',
        accessor: 'destinationStatus',
        filterable: true,
      },
      {
        Header: 'Type',
        accessor: 'destinationType',
        filterable: false,
      },
      {
        Header: 'House',
        accessor: 'house',
        filterable: false,
      },
      {
        Header: 'Warp',
        accessor: 'warp',
        filterable: false,
      },
    ],
    [],
  );

  return (
    <>
      <SEO
        title={data.craft.entry.pageTitle || data.craft.entry.title}
        description={data.craft.entry.pageDescription}
        image={data.craft.entry.pageEntry && data.craft.entry.pageImage[0].url}
      />
      <Flex px={5} flexDirection="column">
        <Heading variant="heading2" textAlign="center" mt={[12]} px={5}>
          {data.craft.entry.heading}
        </Heading>
        <Heading variant="heading4" textAlign="center" maxWidth={756} mx="auto" px={5} mt={4}>
          {data.craft.entry.subheading}
        </Heading>
        <Flex width={1} flexDirection={['column', null, 'row']} justifyContent="center" alignItems="center" mt={14}>
          <Progress
            symbolClassName="circle-progress-symbol"
            type="circle"
            percent={countUp}
            width={200}
            strokeWidth={8}
            theme={{
              error: {
                trailColor: '#efefef',
                color: theme.colors.error,
              },
              active: {
                trailColor: '#efefef',
                color: theme.colors.ironIslands,
              },
              success: {
                trailColor: '#efefef',
                color: theme.colors.success,
              },
            }}
          />
          <Text variant="heading4" fontFamily="heading" fontWeight="bold" mb={6} mt={[4, null, 0]} pl={[0, null, 6]}>
            Total Project Progress
          </Text>
        </Flex>
        <Flex flexDirection="row" flexWrap="wrap" mx="auto" width={1} justifyContent="center" mt={7}>
          <Card color={theme.colors.ironIslands}>
            <Text variant="heading3">{data.craft.entries.length}</Text>
            <Text>total projects</Text>
          </Card>
          <Card color={theme.colors.success}>
            <Text variant="heading3">{totalComplete.length}</Text>
            <Text>completed</Text>
          </Card>
          <Card color={theme.colors.pending}>
            <Text variant="heading3">{totalInProgress.length}</Text>
            <Text>in progress</Text>
          </Card>
          <Card color={theme.colors.error}>
            <Text variant="heading3">{totalNotStarted.length}</Text>
            <Text>not started</Text>
          </Card>
        </Flex>
        <Flex
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          width={1}
          my={10}
          maxWidth={1156}
          mx="auto"
        >
          <Box mt={6} width={1}>
            <RegionProgress
              percent={TOTAL_DORNE_PERCENTAGE}
              theme={{
                error: {
                  trailColor: '#efefef',
                  color: theme.colors.error,
                },
                active: {
                  trailColor: '#efefef',
                  color: theme.colors.dorne,
                },
                success: {
                  trailColor: '#efefef',
                  color: theme.colors.success,
                },
              }}
            >
              Dorne
            </RegionProgress>
            <RegionProgress
              percent={TOTAL_RIVERLANDS_PERCENTAGE}
              theme={{
                error: {
                  trailColor: '#efefef',
                  color: theme.colors.error,
                },
                active: {
                  trailColor: '#efefef',
                  color: theme.colors.riverlands,
                },
                success: {
                  trailColor: '#efefef',
                  color: theme.colors.success,
                },
              }}
            >
              Riverlands
            </RegionProgress>
            <RegionProgress
              percent={TOTAL_NORTH_PERCENTAGE}
              theme={{
                error: {
                  trailColor: '#efefef',
                  color: theme.colors.error,
                },
                active: {
                  trailColor: '#efefef',
                  color: theme.colors.north,
                },
                success: {
                  trailColor: '#efefef',
                  color: theme.colors.success,
                },
              }}
            >
              North
            </RegionProgress>
            <RegionProgress
              percent={TOTAL_VALE_PERCENTAGE}
              theme={{
                error: {
                  trailColor: '#efefef',
                  color: theme.colors.error,
                },
                active: {
                  trailColor: '#efefef',
                  color: theme.colors.vale,
                },
                success: {
                  trailColor: '#efefef',
                  color: theme.colors.success,
                },
              }}
            >
              Vale
            </RegionProgress>
            <RegionProgress
              percent={TOTAL_IRONISLANDS_PERCENTAGE}
              theme={{
                error: {
                  trailColor: '#efefef',
                  color: theme.colors.error,
                },
                active: {
                  trailColor: '#efefef',
                  color: theme.colors.ironIslands,
                },
                success: {
                  trailColor: '#efefef',
                  color: theme.colors.success,
                },
              }}
            >
              Iron Islands
            </RegionProgress>
            <RegionProgress
              percent={TOTAL_WESTERLANDS_PERCENTAGE}
              theme={{
                error: {
                  trailColor: '#efefef',
                  color: theme.colors.error,
                },
                active: {
                  trailColor: '#efefef',
                  color: theme.colors.westerlands,
                },
                success: {
                  trailColor: '#efefef',
                  color: theme.colors.success,
                },
              }}
            >
              Westerlands
            </RegionProgress>
            <RegionProgress
              percent={TOTAL_CROWNLANDS_PERCENTAGE}
              theme={{
                error: {
                  trailColor: '#efefef',
                  color: theme.colors.error,
                },
                active: {
                  trailColor: '#efefef',
                  color: theme.colors.crownlands,
                },
                success: {
                  trailColor: '#efefef',
                  color: theme.colors.success,
                },
              }}
            >
              Crownlands
            </RegionProgress>
            <RegionProgress
              percent={TOTAL_STORMLANDS_PERCENTAGE}
              theme={{
                error: {
                  trailColor: '#efefef',
                  color: theme.colors.error,
                },
                active: {
                  trailColor: '#efefef',
                  color: theme.colors.stormlands,
                },
                success: {
                  trailColor: '#efefef',
                  color: theme.colors.success,
                },
              }}
            >
              Stormlands
            </RegionProgress>
            <RegionProgress
              percent={TOTAL_REACH_PERCENTAGE}
              theme={{
                error: {
                  trailColor: '#efefef',
                  color: theme.colors.error,
                },
                active: {
                  trailColor: '#efefef',
                  color: theme.colors.reach,
                },
                success: {
                  trailColor: '#efefef',
                  color: theme.colors.success,
                },
              }}
            >
              Reach
            </RegionProgress>
            <RegionProgress
              percent={TOTAL_WALL_PERCENTAGE}
              theme={{
                error: {
                  trailColor: '#efefef',
                  color: theme.colors.error,
                },
                active: {
                  trailColor: '#efefef',
                  color: theme.colors.theWall,
                },
                success: {
                  trailColor: '#efefef',
                  color: theme.colors.success,
                },
              }}
            >
              The Wall
            </RegionProgress>
            <RegionProgress
              percent={TOTAL_BEYONDTHEWALL_PERCENTAGE}
              theme={{
                error: {
                  trailColor: '#efefef',
                  color: theme.colors.error,
                },
                active: {
                  trailColor: '#efefef',
                  color: theme.colors.beyondTheWall,
                },
                success: {
                  trailColor: '#efefef',
                  color: theme.colors.success,
                },
              }}
            >
              Beyond the Wall
            </RegionProgress>
          </Box>
        </Flex>

        <ProgressTable columns={columns} data={memoData} />
      </Flex>
      <Box mb={[72, 140]} />
    </>
  );
};

export const pageQuery = graphql`
  query progressQuery {
    craft {
      entry(section: "progress") {
        title
        ... on Craft_progress_progress_Entry {
          heading
          subheading
          pageTitle
          pageDescription
          pageImage {
            url
          }
        }
      }
      entries(site: "westeroscraft", section: "wiki", type: "wikiDestination", orderBy: "title") {
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
              destinationLevel
            }
          }
        }
      }
    }
  }
`;

export default ProgressPage;
