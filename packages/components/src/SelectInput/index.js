// Libraries
import React from 'react';
import PropTypes from 'prop-types';
import {TouchableOpacity} from '@react-x/touchable';
import View from '@react-x/view';

// Components
import Dropdown from '../Dropdown';

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
        <TouchableOpacity
          disabled={disabled}
          activeOpacity={1}
          onPress={handleToggle}
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: '#FFFFFF',
            height: 50,
            paddingHorizontal: 15,
            borderRadius: 5,
            borderWidth: 1,
            borderStyle: 'solid',
            borderColor: '#E0E0EB',
            cursor: disabled ? 'not-allowed' : 'pointer',
          }}
        >
          {option ? (
            renderValue(option)
          ) : (
            renderPlaceholder({color: placeholderTextColor, text: placeholder})
          )}
        </TouchableOpacity>
      );
    }}
    onBlur={() => onBlur(name, true)}
    style={style}
  >
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
        }}
      >
        <View
          style={{
            paddingVertical: 8,
            backgroundColor: '#FFFFFF',
          }}
        >
          {options.map((option, index) => (
            <View
              key={index}
              style={{
                zIndex: 100,
              }}
            >
              <TouchableOpacity
                onPress={() => {
                  onChange(name, option.value, option);
                  handleClose();
                }}
                children={renderOption(option)}
              />
            </View>
          ))}
        </View>
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
