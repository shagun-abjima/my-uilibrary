import React from 'react';
import Button from '@mui/material/Button';
import PropTypes from 'prop-types';
const ReusableButton = ({ variant, color, size, onClick, disabled, children }) => {
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
ReusableButton.propTypes = {
   variant: PropTypes.oneOf(['text', 'outlined', 'contained']),
   color: PropTypes.oneOf(['default', 'primary', 'secondary', 'error', 'info', 'success', 'warning']),
   size: PropTypes.oneOf(['small', 'medium', 'large']),
   onClick: PropTypes.func,
   disabled: PropTypes.bool,
   children: PropTypes.node.isRequired,
};
ReusableButton.defaultProps = {
   variant: 'contained',
   color: 'primary',
   size: 'medium',
   onClick: () => {},
   disabled: false,
};
export default ReusableButton;