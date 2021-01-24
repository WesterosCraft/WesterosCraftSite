import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { Box } from 'rebass';
import { configProps } from '../../../utils/helpers';
import { Redactor } from '../../atoms/redactor';

export const Timeline = ({ data }) => {
  return (
    <Box
      className="timeline"
      {...(data.spacings && data.spacings.length && configProps(data.spacings[0]))}
      bg="gray.400">
      <VerticalTimeline>
        {data.children.map((child, i) => (
          <VerticalTimelineElement
            key={i}
            className="vertical-timeline-element"
            contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
            date="2011 - present"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}>
            <Redactor dangerouslySetInnerHTML={{ __html: child.copy }} />
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </Box>
  );
};
