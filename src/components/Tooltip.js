import React from 'react';
import Tooltip from '@mui/material/Tooltip';

const CustomTooltip = ({
  title,
  arrow = false,
  placement = 'top',
  enterDelay = 0,
  leaveDelay = 0,
  children,
  
}) => {
  return (
    <Tooltip
      title={title}
      arrow={arrow}
      placement={placement}
      enterDelay={enterDelay}
      leaveDelay={leaveDelay}
      
    >
      {children}
    </Tooltip>
  );
};

export default CustomTooltip;
