// Libraries
import React from 'react';
import {gql} from '@increment/graphql';
import {Styled} from '@increment/components';

// App
import {client} from './config';

const query = gql`
  query {
    isAuthenticated
  }
`;

client.query({query}).then(({loading, data}) => console.log({loading, data}));

const Container = Styled.View.extend`
  flex: 1;
`;

const Title = Styled.Text.extend`
  color: #000000;
`;

const App = () => (
  <Container>
    <Text>React Native with Increment</Text>
  </Container>
);

export default App;
