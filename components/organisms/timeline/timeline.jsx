import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { useTheme } from 'emotion-theming';
import Icon from '../../atoms/icon/icon';

const Timeline = () => {
  const theme = useTheme();
  return (
    <VerticalTimeline>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{
          background: `${theme.colors.white}`,
          color: '#000',
          boxShadow: '0 8px 30px rgba(0,0,0,0.12)',
          border: '1px solid rgb(240,240,240)',
        }}
        contentArrowStyle={{ borderRight: `7px solid ${theme.colors.white}` }}
        date="2011 - present"
        iconStyle={{ background: `${theme.colors.brandBlue}`, color: '#fff' }}
        icon={<Icon name="dorne" color="white" />}
      >
        <h3 className="vertical-timeline-element-title">Creative Director</h3>
        <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
        <p>Creative Direction, User Experience, Visual Design, Project Management, Team Leading</p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{
          background: `${theme.colors.white}`,
          color: '#000',
          boxShadow: '0 8px 30px rgba(0,0,0,0.12)',
          border: '1px solid rgb(240,240,240)',
        }}
        contentArrowStyle={{ borderRight: `7px solid ${theme.colors.white}` }}
        date="2011 - present"
        iconStyle={{ background: `${theme.colors.brandRed}`, color: '#fff' }}
        icon={<Icon name="dorne" color="white" />}
      >
        <h3 className="vertical-timeline-element-title">Creative Director</h3>
        <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
        <p>Creative Direction, User Experience, Visual Design, Project Management, Team Leading</p>
      </VerticalTimelineElement>
    </VerticalTimeline>
  );
};

export default Timeline;
