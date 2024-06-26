import React from 'react';
import { CircularProgress, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  progress: {
    margin: theme.spacing(2),
  },
}));

const CustomProgress = ({
  variant,
  color,
  value,
  size,
  thickness,
  disableShrink,
  
}) => {
  const classes = useStyles();

  return (
    <CircularProgress
      className={classes.progress}
      variant={variant}
      color={color}
      value={value}
      size={size}
      thickness={thickness}
      disableShrink={disableShrink}
      
    />
  );
};

CustomProgress.defaultProps = {
  variant: 'indeterminate',
  color: 'primary',
  value: undefined,
  size: 40,
  thickness: 3.6,
  disableShrink: false,
};

export default CustomProgress;
