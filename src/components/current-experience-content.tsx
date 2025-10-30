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
});

const CardsContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
  alignItems: 'center',
  marginBottom: '1rem',
});

export default function CurrentExperienceContent() {
  return (
    <PageContainer>
      <CardsContainer>
        <SimpleAccordion header="TA" subheader="University at Buffalo" content="Assisted in course instruction, grading, and student support." />
        <SimpleAccordion header="Software Engineer" subheader="Sonet Inc" content="Working on web platform features, unit tests, and CI/CD improvements." />
      </CardsContainer>
    </PageContainer>
  );
}
