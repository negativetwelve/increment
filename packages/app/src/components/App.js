// Libraries
import React from 'react';
import {ApolloProvider} from 'react-apollo';
import {createClient} from '@increment/graphql';

const App = ({children}) => (
  <ApolloProvider client={createClient()}>
    {children}
  </ApolloProvider>
);

export default App;
