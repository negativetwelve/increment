// Libraries
import React from 'react';
import Styled from '../';

const Square = Styled.View`
  height: 20px;
  width: 20px;
`;

const SquareWithProps = Styled.View`
  height: ${props => props.size}px;
  width: ${props => props.size}px;
  borderRadius: ${props => props.borderRadius}px;
`;

const Title = Styled.Text`
  font-size: 16px;
  text-align: center;
`;

const TitleWithProps = Styled.Text`
  font-size: ${props => props.size}px;
  color: ${props => props.color};
`;

// const TextInput = Styled.TextInput`
// `;

const Touchable = Styled.Touchable`
`;

const Inner = Styled.View`
`;

/* eslint-disable no-undef */
describe('Styled`', () => {
  describe('View', () => {
    describe('Square', () => {
      itRenders(() => <Square />);
    });

    describe('SquareWithProps', () => {
      itRenders(() => <SquareWithProps size={20} borderRadius={5} />);
    });
  });

  describe('Text', () => {
    describe('Title', () => {
      itRenders(() => <Title />);
    });

    describe('TitleWithProps', () => {
      itRenders(() => <TitleWithProps size={20} color={'#FFFFFF'} />);
    });
  });

  // describe('TextInput', () => {
  //   context('with no props', () => {
  //     itRenders(() => <TextInput />);
  //   });
  // });

  describe('Touchable', () => {
    context('with no props', () => {
      itRenders(() => <Touchable><Inner /></Touchable>);
    });
  });
});
