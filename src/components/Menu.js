import React from 'react';
import PropTypes from 'prop-types';
import Menu from '@mui/material/Menu';

const ReusableMenu = ({
  anchorEl,
  open,
  onClose,
  MenuListProps,
  TransitionComponent,
  PaperProps,
  elevation,
  getContentAnchorEl,
  anchorOrigin,
  transformOrigin,
  className,
  children,
}) => {
  return (
    <Menu
      anchorEl={anchorEl}
      open={open}
      onClose={onClose}
      MenuListProps={MenuListProps}
      TransitionComponent={TransitionComponent}
      PaperProps={PaperProps}
      elevation={elevation}
      getContentAnchorEl={getContentAnchorEl}
      anchorOrigin={anchorOrigin}
      transformOrigin={transformOrigin}
      className={className}
    >
      {children}
    </Menu>
  );
};

ReusableMenu.defaultProps = {
  anchorEl: null,
  open: false,
  MenuListProps: {},
  PaperProps: {},
  elevation: 8,
  anchorOrigin: {
    vertical: 'top',
    horizontal: 'left',
  },
  transformOrigin: {
    vertical: 'top',
    horizontal: 'left',
  },
};

ReusableMenu.propTypes = {
  anchorEl: PropTypes.object,
  open: PropTypes.bool,
  onClose: PropTypes.func.isRequired,
  MenuListProps: PropTypes.object,
  TransitionComponent: PropTypes.elementType,
  PaperProps: PropTypes.object,
  elevation: PropTypes.number,
  getContentAnchorEl: PropTypes.func,
  anchorOrigin: PropTypes.shape({
    vertical: PropTypes.oneOf(['top', 'center', 'bottom', 'baseline']),
    horizontal: PropTypes.oneOf(['left', 'center', 'right', 'baseline']),
  }),
  transformOrigin: PropTypes.shape({
    vertical: PropTypes.oneOf(['top', 'center', 'bottom']),
    horizontal: PropTypes.oneOf(['left', 'center', 'right']),
  }),
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default ReusableMenu;
