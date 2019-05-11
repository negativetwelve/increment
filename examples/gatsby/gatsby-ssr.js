// Libraries
import '@increment/app/server';
import React from 'react';
import {Server} from '@increment/app';

// App
import {client} from './src/config';

export const wrapPageElement = ({element, location}) => (
  <Server
    client={client}
    location={location}>
    {element}
  </Server>
);
