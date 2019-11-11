// Libraries
import React from 'react';
import PropTypes from 'prop-types';
import {TouchableOpacity} from '@react-x/touchable';
import View from '@react-x/view';

// Components
import Dropdown from '../Dropdown';

const TypeaheadInput = ({
  component: InputComponent,
  disabled,
  height,
  name,
  placeholder,
  placeholderTextColor,
  value,
  options,
  onChange,
  onBlur,
  renderOption,
  style,
}) => (
  <Dropdown
    trigger={({handleOpen, handleClose}) => (
      <InputComponent
        autoComplete={'off'}
        disabled={disabled}
        name={name}
        placeholder={placeholder}
        defaultValue={value}
        onFocus={(event) => handleOpen()}
        onBlur={(event) => {
          const {value} = event.target;
          const option = {name, value};

          onChange(name, value, option);
          handleClose();
        }}
      />
    )}
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
TypeaheadInput.propTypes = {
  height: PropTypes.number,
};

TypeaheadInput.defaultProps = {
  height: 300,
};

export default TypeaheadInput;
