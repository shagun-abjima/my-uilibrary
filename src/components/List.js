import React from 'react';
import List from '@mui/material/List';

const CustomList = ({
  component = 'ul',
  dense = false,
  disablePadding = false,
  subheader
}) => {
  return (
    <List
      component={component}
      dense={dense}
      disablePadding={disablePadding}
      subheader={subheader}
     
    />
  );
};

export default CustomList;
