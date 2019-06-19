// Libraries
import React from 'react';
import Modal from '../';

/* eslint-disable no-undef */
describe('Modal', () => {
  set('initialIsOpen', () => false);
  set('trigger', () => ({handleOpen}) => null);
  set('children', () => ({handleClose}) => null);
  set('props', () => ({
    initialIsOpen,
    trigger,
    children,
  }));

  context('with initialIsOpen: false', () => {
    set('initialIsOpen', () => false);
    itRenders(() => <Modal {...props} />);
  });

  context('with initialIsOpen: true', () => {
    set('initialIsOpen', () => true);
    itRenders(() => <Modal {...props} />);
  });
});
