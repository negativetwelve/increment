// Libraries
import {createClient, createGraphQLMiddleware} from '@increment/graphql';

const client = createClient({
  middleware: [
    createGraphQLMiddleware({uri: '/graphql'}),
  ],
});

export {
  client,
};
