import React from 'react';
import Switch from '@mui/material/Switch';

const CustomSwitch = ({
  checked = false,
  color = 'primary',
  defaultChecked = false,
  disabled = false,
  onChange,
  size = 'medium',

}) => {
  return (
    <Switch
      checked={checked}
      color={color}
      defaultChecked={defaultChecked}
      disabled={disabled}
      onChange={onChange}
      size={size}
      
    />
  );
};

export default CustomSwitch;
