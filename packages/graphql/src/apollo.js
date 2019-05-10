// Libraries
import {ApolloClient} from 'apollo-client';
import {ApolloLink, from as combine} from 'apollo-link';
import {HttpLink} from 'apollo-link-http';
import {InMemoryCache} from 'apollo-cache-inmemory';

const createGraphQLMiddleware = ({uri}) => {
  return new HttpLink({uri});
};

const createHeadersMiddleware = (getHeaders) => {
  return new ApolloLink((operation, forward) => {
    operation.setContext(({headers = {}}) => ({
      headers: {
        ...headers,
        ...getHeaders(),
      },
    }));

    return forward(operation);
  });
};

const createAuthenticationMiddleware = (getToken) => {
  return createHeadersMiddleware(() => {
    const token = getToken();

    return {
      Authorization: token ? token : null,
    };
  });
};

const createClient = ({middleware = []}) => {
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
