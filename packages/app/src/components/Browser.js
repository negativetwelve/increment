// Libraries
import React from 'react';
import {BrowserRouter} from 'react-router-dom';

// App
import App from './App';

const Browser = ({client, children}) => (
  <App client={client}>
    <BrowserRouter>
      {children}
    </BrowserRouter>
  </App>
);

export default Browser;
