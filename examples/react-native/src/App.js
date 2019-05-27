// Libraries
import React from 'react';
import {gql} from '@increment/graphql';

// App
import {client} from './config';

// Components
import {Image, Text, View} from 'react-native';
// import {Styled} from 'styled-x';

// TODO
// import {Image} from 'react-x-primitives';
import styled from 'styled-components/primitives';
// import createComponent from 'styled-x-create-component';

console.log({Image});

const ImageComponent = styled(Image);

// This allows us to import the entire Primitives object or specific
// components via `import {View} from 'styled-x-primitives';`.

const query = gql`
  query {
    isAuthenticated
  }
`;

client.query({query}).then(({loading, data}) => console.log({loading, data}));

// const Container = Styled.View`
//   flex: 1;
// `;

// const Title = Styled.Text`
//   color: #000000;
// `;

const App = () => (
  <View
    style={{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    }}>
    <Text>React Native with Increment</Text>
  </View>
);

export default App;
