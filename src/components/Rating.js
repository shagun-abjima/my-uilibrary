import React from 'react';
import Rating from '@mui/material/Rating';

const CustomRating = ({
  name,
  value = null,
  precision = 1,
  size = 'medium',
  disabled = false,
  readOnly = false,
  onChange

}) => {
  return (
    <Rating
      name={name}
      value={value}
      precision={precision}
      size={size}
      disabled={disabled}
      readOnly={readOnly}
      onChange={onChange}
    
    />
  );
};

export default CustomRating;
