// Libraries
import React from 'react';
import {ApolloProvider} from 'react-apollo';
import {client} from '@increment/graphql';

// App
import ErrorBoundary from './ErrorBoundary';
import EnvironmentBanner from './EnvironmentBanner';

const App = ({children}) => {
  const environment = process.env.GATSBY_APP_ENV || 'development';
  const isProduction = environment === 'production';

  return (
    <ApolloProvider client={client}>
      <ErrorBoundary>
        {!isProduction && <EnvironmentBanner environment={environment} />}
        {children}
      </ErrorBoundary>
    </ApolloProvider>
  );
};

export default App;
