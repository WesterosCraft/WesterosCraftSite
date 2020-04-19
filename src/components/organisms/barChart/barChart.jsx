import React from 'react';

import { ResponsiveBar } from '@nivo/bar';
// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
export const BarChart = ({
  data = [
    {
      country: 'AD',
      'hot dog': 152,
      'hot dogColor': 'hsl(280, 70%, 50%)',
      burger: 106,
      burgerColor: 'hsl(89, 70%, 50%)',
      sandwich: 112,
      sandwichColor: 'hsl(32, 70%, 50%)',
      kebab: 34,
      kebabColor: 'hsl(277, 70%, 50%)',
      fries: 125,
      friesColor: 'hsl(327, 70%, 50%)',
      donut: 145,
      donutColor: 'hsl(51, 70%, 50%)',
    },
    {
      country: 'AE',
      'hot dog': 103,
      'hot dogColor': 'hsl(168, 70%, 50%)',
      burger: 52,
      burgerColor: 'hsl(339, 70%, 50%)',
      sandwich: 163,
      sandwichColor: 'hsl(159, 70%, 50%)',
      kebab: 171,
      kebabColor: 'hsl(173, 70%, 50%)',
      fries: 195,
      friesColor: 'hsl(300, 70%, 50%)',
      donut: 3,
      donutColor: 'hsl(263, 70%, 50%)',
    },
    {
      country: 'AF',
      'hot dog': 146,
      'hot dogColor': 'hsl(174, 70%, 50%)',
      burger: 50,
      burgerColor: 'hsl(227, 70%, 50%)',
      sandwich: 46,
      sandwichColor: 'hsl(307, 70%, 50%)',
      kebab: 128,
      kebabColor: 'hsl(32, 70%, 50%)',
      fries: 54,
      friesColor: 'hsl(265, 70%, 50%)',
      donut: 133,
      donutColor: 'hsl(242, 70%, 50%)',
    },
    {
      country: 'AG',
      'hot dog': 138,
      'hot dogColor': 'hsl(91, 70%, 50%)',
      burger: 147,
      burgerColor: 'hsl(348, 70%, 50%)',
      sandwich: 160,
      sandwichColor: 'hsl(11, 70%, 50%)',
      kebab: 121,
      kebabColor: 'hsl(271, 70%, 50%)',
      fries: 69,
      friesColor: 'hsl(51, 70%, 50%)',
      donut: 85,
      donutColor: 'hsl(88, 70%, 50%)',
    },
    {
      country: 'AI',
      'hot dog': 37,
      'hot dogColor': 'hsl(42, 70%, 50%)',
      burger: 21,
      burgerColor: 'hsl(275, 70%, 50%)',
      sandwich: 9,
      sandwichColor: 'hsl(155, 70%, 50%)',
      kebab: 0,
      kebabColor: 'hsl(74, 70%, 50%)',
      fries: 46,
      friesColor: 'hsl(245, 70%, 50%)',
      donut: 156,
      donutColor: 'hsl(184, 70%, 50%)',
    },
    {
      country: 'AL',
      'hot dog': 180,
      'hot dogColor': 'hsl(293, 70%, 50%)',
      burger: 33,
      burgerColor: 'hsl(307, 70%, 50%)',
      sandwich: 118,
      sandwichColor: 'hsl(160, 70%, 50%)',
      kebab: 52,
      kebabColor: 'hsl(359, 70%, 50%)',
      fries: 118,
      friesColor: 'hsl(215, 70%, 50%)',
      donut: 176,
      donutColor: 'hsl(348, 70%, 50%)',
    },
    {
      country: 'AM',
      'hot dog': 69,
      'hot dogColor': 'hsl(286, 70%, 50%)',
      burger: 114,
      burgerColor: 'hsl(208, 70%, 50%)',
      sandwich: 91,
      sandwichColor: 'hsl(183, 70%, 50%)',
      kebab: 168,
      kebabColor: 'hsl(150, 70%, 50%)',
      fries: 75,
      friesColor: 'hsl(164, 70%, 50%)',
      donut: 17,
      donutColor: 'hsl(243, 70%, 50%)',
    },
  ],
}) => (
  <ResponsiveBar
    data={data}
    keys={['hot dog', 'burger', 'sandwich', 'kebab', 'fries', 'donut']}
    indexBy="country"
    margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
    padding={0.3}
    layout="horizontal"
    colors={{ scheme: 'nivo' }}
    defs={[
      {
        id: 'dots',
        type: 'patternDots',
        background: 'inherit',
        color: '#38bcb2',
        size: 4,
        padding: 1,
        stagger: true,
      },
      {
        id: 'lines',
        type: 'patternLines',
        background: 'inherit',
        color: '#eed312',
        rotation: -45,
        lineWidth: 6,
        spacing: 10,
      },
    ]}
    fill={[
      {
        match: {
          id: 'fries',
        },
        id: 'dots',
      },
      {
        match: {
          id: 'sandwich',
        },
        id: 'lines',
      },
    ]}
    borderColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
    axisTop={null}
    axisRight={null}
    axisBottom={{
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: 'country',
      legendPosition: 'middle',
      legendOffset: 32,
    }}
    axisLeft={{
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: 'food',
      legendPosition: 'middle',
      legendOffset: -40,
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
