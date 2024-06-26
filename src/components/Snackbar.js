import React from 'react';
import { Snackbar, makeStyles } from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';

const useStyles = makeStyles((theme) => ({
  snackbar: {
    [theme.breakpoints.down('xs')]: {
      bottom: 90,
    },
  },
}));

const CustomSnackbar = ({
  open,
  autoHideDuration,
  onClose,
  anchorOrigin,
  message,
  severity
}) => {
  const classes = useStyles();

  return (
    <Snackbar
      open={open}
      autoHideDuration={autoHideDuration}
      onClose={onClose}
      anchorOrigin={anchorOrigin}
      className={classes.snackbar}
    
    >
      <MuiAlert elevation={6} variant="filled" onClose={onClose} severity={severity}>
        {message}
      </MuiAlert>
    </Snackbar>
  );
};

CustomSnackbar.defaultProps = {
  open: false,
  autoHideDuration: 6000,
  anchorOrigin: {
    vertical: 'bottom',
    horizontal: 'left',
  },
  message: 'Snackbar message',
  severity: 'info',
};

export default CustomSnackbar;
