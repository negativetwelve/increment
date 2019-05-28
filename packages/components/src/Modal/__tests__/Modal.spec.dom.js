// Libraries
import React from 'react';
import Modal from '../';

/* eslint-disable no-undef */
describe('Modal', () => {
  context('with required props', () => {
    itRenders(() => (
      <Modal
        trigger={({handleOpen}) => null}>
        {({handleClose}) => null}
      </Modal>
    ));
  });
});
