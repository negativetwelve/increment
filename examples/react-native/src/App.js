// Libraries
import React from 'react';
import {Styled} from '@increment/components';
import {gql} from '@increment/graphql';

// App
import {client} from './config';

const query = gql`
  query {
    isAuthenticated
  }
`;

client.query({query}).then(({loading, data}) => console.log({loading, data}));

const Container = Styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const Title = Styled.Text`
  font-size: 18px;
  line-height: 25px;
  color: #000000;
`;

const App = () => (
  <Container>
    <Title>React Native with Increment</Title>
  </Container>
);

export default App;
