// Libraries
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
  // GraphQL
  gql,

  // Client
  createClient,

  // Middleware
  createGraphQLMiddleware,
  createHeadersMiddleware,
  createAuthenticationMiddleware,
};
