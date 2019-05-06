// Libraries
import React from 'react';
import {colors} from '@akiolabs/ui/styles';
import {Styled} from '@akiolabs/ui/components';

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
  background-color: ${colors.black3};
`;

const Environment = Styled.H8.extend`
  color: ${colors.white16};
`;

const EnvironmentBanner = ({environment}) => (
  <Container>
    <Fixed>
      <Environment>{`Environment: ${environment}`}</Environment>
    </Fixed>
  </Container>
);

export default EnvironmentBanner;
