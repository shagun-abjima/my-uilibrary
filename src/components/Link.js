import React from 'react';
import PropTypes from 'prop-types';
import Link from '@mui/material/Link';

const ReusableLink = ({
  href,
  color,
  underline,
  target,
  rel,
  onClick,
  component,
  className,
  children,
}) => {
  return (
    <Link
      href={href}
      color={color}
      underline={underline}
      target={target}
      rel={rel}
      onClick={onClick}
      component={component}
      className={className}
    >
      {children}
    </Link>
  );
};


ReusableLink.defaultProps = {
  color: 'primary',
  underline: 'hover',
};

ReusableLink.propTypes = {
  href: PropTypes.string.isRequired,
  color: PropTypes.oneOf(['inherit', 'primary', 'secondary']),
  underline: PropTypes.oneOf(['none', 'hover', 'always']),
  target: PropTypes.string,
  rel: PropTypes.string,
  onClick: PropTypes.func,
  component: PropTypes.elementType,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default ReusableLink;
