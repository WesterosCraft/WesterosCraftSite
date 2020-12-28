import React from 'react';

import { ResponsiveBar } from '@nivo/bar';
// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.

const datat = [
  {
    region: 'Beyond the Wall',
    completed: 130,
    'not started': 50,
    'in progress': 200,
  },
  {
    region: 'Crownlands',
    completed: 130,
    'not started': 50,
    'in progress': 200,
  },
  {
    region: 'Dorne',
    completed: 130,
    'not started': 50,
    'in progress': 200,
  },
  {
    region: 'Iron Islands',
    completed: 130,
    'not started': 50,
    'in progress': 200,
  },
  {
    region: 'Reach',
    completed: 130,
    'not started': 50,
    'in progress': 200,
  },
  {
    region: 'Riverlands',
    completed: 130,
    'not started': 50,
    'in progress': 200,
  },
  {
    region: 'Stormlands',
    completed: 130,
    'not started': 50,
    'in progress': 200,
  },
  {
    region: 'The Wall',
    completed: 130,
    'not started': 50,
    'in progress': 200,
  },
  {
    region: 'Vale',
    completed: 130,
    'not started': 50,
    'in progress': 200,
  },
  {
    region: 'Westerlands',
    completed: 130,
    'not started': 50,
    'in progress': 200,
  },
];
export const BarChart = ({ data }) => (
  <ResponsiveBar
    data={datat}
    keys={['completed', 'in progress', 'not started']}
    indexBy="region"
    margin={{ top: 50, right: 130, bottom: 50, left: 90 }}
    padding={0.3}
    layout="horizontal"
    colors={{ scheme: 'accent' }}
    borderColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
    axisTop={null}
    axisRight={null}
    axisBottom={{
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: 'region',
      legendPosition: 'middle',
      legendOffset: 32,
    }}
    labelSkipWidth={12}
    labelSkipHeight={12}
    labelTextColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
    legends={[
      {
        dataFrom: 'keys',
        anchor: 'bottom-right',
        direction: 'column',
        justify: false,
        translateX: 120,
        translateY: 0,
        itemsSpacing: 2,
        itemWidth: 100,
        itemHeight: 20,
        itemDirection: 'left-to-right',
        itemOpacity: 0.85,
        symbolSize: 20,
        effects: [
          {
            on: 'hover',
            style: {
              itemOpacity: 1,
            },
          },
        ],
      },
    ]}
    animate={true}
    motionStiffness={90}
    motionDamping={15}
  />
);
