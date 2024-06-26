import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Popper from '@material-ui/core/Popper';

const useStyles = makeStyles((theme) => ({
  popper: {
    zIndex: theme.zIndex.tooltip,
  },
}));

const ReusablePopper = ({
  open = false,
  anchorEl = null,
  placement = 'bottom',
  modifiers = [],
  children,
  ...otherProps
}) => {
  const classes = useStyles();

  return (
    <Popper
      open={open}
      anchorEl={anchorEl}
      placement={placement}
      modifiers={modifiers}
      className={classes.popper}
      {...otherProps}
    >
      {children}
    </Popper>
  );
};

export default ReusablePopper;
