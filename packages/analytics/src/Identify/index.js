// Libraries
import React from 'react';
import {Lifecycle} from '@increment/ui/components';

// Components
import Analytics from '../Analytics';

const Identify = ({viewer, children}) => (
  <Analytics>
    {({analytics}) => (
      <Lifecycle
        onMount={() => analytics.identify(viewer)}
        children={children}
      />
    )}
  </Analytics>
);

export default Identify;
