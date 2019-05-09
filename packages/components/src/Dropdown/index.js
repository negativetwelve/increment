// Libraries
import React from 'react';

// Components
import Styled from '../Styled';
import Toggle from '../Toggle';
import Window from '../Window';
import DropdownContent from './DropdownContent';

const Content = Styled.View.extend`
`;

const Dropdown = ({trigger, onBlur, children, style}) => (
  <Toggle onClose={() => onBlur && onBlur()}>
    {({isOpen, handleOpen, handleClose, handleToggle}) => (
      <Window onOutsideClick={handleClose}>
        {({ref}) => (
          <Content
            ref={ref}
            style={style}>
            {trigger({isOpen, handleOpen, handleClose, handleToggle})}
            {isOpen && children({handleClose})}
          </Content>
        )}
      </Window>
    )}
  </Toggle>
);

Dropdown.Content = DropdownContent;

export default Dropdown;
