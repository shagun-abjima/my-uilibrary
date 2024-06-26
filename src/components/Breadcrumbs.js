import React from 'react';
import PropTypes from 'prop-types';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

const ReusableBreadcrumbs = ({
  separator,
  ariaLabel,
  maxItems,
  children,
  className,
}) => {
  return (
    <Breadcrumbs
      separator={separator}
      aria-label={ariaLabel}
      maxItems={maxItems}
      className={className}
    >
      {children}
    </Breadcrumbs>
  );
};

ReusableBreadcrumbs.defaultProps = {
  separator: <NavigateNextIcon fontSize="small" />,
};

ReusableBreadcrumbs.propTypes = {
  separator: PropTypes.node,
  ariaLabel: PropTypes.string,
  maxItems: PropTypes.number,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default ReusableBreadcrumbs;
