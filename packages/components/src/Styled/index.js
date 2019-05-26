/* eslint-disable max-len */

// Libraries
import Styled from 'styled-x';
import {TextInput, TouchableOpacity} from 'react-native-web';

// TODO(mark): There's a bug with the normal Touchable so we override it.
Styled.Touchable = Styled(TouchableOpacity)`
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
`;

Styled.TextInput = Styled(TextInput)``;

export default Styled;
