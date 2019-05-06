// Libraries
import React from 'react';
import {BrowserRouter} from 'react-router-dom';

// App
import App from './App';

const Browser = ({children}) => (
  <App>
    <BrowserRouter>
      {children}
    </BrowserRouter>
  </App>
);

export default Browser;
