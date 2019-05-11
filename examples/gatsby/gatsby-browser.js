// Libraries
import React from 'react';
import {Browser} from '@increment/app';

// App
import {client} from './src/config';

export const wrapRootElement = ({element}) => (
  <Browser client={client}>
    {element}
  </Browser>
);
