import React from 'react';
import Checkbox from '@mui/material/Checkbox';

const CustomCheckbox = ({
  checked = false,
  color = 'primary',
  disabled = false,
  indeterminate = false,
  inputProps,
  onChange,
  onClick
}) => {
  return (
    <Checkbox
      checked={checked}
      color={color}
      disabled={disabled}
      indeterminate={indeterminate}
      inputProps={inputProps}
      onChange={onChange}
      onClick={onClick}
    />
  );
};

export default CustomCheckbox;
