import React from 'react';
import Divider from '@mui/material/Divider';

const CustomDivider = ({
  orientation = 'horizontal',
  variant = 'fullWidth',
  flexItem = false,
  light = false,
  
}) => {
  return (
    <Divider
      orientation={orientation}
      variant={variant}
      flexItem={flexItem}
      light={light}
     
    />
  );
};

export default CustomDivider;
