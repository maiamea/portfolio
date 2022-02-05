import React from 'react';
import { Timeline } from 'react-twitter-widgets';

const TwitterTimelineComponent = () => {
  return (
    <Timeline
      dataSource={{
        sourceType: 'profile',
        screenName: 'maiamea'
      }}
      options={{
        height: '800',
        width: '500'
      }}
    />
  )
}

export default TwitterTimelineComponent