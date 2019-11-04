// Libraries
import React from 'react';
import {Lifecycle} from '@increment/components';

// Components
import Track from '../Track';

// NOTE(mark): Must use the `path` as the `key` to trigger new components to
// mount when pages change.
const Pageview = ({name, path, children}) => (
  <Track key={path}>
    {({track}) => (
      <Lifecycle
        onMount={() => {
          // TODO(mark): Log the `title` as well.
          const event = `Viewed ${name} Page`;
          const type = 'Pageview';
          const payload = {'Page Name': name};

          // TODO(mark): We need to send the page view on the next tick so that
          // it is always called after 'identify'.
          setTimeout(() => track({event, type, payload}), 0);
        }}
        children={children}
      />
    )}
  </Track>
);

export default Pageview;
