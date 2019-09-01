// Libraries
import React from 'react';
import PropTypes from 'prop-types';
import ReactModal from 'react-modal';
import styled from 'styled-components';

class ModalAdapter extends React.Component {
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
    const {className, trigger, children, ...props} = this.props;
    const {isOpen} = this.state;
    const contentClassName = `${className}__content`;
    const overlayClassName = `${className}__overlay`;

    return (
      <React.Fragment>
        {trigger({isOpen, handleOpen: this.handleRequestOpen})}
        <ReactModal
          ariaHideApp={false}
          isOpen={isOpen}
          className={contentClassName}
          portalClassName={className}
          overlayClassName={overlayClassName}
          onRequestClose={this.handleRequestClose}
          {...props}>
          {children({isOpen, handleClose: this.handleRequestClose})}
        </ReactModal>
      </React.Fragment>
    );
  }
}

// --------------------------------------------------
// Props
// --------------------------------------------------
ModalAdapter.propTypes = {
  initialIsOpen: PropTypes.bool,
  openDelay: PropTypes.number,
  onOpen: PropTypes.func,
  onClose: PropTypes.func,
};

ModalAdapter.defaultProps = {
  initialIsOpen: false,
  openDelay: 200,
  onOpen: () => {},
  onClose: () => {},
};

const Modal = styled(ModalAdapter).attrs({
  suppressClassNameWarning: true,
})`
  &__overlay {
    position: fixed;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    background-color: rgba(74, 74, 74, 0.7);
  }

  &__content {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    overflow: auto;
    -webkit-overflow-scrolling: touch;
    outline: none;
    pointer-events: none;
  }

  &__content * {
    pointer-events: all;
  }
`;

export default Modal;
