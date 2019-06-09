// Libraries
import React from 'react';

// App
import App from './App';

const Server = ({client, location, children}) => (
  <App client={client}>
    {children}
  </App>
);

export default Server;
