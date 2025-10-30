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
  margin: 'clamp(0.25rem, 1vw, 0.5rem)',
  backgroundColor: theme.palette.background.paper,
  borderRadius: '12px',
  overflow: 'hidden',
  /* avoid animating layout properties (margin/height) to prevent sibling shifts */
  transition: 'transform 0.25s ease, box-shadow 0.25s ease, background 0.25s ease',
  boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
  willChange: 'transform',

  '&:hover': {
    transform: 'translateY(-1px)',
    boxShadow: '0 6px 16px rgba(0,0,0,0.08)',
  },

  '&.Mui-expanded': {
    /* keep the same margin when expanded so siblings don't shift */
    margin: 'clamp(0.25rem, 1vw, 0.5rem)',
    background: `linear-gradient(135deg, ${theme.palette.background.paper}, ${theme.palette.primary.main}08)`,
  },

  '& .MuiAccordionSummary-root': {
    padding: 'clamp(1rem, 2vw, 1.5rem)',
    transition: 'background-color 0.18s ease',
    minHeight: 'clamp(56px, 6vw, 64px)',

    '&:hover': {
      backgroundColor: theme.palette.action.hover,
    },
  },

  '& .MuiAccordionDetails-root': {
    padding: 'clamp(1rem, 2vw, 1.5rem)',
    backgroundColor: theme.palette.background.default,
  },
}));

const StyledFlexCol = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.5rem',
});

const StyledTypography = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.primary,
  '&.header': {
    fontSize: 'clamp(1rem, 2vw, 1.25rem)',
    fontWeight: 600,
    background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.primary.light})`,
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  },
  '&.subheader': {
    fontSize: 'clamp(0.875rem, 1.5vw, 1rem)',
    color: theme.palette.text.secondary,
  },
}));

const StyledExpandMoreIcon = styled(ExpandMoreIcon)(({ theme }) => ({
  color: theme.palette.primary.main,
  fontSize: 'clamp(1.5rem, 2.5vw, 2rem)',
  transition: 'transform 0.3s ease',
  '.Mui-expanded &': {
    transform: 'rotate(180deg)',
  },
}));

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