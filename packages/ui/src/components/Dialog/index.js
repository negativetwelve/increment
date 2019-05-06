// Libraries
import React from 'react';
import PropTypes from 'prop-types';
import NodeEmoji from 'node-emoji';
import {colors} from '@increment/ui/styles';

// Components
import Styled from '../Styled';

const Container = Styled.View.extend`
  width: ${props => props.width}px;
  background-color: ${colors.white16};
  box-shadow: 0 2px 5px rgba(194,194,194,0.5);
  border-radius: 5px;
`;

const Circle = Styled.View.extend`
  align-self: center;
  align-items: center;
  justify-content: center;
  top: -20px;
  height: 80px;
  width: 80px;
  border-radius: 40px;
  background-color: ${colors.white16};
  box-shadow: 0 2px 5px rgba(194,194,194,0.5);
`;

const Emoji = Styled.H1.extend`
  margin-top: 5px;
`;

const Content = Styled.View.extend`
  margin-horizontal: 30px;
`;

const Dialog = ({width, emoji, children}) => (
  <Container width={width}>
    <Circle>
      <Emoji>{NodeEmoji.get(emoji)}</Emoji>
    </Circle>
    <Content>
      {children}
    </Content>
  </Container>
);

// --------------------------------------------------
// Props
// --------------------------------------------------
Dialog.propTypes = {
  width: PropTypes.number.isRequired,
  emoji: PropTypes.string.isRequired,
};

Dialog.defaultProps = {
};

export default Dialog;
