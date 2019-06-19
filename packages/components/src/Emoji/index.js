// Libraries
import React from 'react';
import emoji from 'node-emoji';

// Components
import Styled from '../Styled';

const Text = Styled.Text`
`;

const Emoji = ({component: Component = Text, name, style}) => (
  <Component
    style={style}>
    {emoji.get(name)}
  </Component>
);

export default Emoji;
