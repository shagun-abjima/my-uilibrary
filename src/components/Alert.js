import React from 'react';
import Alert from '@mui/material/Alert';

const CustomAlert = ({
  severity = 'info',
  variant = 'standard',
  icon = null,
  onClose = null,
  closeText = 'Close',
  children,
 
}) => {
  return (
    <Alert
      severity={severity}
      variant={variant}
      icon={icon}
      onClose={onClose}
      closeText={closeText}
      
    >
      {children}
    </Alert>
  );
};

export default CustomAlert;
