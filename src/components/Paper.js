import React from 'react';
import { Paper, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    marginBottom: theme.spacing(2),
  },
}));

const CustomPaper = ({
  elevation,
  square,
  variant,
  component,
  children
}) => {
  const classes = useStyles();

  return (
    <Paper
      elevation={elevation}
      square={square}
      variant={variant}
      component={component}
      className={classes.paper}
      
    >
      {children}
    </Paper>
  );
};

CustomPaper.defaultProps = {
  elevation: 1,
  square: false,
  variant: 'elevation',
  component: 'div',
};

export default CustomPaper;
