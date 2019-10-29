// Libraries
import {useQuery, useLazyQuery, useMutation, useSubscription, useApolloClient} from '@apollo/react-hooks';
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
