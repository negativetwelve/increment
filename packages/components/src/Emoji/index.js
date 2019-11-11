// Libraries
import React from 'react';
import emoji from 'node-emoji';
import Text from '@react-x/text';

const Emoji = ({component: Component = Text, name, style}) => (
  <Component
    style={style}
  >
    {emoji.get(name)}
  </Component>
);

export default Emoji;
