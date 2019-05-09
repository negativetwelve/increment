// Libraries
import React from 'react';

// Components
import Toggle from '../Toggle';

const Hover = ({children}) => (
  <Toggle>
    {({isOpen, handleOpen, handleClose}) => (
      <div
        onMouseEnter={handleOpen}
        onMouseLeave={handleClose}>
        {children({isHovered: isOpen})}
      </div>
    )}
  </Toggle>
);

export default Hover;
