// Libraries
import React from 'react';
import PropTypes from 'prop-types';

// Components
import Dropdown from '../Dropdown';
import Styled from '../Styled';

const Items = Styled.View.extend`
  padding-vertical: 8px;
  background-color: #FFFFFF;
`;

const Item = Styled.View.extend`
  z-index: 100;
`;

const Action = Styled.Touchable.extend`
`;

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
TypeaheadInput.propTypes = {
  height: PropTypes.number,
};

TypeaheadInput.defaultProps = {
  height: 300,
};

export default TypeaheadInput;
