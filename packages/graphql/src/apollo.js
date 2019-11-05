// Libraries
import {ApolloClient} from 'apollo-client';
import {InMemoryCache} from 'apollo-cache-inmemory';
import {ApolloLink} from 'apollo-link';
import {setContext} from 'apollo-link-context';
import {onError as onGraphQLError} from 'apollo-link-error';
import {HttpLink} from 'apollo-link-http';
import {RetryLink} from 'apollo-link-retry';
import merge from 'lodash.merge';

const createErrorMiddleware = ({onError}) => {
  return onGraphQLError((options) => onError(options));
};

const createRetryMiddleware = ({delay, attempts}) => {
  return new RetryLink({delay, attempts});
};

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
        Authorization: token,
      };
    },
  });
};

const DEFAULT_OPTIONS = {
  watchQuery: {
    fetchPolicy: 'cache-first',
  },
};

const createClient = (config = {}) => {
  const {
    middleware = [],
    cacheOptions = {},
    defaultOptions = {},
    ...options
  } = config;

  return new ApolloClient({
    link: ApolloLink.from(middleware),
    cache: new InMemoryCache({
      addTypename: true,
      ...cacheOptions,
    }),
    defaultOptions: merge({}, DEFAULT_OPTIONS, defaultOptions),
    ...options,
  });
};

export {
  // Client
  createClient,

  // Middleware
  createAuthenticationMiddleware,
  createErrorMiddleware,
  createGraphQLMiddleware,
  createHeadersMiddleware,
  createRetryMiddleware,
};
