import React from 'react';
import { Backdrop, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
}));

const CustomBackdrop = ({
  open,
  onClick,
  invisible,
  transitionDuration,
  children
}) => {
  const classes = useStyles();

  return (
    <Backdrop
      className={classes.backdrop}
      open={open}
      onClick={onClick}
      invisible={invisible}
      transitionDuration={transitionDuration}
    >
      {children}
    </Backdrop>
  );
};

CustomBackdrop.defaultProps = {
  open: false,
  invisible: false,
  transitionDuration: {
    enter: 300,
    exit: 300,
  },
};

export default CustomBackdrop;
