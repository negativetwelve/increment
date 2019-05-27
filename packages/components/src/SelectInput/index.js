// Libraries
import React from 'react';
import PropTypes from 'prop-types';

// Components
import Dropdown from '../Dropdown';
import Styled from '../Styled';

const Touchable = Styled.Touchable`
  flex-direction: row;
  align-items: center;
  background-color: #FFFFFF;
  height: 50px;
  padding-horizontal: 15px;
  border-radius: 5px;
  border-width: 1px;
  border-style: solid;
  border-color: #E0E0EB;
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
`;

const Items = Styled.View`
  padding-vertical: 8px;
  background-color: #FFFFFF;
`;

const Item = Styled.View`
  z-index: 100;
`;

const Action = Styled.Touchable`
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
  renderValue,
  renderPlaceholder,
  renderOption,
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
            renderValue(option)
          ) : (
            renderPlaceholder({color: placeholderTextColor, text: placeholder})
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
          borderColor: '#E0E0EB',
          borderRadius: 4,
          boxShadow: '0 2px 5px rgba(194,194,194,0.5)',
        }}>
        <Items>
          {options.map((option, index) => (
            <Item key={index}>
              <Action
                onPress={() => {
                  onChange(name, option.value, option);
                  handleClose();
                }}
                children={renderOption(option)}
              />
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
