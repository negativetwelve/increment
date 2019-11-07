// Libraries
import React from 'react';
import ReactNative from 'react-native';
import PropTypes from 'prop-types';

const ModalContent = ({isOpen, onClose, children, ...props}) => (
  <ReactNative.Modal
    animated
    transparent
    animationType={'fade'}
    visible={isOpen}
    onRequestClose={onClose}
    {...props}
  >
    <ReactNative.TouchableOpacity
      activeOpacity={1}
      onPress={onClose}
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
      }}
    >
      {children}
    </ReactNative.View>
  </ReactNative.Modal>
);

// --------------------------------------------------
// Props
// --------------------------------------------------
ModalContent.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

ModalContent.defaultProps = {
};

export default ModalContent;
