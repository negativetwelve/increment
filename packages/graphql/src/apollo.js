// Libraries
import {ApolloClient} from 'apollo-client';
import {InMemoryCache} from 'apollo-cache-inmemory';
import {ApolloLink} from 'apollo-link';
import {setContext} from 'apollo-link-context';
import {HttpLink} from 'apollo-link-http';
import merge from 'lodash.merge';

const createGraphQLMiddleware = ({uri}) => {
  return new HttpLink({uri});
};

const createHeadersMiddleware = ({getHeaders}) => {
  return setContext(async (request) => {
    const headers = await getHeaders();

    return {
      headers: {
        ...request.headers,
        ...headers,
      },
    };
  });
};

const createAuthenticationMiddleware = ({getToken}) => {
  return createHeadersMiddleware({
    getHeaders: async () => {
      const token = await getToken();

      return {
        Authorization: token ? token : null,
      };
    },
  });
};

const DEFAULT_OPTIONS = {
  watchQuery: {
    fetchPolicy: 'cache-first',
  },
};

const createClient = ({middleware = [], cacheOptions = {}, defaultOptions = {}} = {}) => {
  return new ApolloClient({
    link: ApolloLink.from(middleware),
    cache: new InMemoryCache({
      addTypename: true,
      ...cacheOptions,
    }),
    defaultOptions: merge({}, DEFAULT_OPTIONS, defaultOptions),
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
