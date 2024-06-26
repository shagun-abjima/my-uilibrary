import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, makeStyles } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const CustomAppBar = ({
  position,
  color,
  variant,
  elevation,
  children
}) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position={position} color={color} variant={variant} elevation={elevation} {...restProps}>
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            App Bar
          </Typography>
          {children}
        </Toolbar>
      </AppBar>
    </div>
  );
};

CustomAppBar.defaultProps = {
  position: 'static',
  color: 'primary',
  variant: 'elevation',
  elevation: 1,
};

export default CustomAppBar;
