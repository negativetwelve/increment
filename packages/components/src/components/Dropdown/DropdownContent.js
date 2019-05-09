// Libraries
import React from 'react';
import PropTypes from 'prop-types';

// Components
import Styled from '../Styled';

const Container = Styled.View.extend`
`;

const Content = Styled.View.extend`
  position: absolute;
  top: 0;
  right: 0;
  ${props => props.height && `max-height: ${props.height}px;`}
  overflow-y: auto;
  z-index: 100;
`;

const DropdownContent = ({height, children, style}) => (
  <Container>
    <Content
      height={height}
      style={style}>
      {children}
    </Content>
  </Container>
);

// --------------------------------------------------
// Props
// --------------------------------------------------
DropdownContent.propTypes = {
  height: PropTypes.number,
};

DropdownContent.defaultProps = {
  height: null,
};

export default DropdownContent;