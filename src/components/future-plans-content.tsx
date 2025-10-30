'use client';

import { styled } from '@mui/material/styles';
import SimpleAccordion from '@/components/simple-accordion';

const PageContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '100%',
  minHeight: '100vh',
  padding: '2rem',
  gap: '2rem',
});

const Header = styled('h1')(({ theme }) => ({
  fontSize: '2.5rem',
  marginBottom: '2rem',
  color: theme.palette.text.primary,
}));

const AccordionContainer = styled('div')({
  width: '100%',
  maxWidth: '800px',
});

export default function FuturePlansContent() {
  return (
    <PageContainer>
      <Header>Future Plans</Header>
      <AccordionContainer>
        <SimpleAccordion
          header="Short Term Goals"
          subheader="Next 6-12 months"
          content="Continue learning and growing in my current role while exploring new technologies and frameworks."
        />
        <SimpleAccordion
          header="Mid Term Goals"
          subheader="1-2 years"
          content="Take on more leadership responsibilities and contribute to larger-scale projects."
        />
        <SimpleAccordion
          header="Long Term Goals"
          subheader="3-5 years"
          content="Lead significant technical initiatives and mentor other developers in the team."
        />
      </AccordionContainer>
    </PageContainer>
  );
}