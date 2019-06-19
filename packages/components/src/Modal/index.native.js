// Libraries
import React from 'react';
import ReactNative from 'react-native';
import PropTypes from 'prop-types';

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
    setTimeout(this.handleOpen, 0);
  };

  handleRequestClose = () => {
    this.handleClose();
  };

  render() {
    const {trigger, children, ...props} = this.props;
    const {isOpen} = this.state;

    return (
      <React.Fragment>
        {trigger({isOpen, handleOpen: this.handleRequestOpen})}
        <ReactNative.Modal
          animated
          transparent
          animationType={'fade'}
          visible={isOpen}
          onRequestClose={this.handleRequestClose}
          {...props}>
          <ReactNative.TouchableOpacity
            activeOpacity={1}
            onPress={this.handleRequestClose}
            style={{
              flex: 1,
              backgroundColor: 'rgba(74, 74, 74, 0.7)',
            }}
          />
          <ReactNative.View
            pointerEvents={'box-none'}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
            }}>
            {children({handleClose: this.handleRequestClose})}
          </ReactNative.View>
        </ReactNative.Modal>
      </React.Fragment>
    );
  }
}

// --------------------------------------------------
// Props
// --------------------------------------------------
Modal.propTypes = {
  initialIsOpen: PropTypes.bool,
  onOpen: PropTypes.func,
  onClose: PropTypes.func,
};

Modal.defaultProps = {
  initialIsOpen: false,
  onOpen: () => {},
  onClose: () => {},
};

export default Modal;
