import React from 'react';
import { Card, CardContent, CardActions, Typography, Button, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    maxWidth: 400,
    marginBottom: 20,
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const CustomCard = ({
  variant,
  raised,
  square,
  elevation,
  onClick,
  children
}) => {
  const classes = useStyles();

  return (
    <Card
      variant={variant}
      raised={raised}
      square={square}
      elevation={elevation}
      className={classes.root}
     
    >
      <CardContent>
        <Typography variant="h5" component="h2">
          Card Title
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          Subtitle
        </Typography>
        <Typography variant="body2" component="p">
          Card Content: Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={onClick}>Learn More</Button>
      </CardActions>
    </Card>
  );
};

CustomCard.defaultProps = {
  variant: 'outlined',
  raised: false,
  square: false,
  elevation: 1,
  onClick: () => {},
};

export default CustomCard;
