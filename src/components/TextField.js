import React from 'react';
import TextField from '@mui/material/TextField';

const CustomTextField = ({
  label,
  variant = 'outlined',
  fullWidth = false,
  multiline = false,
  rows = 1,
  disabled = false,
  onChange,
  value
  
}) => {
  return (
    <TextField
      label={label}
      variant={variant}
      fullWidth={fullWidth}
      multiline={multiline}
      rows={rows}
      disabled={disabled}
      onChange={onChange}
      value={value}
     
    />
  );
};

export default CustomTextField;
