import React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

const ReusableTabs = ({
  value,
  onChange,
  indicatorColor,
  textColor,
  variant,
  centered,
  scrollButtons,
  scrollable,
  TabIndicatorProps,
  TabScrollButtonProps,
  className,
  children,
}) => {
  return (
    <Tabs
      value={value}
      onChange={onChange}
      indicatorColor={indicatorColor}
      textColor={textColor}
      variant={variant}
      centered={centered}
      scrollButtons={scrollButtons}
      scrollable={scrollable}
      TabIndicatorProps={TabIndicatorProps}
      TabScrollButtonProps={TabScrollButtonProps}
      className={className}
    >
      {children}
    </Tabs>
  );
};

// Default props using JavaScript default parameters
ReusableTabs.defaultProps = {
  indicatorColor: 'primary',
  textColor: 'inherit',
  variant: 'standard',
  centered: false,
  scrollButtons: 'auto',
  scrollable: false,
};

ReusableTabs.propTypes = {
  value: PropTypes.any.isRequired,
  onChange: PropTypes.func.isRequired,
  indicatorColor: PropTypes.oneOf(['primary', 'secondary']),
  textColor: PropTypes.oneOf(['inherit', 'primary', 'secondary']),
  variant: PropTypes.oneOf(['standard', 'scrollable', 'fullWidth']),
  centered: PropTypes.bool,
  scrollButtons: PropTypes.oneOf(['auto', 'desktop', 'on', 'off']),
  scrollable: PropTypes.bool,
  TabIndicatorProps: PropTypes.object,
  TabScrollButtonProps: PropTypes.object,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default ReusableTabs;
