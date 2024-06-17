import React from 'react';
import TextField from '@mui/material/TextField';
import PropTypes from 'prop-types';
const ReusableTextField = ({ label, variant, type, fullWidth, value, onChange, disabled }) => {
   return (
<TextField
           label={label}
           variant={variant}
           type={type}
           fullWidth={fullWidth}
           value={value}
           onChange={onChange}
           disabled={disabled}
       />
   );
};
ReusableTextField.propTypes = {
   label: PropTypes.string.isRequired,
   variant: PropTypes.oneOf(['outlined', 'filled', 'standard']),
   type: PropTypes.string,
   fullWidth: PropTypes.bool,
   value: PropTypes.string,
   onChange: PropTypes.func,
   disabled: PropTypes.bool,
};
ReusableTextField.defaultProps = {
   variant: 'outlined',
   type: 'text',
   fullWidth: true,
   value: '',
   onChange: () => {},
   disabled: false,
};
export default ReusableTextField;l