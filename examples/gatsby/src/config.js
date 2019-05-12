// Libraries
import {
  createClient,
  createAuthenticationMiddleware,
  createGraphQLMiddleware,
} from '@increment/graphql';

const client = createClient({
  middleware: [
    createAuthenticationMiddleware({
      getToken: () => 'token',
    }),
    createGraphQLMiddleware({uri: '/graphql'}),
  ],
});

export {
  client,
};
