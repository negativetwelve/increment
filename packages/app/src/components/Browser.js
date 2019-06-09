// Libraries
import React from 'react';

// App
import App from './App';

const Browser = ({client, children}) => (
  <App client={client}>
    {children}
  </App>
);

export default Browser;
