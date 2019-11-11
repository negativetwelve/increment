// Libraries
import React from 'react';
import View from '@react-x/view';

// Components
import Toggle from '../Toggle';
import Window from '../Window';
import DropdownContent from './DropdownContent';

const Dropdown = ({trigger, onBlur, children, style}) => (
  <Toggle onClose={() => onBlur && onBlur()}>
    {({isOpen, handleOpen, handleClose, handleToggle}) => (
      <Window onOutsideClick={handleClose}>
        {({ref}) => (
          <View
            ref={ref}
            style={style}
          >
            {trigger({isOpen, handleOpen, handleClose, handleToggle})}
            {children({isOpen, handleClose})}
          </View>
        )}
      </Window>
    )}
  </Toggle>
);

Dropdown.Content = DropdownContent;

export default Dropdown;
