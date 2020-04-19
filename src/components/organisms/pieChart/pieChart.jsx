import React from 'react';
import { ResponsivePie } from '@nivo/pie';

const piedata = [
  {
    id: 'php',
    label: 'php',
    value: 112,
    color: 'hsl(347, 70%, 50%)',
  },
  {
    id: 'ruby',
    label: 'ruby',
    value: 438,
    color: 'hsl(272, 70%, 50%)',
  },
  {
    id: 'scala',
    label: 'scala',
    value: 106,
    color: 'hsl(66, 70%, 50%)',
  },
  {
    id: 'rust',
    label: 'rust',
    value: 40,
    color: 'hsl(68, 70%, 50%)',
  },
  {
    id: 'go',
    label: 'go',
    value: 377,
    color: 'hsl(111, 70%, 50%)',
  },
];

export const PieChart = ({ data /* see data tab */ }) => (
  <ResponsivePie
    data={piedata}
    margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
    innerRadius={0.75}
    padAngle={2}
    cornerRadius={4}
    colors={{ scheme: 'nivo' }}
    borderWidth={1}
    borderColor={{ from: 'color', modifiers: [['opacity', '0.2']] }}
    radialLabelsSkipAngle={0}
    radialLabelsTextXOffset={6}
    radialLabelsTextColor="#333333"
    radialLabelsLinkOffset={0}
    radialLabelsLinkDiagonalLength={16}
    radialLabelsLinkHorizontalLength={24}
    radialLabelsLinkStrokeWidth={1}
    radialLabelsLinkColor={{ from: 'color', modifiers: [] }}
    slicesLabelsSkipAngle={10}
    slicesLabelsTextColor="#333333"
    animate={true}
    motionStiffness={90}
    motionDamping={15}
    defs={[
      {
        id: 'dots',
        type: 'patternDots',
        background: 'inherit',
        color: 'rgba(255, 255, 255, 0.3)',
        size: 4,
        padding: 1,
        stagger: true,
      },
      {
        id: 'lines',
        type: 'patternLines',
        background: 'inherit',
        color: 'rgba(255, 255, 255, 0.3)',
        rotation: -45,
        lineWidth: 6,
        spacing: 10,
      },
    ]}
    fill={[
      {
        match: {
          id: 'ruby',
        },
        id: 'dots',
      },
      {
        match: {
          id: 'c',
        },
        id: 'dots',
      },
      {
        match: {
          id: 'go',
        },
        id: 'dots',
      },
      {
        match: {
          id: 'python',
        },
        id: 'dots',
      },
      {
        match: {
          id: 'scala',
        },
        id: 'lines',
      },
      {
        match: {
          id: 'lisp',
        },
        id: 'lines',
      },
      {
        match: {
          id: 'elixir',
        },
        id: 'lines',
      },
      {
        match: {
          id: 'javascript',
        },
        id: 'lines',
      },
    ]}
    legends={[
      {
        anchor: 'bottom',
        direction: 'row',
        translateY: 56,
        itemWidth: 100,
        itemHeight: 18,
        itemTextColor: '#999',
        symbolSize: 18,
        symbolShape: 'circle',
        effects: [
          {
            on: 'hover',
            style: {
              itemTextColor: '#000',
            },
          },
        ],
      },
    ]}
  />
);
