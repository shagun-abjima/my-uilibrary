import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import { Fade, Backdrop } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
}));

const ReusableModal = ({
  open = false,
  onClose = () => {},
  children,
  ...otherProps
}) => {
  const classes = useStyles();

  return (
    <Modal
      open={open}
      onClose={onClose}
      className={classes.modal}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
      {...otherProps}
    >
      <Fade in={open}>
        <div>
          {children}
        </div>
      </Fade>
    </Modal>
  );
};

export default ReusableModal;
