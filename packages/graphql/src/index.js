// Libraries
import {
  ApolloProvider,
  Query,
  Mutation,
  useQuery,
  useLazyQuery,
  useMutation,
  useSubscription,
  useApolloClient,
} from 'react-apollo';
import gql from 'graphql-tag';

// App
import {
  createClient,
  createGraphQLMiddleware,
  createHeadersMiddleware,
  createAuthenticationMiddleware,
} from './apollo';

gql.query = `
  __typename
`;

gql.errors = `
  errors {
    field
    message
  }
`;

export {
  // Apollo
  ApolloProvider,
  Query,
  Mutation,
  useQuery,
  useLazyQuery,
  useMutation,
  useSubscription,
  useApolloClient,

  // GraphQL
  gql,

  // Client
  createClient,

  // Middleware
  createGraphQLMiddleware,
  createHeadersMiddleware,
  createAuthenticationMiddleware,
};
