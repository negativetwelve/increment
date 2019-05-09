// Libraries
import React from 'react';
import PropTypes from 'prop-types';

// Components
import State from '../State';

const callIfDefined = (handler) => handler && handler();

const Toggle = ({defaultIsOpen, onOpen, onClose, children}) => (
  <State initial={{isOpen: defaultIsOpen}}>
    {({isOpen, setState}) => children({
      isOpen,
      handleOpen: () => setState({isOpen: true}, () => callIfDefined(onOpen)),
      handleClose: () => setState({isOpen: false}, () => callIfDefined(onClose)),
      handleToggle: () => setState({isOpen: !isOpen}, () => {
        isOpen ? callIfDefined(onClose) : callIfDefined(onOpen);
      }),
    })}
  </State>
);

// --------------------------------------------------
// PropTypes
// --------------------------------------------------
Toggle.propTypes = {
  onOpen: PropTypes.func,
  onClose: PropTypes.func,
  defaultIsOpen: PropTypes.bool,
};

Toggle.defaultProps = {
  onOpen: null,
  onClose: null,
  defaultIsOpen: false,
};

export default Toggle;
