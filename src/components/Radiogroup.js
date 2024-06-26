import React from 'react';
import RadioGroup from '@mui/material/RadioGroup';

const CustomRadioGroup = ({
  ariaLabel,
  defaultValue,
  name,
  onChange,
  row = false,
  value,
  children
 
}) => {
  return (
    <RadioGroup
      aria-label={ariaLabel}
      defaultValue={defaultValue}
      name={name}
      onChange={onChange}
      row={row}
      value={value}
     
    >
      {children}
    </RadioGroup>
  );
};

export default CustomRadioGroup;
