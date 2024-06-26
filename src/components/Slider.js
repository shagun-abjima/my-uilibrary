import React from 'react';
import Slider from '@mui/material/Slider';

const CustomSlider = ({
  ariaLabel,
  defaultValue = 0,
  disabled = false,
  max = 100,
  min = 0,
  onChange,
  onChangeCommitted,
  orientation = 'horizontal',
  step = 1,
  value,
  valueLabelDisplay = 'auto',
  valueLabelFormat,

}) => {
  return (
    <Slider
      aria-label={ariaLabel}
      defaultValue={defaultValue}
      disabled={disabled}
      max={max}
      min={min}
      onChange={onChange}
      onChangeCommitted={onChangeCommitted}
      orientation={orientation}
      step={step}
      value={value}
      valueLabelDisplay={valueLabelDisplay}
      valueLabelFormat={valueLabelFormat}
    
    />
  );
};

export default CustomSlider;
