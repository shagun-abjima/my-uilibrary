import React from 'react';
import PropTypes from 'prop-types';
import Pagination from '@mui/material/Pagination';

const ReusablePagination = ({
  count,
  page,
  onChange,
  color,
  disabled,
  hideNextButton,
  hidePrevButton,
  renderItem,
  shape,
  size,
  siblingCount,
  showFirstButton,
  showLastButton,
  className,
}) => {
  return (
    <Pagination
      count={count}
      page={page}
      onChange={onChange}
      color={color}
      disabled={disabled}
      hideNextButton={hideNextButton}
      hidePrevButton={hidePrevButton}
      renderItem={renderItem}
      shape={shape}
      size={size}
      siblingCount={siblingCount}
      showFirstButton={showFirstButton}
      showLastButton={showLastButton}
      className={className}
    />
  );
};


ReusablePagination.defaultProps = {
  color: 'primary',
  disabled: false,
  hideNextButton: false,
  hidePrevButton: false,
  shape: 'round',
  size: 'medium',
  siblingCount: 1,
  showFirstButton: false,
  showLastButton: false,
};

ReusablePagination.propTypes = {
  count: PropTypes.number.isRequired,
  page: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
  color: PropTypes.oneOf(['primary', 'secondary', 'standard']),
  disabled: PropTypes.bool,
  hideNextButton: PropTypes.bool,
  hidePrevButton: PropTypes.bool,
  renderItem: PropTypes.func,
  shape: PropTypes.oneOf(['round', 'rounded', 'square']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  siblingCount: PropTypes.number,
  showFirstButton: PropTypes.bool,
  showLastButton: PropTypes.bool,
  className: PropTypes.string,
};

export default ReusablePagination;
