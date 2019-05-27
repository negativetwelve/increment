// Libraries
import Styled from 'styled-x';
import {TextInput, Touchable} from 'react-x';

Styled.Touchable = Styled(Touchable)`
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
`;

Styled.TextInput = Styled(TextInput);

export default Styled;
