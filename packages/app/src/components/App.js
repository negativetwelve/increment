// Libraries
import React from 'react';
import {ApolloProvider} from 'react-apollo';

const App = ({client, children}) => (
  <ApolloProvider client={client}>
    {children}
  </ApolloProvider>
);

export default App;
