// Libraries
import {ApolloClient} from 'apollo-client';
import {InMemoryCache} from 'apollo-cache-inmemory';
import {ApolloLink, from as combine} from 'apollo-link';
import {createHttpLink} from 'apollo-link-http';

const createGraphQLMiddleware = ({uri}) => {
  return createHttpLink({uri});
};

const createHeadersMiddleware = ({getHeaders}) => {
  return new ApolloLink((operation, forward) => {
    operation.setContext(async ({headers = {}}) => {
      const newHeaders = await getHeaders();

      return {
        headers: {
          ...headers,
          ...newHeaders,
        },
      };
    });

    return forward(operation);
  });
};

const createAuthenticationMiddleware = ({getToken}) => {
  const getHeaders = async () => {
    const token = await getToken();

    return {
      Authorization: token ? token : null,
    };
  };

  return createHeadersMiddleware({getHeaders});
};

const createClient = ({middleware = []} = {}) => {
  return new ApolloClient({
    link: combine(middleware),
    cache: new InMemoryCache({
      addTypename: true,
    }),
    defaultOptions: {
      watchQuery: {
        fetchPolicy: 'cache-first',
      },
    },
  });
};

export {
  // Client
  createClient,

  // Middleware
  createGraphQLMiddleware,
  createHeadersMiddleware,
  createAuthenticationMiddleware,
};
