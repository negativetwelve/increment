// Libraries
import React from 'react';
import PropTypes from 'prop-types';
import View from '@react-x/view';

const DropdownContent = ({isVisible, height, children, style}) => (
  <View
    style={{
      display: isVisible ? 'flex' : 'none',
    }}
  >
    <View
      style={{
        position: 'absolute',
        top: 0,
        right: 0,
        overflowY: 'auto',
        zIndex: 100,
        ...height ? {maxHeight: height} : {},
        ...style,
      }}
    >
      {children}
    </View>
  </View>
);

// --------------------------------------------------
// Props
// --------------------------------------------------
DropdownContent.propTypes = {
  height: PropTypes.number,
  style: PropTypes.object,
};

DropdownContent.defaultProps = {
  height: null,
  style: {},
};

export default DropdownContent;
