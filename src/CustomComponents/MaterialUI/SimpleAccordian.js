import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    margin:2,
  },
  background: {
    backgroundColor: "#282C34",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
    color: "#FFFFFF"
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: "#FFFFFF",
  },
  whiteText: {
    color: "#FFFFFF",
  },
}));

export default function SimpleAccordion(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Accordion className={classes.background}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className={classes.whiteText}/>}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <div className="flexCol">
          <Typography className={classes.heading}>{props.header}</Typography>
          <Typography className={classes.secondaryHeading}>{props.subheader}</Typography>
          </div>
          
        </AccordionSummary>
        <AccordionDetails>
          <Typography className={classes.whiteText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
