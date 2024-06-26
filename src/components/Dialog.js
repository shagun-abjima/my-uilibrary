import React from 'react';
import { Dialog, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  dialog: {
    '& .MuiDialog-paper': {
      padding: theme.spacing(2),
    },
  },
}));

const CustomDialog = ({
  open,
  onClose,
  children,
  fullWidth,
  maxWidth,
  scroll
}) => {
  const classes = useStyles();

  return (
    <Dialog
      className={classes.dialog}
      open={open}
      onClose={onClose}
      fullWidth={fullWidth}
      maxWidth={maxWidth}
      scroll={scroll}
    >
      {children}
    </Dialog>
  );
};

CustomDialog.defaultProps = {
  open: false,
  fullWidth: true,
  maxWidth: 'sm',
  scroll: 'body',
};

export default CustomDialog;
