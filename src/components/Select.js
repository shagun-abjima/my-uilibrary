import React from 'react';
import Select from '@mui/material/Select';

const CustomSelect = ({
  autoWidth = false,
  defaultValue,
  displayEmpty = false,
  IconComponent,
  inputProps,
  labelId,
  labelWidth,
  MenuProps,
  multiple = false,
  native = false,
  onChange,
  renderValue,
  value,
  children,
 
}) => {
  return (
    <Select
      autoWidth={autoWidth}
      defaultValue={defaultValue}
      displayEmpty={displayEmpty}
      IconComponent={IconComponent}
      inputProps={inputProps}
      labelId={labelId}
      labelWidth={labelWidth}
      MenuProps={MenuProps}
      multiple={multiple}
      native={native}
      onChange={onChange}
      renderValue={renderValue}
      value={value}
      
    >
      {children}
    </Select>
  );
};

export default CustomSelect;
