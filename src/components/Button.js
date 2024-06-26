import React from 'react';
import Button from '@material-ui/core/Button';

const ReusableButton = ({
  variant = 'contained',
  color = 'primary',
  size = 'medium',
  onClick = () => {},
  disabled = false,
  children
 
}) => {
  return (
    <Button
      variant={variant}
      color={color}
      size={size}
      onClick={onClick}
      disabled={disabled}
      
    >
      {children}
    </Button>
  );
};

export default ReusableButton;
