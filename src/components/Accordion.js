import React from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Typography, makeStyles } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

const CustomAccordion = ({
  expanded,
  onChange,
  disabled,
  defaultExpanded,
  elevation,
  square,
  TransitionProps
}) => {
  const classes = useStyles();

  return (
    <Accordion
      expanded={expanded}
      onChange={onChange}
      disabled={disabled}
      defaultExpanded={defaultExpanded}
      elevation={elevation}
      square={square}
      TransitionProps={TransitionProps}
      
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel-content"
        id="panel-header"
      >
        <Typography className={classes.heading}>Accordion Summary</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
          Accordion Details: This is a customizable accordion component.
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
};

CustomAccordion.defaultProps = {
  expanded: false,
  onChange: () => {},
  disabled: false,
  defaultExpanded: false,
  elevation: 1,
  square: false,
  TransitionProps: { timeout: 500 },
};

export default CustomAccordion;
