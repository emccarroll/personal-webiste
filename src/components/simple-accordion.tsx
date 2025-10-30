'use client';

import React from 'react';
import { styled } from '@mui/material/styles';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

interface SimpleAccordionProps {
  header: string;
  subheader: string;
  content?: string;
}

const StyledAccordion = styled(Accordion)(({ theme }) => ({
  width: '100%',
  margin: theme.spacing(0.25),
  backgroundColor: '#282C34',
}));

const StyledFlexCol = styled('div')({
  display: 'flex',
  flexDirection: 'column',
});

const StyledTypography = styled(Typography)(({ theme }) => ({
  color: '#FFFFFF',
  '&.header': {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  '&.subheader': {
    fontSize: theme.typography.pxToRem(15),
  },
}));

const StyledExpandMoreIcon = styled(ExpandMoreIcon)({
  color: '#FFFFFF',
});

export default function SimpleAccordion({ 
  header, 
  subheader, 
  content = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.'
}: SimpleAccordionProps) {
  return (
    <StyledAccordion>
      <AccordionSummary
        expandIcon={<StyledExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <StyledFlexCol>
          <StyledTypography className="header">{header}</StyledTypography>
          <StyledTypography className="subheader">{subheader}</StyledTypography>
        </StyledFlexCol>
      </AccordionSummary>
      <AccordionDetails>
        <StyledTypography>{content}</StyledTypography>
      </AccordionDetails>
    </StyledAccordion>
  );
}