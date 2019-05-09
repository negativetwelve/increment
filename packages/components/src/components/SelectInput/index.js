// Libraries
import React from 'react';
import PropTypes from 'prop-types';

// TODO(mark): Shouldn't use themes within core packages.
import {colors, typography} from '@increment/theme-basic';

// Components
import Dropdown from '../Dropdown';
import Styled from '../Styled';

const Touchable = Styled.Touchable.extend`
  flex-direction: row;
  align-items: center;
  background-color: ${colors.white16};
  height: 50px;
  padding-horizontal: 15px;
  border-radius: 5px;
  border-width: 1px;
  border-style: solid;
  border-color: ${colors.gray14};
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
`;

const Value = Styled.H6.extend`
`;

const Placeholder = Styled.H6.extend`
`;

const Items = Styled.View.extend`
  padding-vertical: 8px;
  background-color: ${colors.white16};
`;

const Item = Styled.View.extend`
  z-index: 100;
`;

const Action = Styled.Touchable.extend`
`;

const Text = Styled.H7.extend`
  padding-top: 7px;
  padding-bottom: 7px;
  padding-horizontal: 20px;
  color: ${colors.gray8};
`;

const SelectInput = ({
  disabled,
  height,
  name,
  placeholder,
  placeholderTextColor,
  value,
  options,
  onChange,
  onBlur,
  style,
}) => (
  <Dropdown
    trigger={({handleToggle}) => {
      const option = options.find((option) => option.value === value);

      return (
        <Touchable
          disabled={disabled}
          activeOpacity={1}
          onPress={handleToggle}>
          {option ? (
            <Value numberOfLines={1}>{option.name}</Value>
          ) : (
            <Placeholder style={{color: placeholderTextColor}}>
              {placeholder}
            </Placeholder>
          )}
        </Touchable>
      );
    }}
    onBlur={() => onBlur(name, true)}
    style={style}>
    {({handleClose}) => (
      <Dropdown.Content
        height={height}
        style={{
          width: '100%',
          borderWidth: 1,
          borderStyle: 'solid',
          borderColor: colors.gray14,
          borderRadius: 4,
          boxShadow: '0 2px 5px rgba(194,194,194,0.5)',
        }}>
        <Items>
          {options.map((option, index) => (
            <Item key={index}>
              <Action onPress={() => {
                onChange(name, option.value, option);
                handleClose();
              }}>
                <Text>{option.name}</Text>
              </Action>
            </Item>
          ))}
        </Items>
      </Dropdown.Content>
    )}
  </Dropdown>
);

// --------------------------------------------------
// Props
// --------------------------------------------------
SelectInput.propTypes = {
  height: PropTypes.number,
};

SelectInput.defaultProps = {
  height: 300,
};

export default SelectInput;
