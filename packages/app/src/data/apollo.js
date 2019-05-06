// Libraries
import {ApolloClient} from 'apollo-client';
import {HttpLink} from 'apollo-link-http';
import {setContext} from 'apollo-link-context';
import {InMemoryCache} from 'apollo-cache-inmemory';

const authenticationLink = setContext((_, {headers}) => {
  const token = localStorage.getItem('token');

  return {
    headers: {
      ...headers,
      Authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const httpLink = new HttpLink();
const client = new ApolloClient({
  link: authenticationLink.concat(httpLink),
  cache: new InMemoryCache({
    addTypename: true,
  }),
  defaultOptions: {
    watchQuery: {
      fetchPolicy: 'cache-first',
    },
  },
});

export {
  client,
};
