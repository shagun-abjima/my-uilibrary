import React from 'react';
import { Skeleton } from '@material-ui/lab';

const CustomSkeleton = ({
  animation,
  variant,
  width,
  height,
  style,
 
}) => {
  return (
    <Skeleton
      animation={animation}
      variant={variant}
      width={width}
      height={height}
      style={style}
      
    />
  );
};

CustomSkeleton.defaultProps = {
  animation: 'pulse',
  variant: 'text',
  width: '100%',
  height: 20,
};

export default CustomSkeleton;
