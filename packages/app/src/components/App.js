// Libraries
import React from 'react';
import PropTypes from 'prop-types';
import {ApolloProvider, createClient} from '@increment/graphql';

const App = ({client, children}) => (
  <ApolloProvider client={client}>
    {children}
  </ApolloProvider>
);

App.propTypes = {
  client: PropTypes.object,
};

App.defaultProps = {
  client: createClient(),
};

export default App;
