// Libraries
import Styled from 'styled-x';
import {Touchable} from 'react-x';

export default Styled(Touchable)`
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
`;
