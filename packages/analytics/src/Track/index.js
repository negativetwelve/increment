// Libraries
import React from 'react';

// Components
import Analytics from '../Analytics';

const Track = ({children}) => (
  <Analytics>
    {({analytics}) => children({track: analytics.track})}
  </Analytics>
);

export default Track;
