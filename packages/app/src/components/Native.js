// Libraries
import React from 'react';

// App
import App from './App';

const Native = ({client, children}) => (
  <App client={client}>
    {children}
  </App>
);

export default Native;
