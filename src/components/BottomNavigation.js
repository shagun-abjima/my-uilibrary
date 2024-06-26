import React from 'react';
import PropTypes from 'prop-types';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';

const ReusableBottomNavigation = ({
  value,
  onChange,
  showLabels,
  className,
  children,
}) => {
  return (
    <BottomNavigation
      value={value}
      onChange={onChange}
      showLabels={showLabels}
      className={className}
    >
      {children}
    </BottomNavigation>
  );
};


ReusableBottomNavigation.defaultProps = {
  showLabels: false,
};

ReusableBottomNavigation.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  showLabels: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default ReusableBottomNavigation;
