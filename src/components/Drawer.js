import React from 'react';
import PropTypes from 'prop-types';
import Drawer from '@mui/material/Drawer';

const ReusableDrawer = ({
  anchor,
  open,
  onClose,
  variant,
  width,
  children,
  className,
}) => {
  return (
    <Drawer
      anchor={anchor}
      open={open}
      onClose={onClose}
      variant={variant}
      sx={{ width }}
      className={className}
    >
      {children}
    </Drawer>
  );
};


ReusableDrawer.defaultProps = {
  anchor: 'left',
  variant: 'temporary',
  width: 240,
};

ReusableDrawer.propTypes = {
  anchor: PropTypes.oneOf(['left', 'right', 'top', 'bottom']),
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  variant: PropTypes.oneOf(['permanent', 'persistent', 'temporary']),
  width: PropTypes.number,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default ReusableDrawer;
