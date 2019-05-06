// Libraries
import React from 'react';
import {StaticRouter} from 'react-router-dom';

// App
import App from './App';

const Server = ({location, children}) => (
  <App>
    <StaticRouter location={location}>
      {children}
    </StaticRouter>
  </App>
);

export default Server;
