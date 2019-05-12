// Libraries
import React from 'react';
import {Browser} from '@increment/app';
import {gql} from '@increment/graphql';

// App
import {client} from './src/config';

// Run a test query when the app starts up.
const query = gql`
  query {
    isAuthenticated
  }
`;

client.query({query}).then((data) => console.log(data));

export const wrapRootElement = ({element}) => (
  <Browser client={client}>
    {element}
  </Browser>
);
