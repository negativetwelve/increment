// Libraries
import PropTypes from 'prop-types';
import Styled from 'styled-x';
import {ActivityIndicator, TextInput, TouchableOpacity} from 'react-native-web';
import {colors, typography} from '@akiolabs/ui/styles';

// TODO(mark): There's a bug with the normal Touchable so we override it.
Styled.Touchable = Styled(TouchableOpacity)`
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
`;

Styled.TextInput = Styled(TextInput)``;

// Headings
Styled.H1 = Styled.Text.extend`${props => props.mobile ? typography.h2(props) : typography.h1(props)}`;
Styled.H2 = Styled.Text.extend`${props => props.mobile ? typography.h3(props) : typography.h2(props)}`;
Styled.H3 = Styled.Text.extend`${props => props.mobile ? typography.h4(props) : typography.h3(props)}`;
Styled.H4 = Styled.Text.extend`${props => props.mobile ? typography.h5(props) : typography.h4(props)}`;
Styled.H5 = Styled.Text.extend`${props => props.mobile ? typography.h6(props) : typography.h5(props)}`;
Styled.H6 = Styled.Text.extend`${props => props.mobile ? typography.h7(props) : typography.h6(props)}`;
Styled.H7 = Styled.Text.extend`${props => props.mobile ? typography.h8(props) : typography.h7(props)}`;

// H8 doesn't have a mobile size.
Styled.H8 = Styled.Text.extend`${props => props.desktop ? typography.h8(props) : typography.h8(props)}`;

// TextInputs
Styled.TextInput = Styled.TextInput.extend`
  background-color: ${props => props.disabled || !props.editable ? colors.white4 : colors.white16};
  height: 50px;
  padding-horizontal: 15px;
  border-radius: 5px;
  border-width: 1px;
  border-style: solid;
  border-color: ${colors.gray14};
  cursor: ${props => props.disabled || !props.editable ? 'not-allowed' : 'text'};
`;

Styled.TextInput.defaultProps = {
  editable: true,
};

Styled.TextInput.H6 = Styled.TextInput.extend`
  ${props => typography.h6(props)}
  color: ${props => props.disabled || !props.editable ? colors.gray9 : colors.black3};
`;

Styled.TextInput.H7 = Styled.TextInput.extend`
  ${props => typography.h7(props)}
  color: ${props => props.disabled || !props.editable ? colors.gray9 : colors.black3};
`;

// Overlays
Styled.Overlay = Styled.View.extend`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

// Buttons
Styled.Button = Styled.Touchable.extend`
  align-items: center;
  justify-content: center;
  width: ${props => props.width}px;
  height: 50px;
  border-radius: 5px;
  background-color: ${props => props.disabled ? props.disabledColor : props.color};
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  box-shadow: 0 2px 5px rgba(194,194,194,0.5);
`;

Styled.Button.propTypes = {
  width: PropTypes.number,
  color: PropTypes.string,
  disabledColor: PropTypes.string,
  disabled: PropTypes.bool,
};

Styled.Button.defaultProps = {
  activeOpacity: 1,
  width: 150,
  color: colors.purple5,
  disabledColor: colors.gray8,
  disabled: false,
};

// Loading
Styled.Loading = Styled(ActivityIndicator)``;

export default Styled;
