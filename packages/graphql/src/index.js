// Libraries
import gql from 'graphql-tag';

// App
export * from './apollo';

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
};
