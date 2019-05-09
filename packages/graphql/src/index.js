// Libraries
import gql from 'graphql-tag';

// App
import {client} from './apollo';

// TODO(mark): There seems to be a bug where the __typename is not included
// for queries that have variables.
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
  gql,
  client,
};
