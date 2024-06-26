import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Popover from '@material-ui/core/Popover';

const useStyles = makeStyles((theme) => ({
  popover: {
    pointerEvents: 'none',
  },
  paper: {
    padding: theme.spacing(2),
  },
}));

const ReusablePopover = ({
  open = false,
  anchorEl = null,
  onClose = () => {},
  children,
  ...otherProps
}) => {
  const classes = useStyles();

  return (
    <Popover
      open={open}
      anchorEl={anchorEl}
      onClose={onClose}
      classes={{
        paper: classes.paper,
      }}
      {...otherProps}
    >
      {children}
    </Popover>
  );
};

export default ReusablePopover;
