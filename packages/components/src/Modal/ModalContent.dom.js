// Libraries
import React from 'react';
import PropTypes from 'prop-types';
import ReactModal from 'react-modal';
import styled from 'styled-components';

const ModalAdapter = ({isOpen, onClose, className, ...props}) => {
  const contentClassName = `${className}__content`;
  const overlayClassName = `${className}__overlay`;

  return (
    <ReactModal
      ariaHideApp={false}
      isOpen={isOpen}
      className={contentClassName}
      portalClassName={className}
      overlayClassName={overlayClassName}
      onRequestClose={onClose}
      {...props}
    />
  );
};

// --------------------------------------------------
// Props
// --------------------------------------------------
ModalAdapter.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

ModalAdapter.defaultProps = {
};

const ModalContent = styled(ModalAdapter).attrs({
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

export default ModalContent;
