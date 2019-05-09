// Libraries
import React from 'react';
import {Styled} from '@increment/components';

const Container = Styled.View.extend`
  height: 30px;
  z-index: 1000;
`;

const Fixed = Styled.View.extend`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 30px;
  padding-horizontal: 10px;
  justify-content: center;
  background-color: #373C46;
`;

const Environment = Styled.H8.extend`
  color: #FFFFFF;
`;

const EnvironmentBanner = ({environment}) => (
  <Container>
    <Fixed>
      <Environment>{`Environment: ${environment}`}</Environment>
    </Fixed>
  </Container>
);

export default EnvironmentBanner;
