// Libraries
import React from 'react';
import PropTypes from 'prop-types';

// TODO(mark): Shouldn't use themes within core packages.
import Theme from '@increment/theme-basic';

// Components
import Dropdown from '../Dropdown';
import Styled from '../Styled';

const Input = Styled.TextInput.H6.extend`
`;

const Items = Styled.View.extend`
  padding-vertical: 8px;
  background-color: ${Theme.colors.white16};
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
  color: ${Theme.colors.gray8};
`;

const TypeaheadInput = ({
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
    trigger={({handleOpen, handleClose}) => (
      <Input
        autoComplete={'off'}
        disabled={disabled}
        name={name}
        placeholder={placeholder}
        defaultValue={value}
        onFocus={(event) => handleOpen()}
        onBlur={(event) => {
          const value = event.target.value;
          const option = {name, value};

          onChange(name, value, option);
          handleClose();
        }}
      />
    )}
    onBlur={() => onBlur(name, true)}
    style={style}>
    {({handleClose}) => (
      <Dropdown.Content
        height={height}
        style={{
          width: '100%',
          borderWidth: 1,
          borderStyle: 'solid',
          borderColor: Theme.colors.gray14,
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
TypeaheadInput.propTypes = {
  height: PropTypes.number,
};

TypeaheadInput.defaultProps = {
  height: 300,
};

export default TypeaheadInput;
