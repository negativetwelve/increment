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
    // HACK(mark): We need to open on the next event so the setState
    // isn't batched with clicking on the overlay to close.
    setTimeout(() => this.setState({isOpen: true}), 0);
  };

  handleClose = () => {
    this.setState({isOpen: false});
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
        {trigger({isOpen, handleOpen: this.handleOpen})}
        <ReactModal
          ariaHideApp={false}
          isOpen={isOpen}
          className={contentClassName}
          portalClassName={className}
          overlayClassName={overlayClassName}
          onRequestClose={this.handleRequestClose}
          {...props}>
          {children({isOpen, handleClose: this.handleClose})}
        </ReactModal>
      </React.Fragment>
    );
  }
}

ModalAdapter.propTypes = {
  initialIsOpen: PropTypes.bool,
};

ModalAdapter.defaultProps = {
  initialIsOpen: false,
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
