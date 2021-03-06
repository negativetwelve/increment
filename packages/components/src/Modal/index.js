// Libraries
import React from 'react';
import PropTypes from 'prop-types';

// Components
import ModalContent from './ModalContent';

class Modal extends React.Component {
  state = {
    isOpen: this.props.initialIsOpen,
  };

  handleOpen = () => {
    this.setState({isOpen: true}, () => {
      if (this.props.onOpen) {
        this.props.onOpen();
      }
    });
  };

  handleClose = () => {
    this.setState({isOpen: false}, () => {
      if (this.props.onClose) {
        this.props.onClose();
      }
    });
  };

  handleRequestOpen = () => {
    // We need to open on the next event so the setState
    // isn't batched with clicking on the overlay to close.
    setTimeout(this.handleOpen, this.props.openDelay);
  };

  handleRequestClose = () => {
    this.handleClose();
  };

  render() {
    const {trigger, children} = this.props;
    const {isOpen} = this.state;

    return (
      <React.Fragment>
        {trigger({isOpen, handleOpen: this.handleRequestOpen})}
        <ModalContent
          isOpen={isOpen}
          onClose={this.handleRequestClose}
        >
          {children({isOpen, handleClose: this.handleRequestClose})}
        </ModalContent>
      </React.Fragment>
    );
  }
}

// --------------------------------------------------
// Props
// --------------------------------------------------
Modal.propTypes = {
  trigger: PropTypes.func.isRequired,
  initialIsOpen: PropTypes.bool,
  openDelay: PropTypes.number,
  onOpen: PropTypes.func,
  onClose: PropTypes.func,
};

Modal.defaultProps = {
  initialIsOpen: false,
  openDelay: 200,
  onOpen: () => {},
  onClose: () => {},
};

Modal.Content = ModalContent;

export default Modal;
