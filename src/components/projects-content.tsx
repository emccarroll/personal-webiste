'use client';

import { styled } from '@mui/material/styles';
import ImgMediaCard from './img-media-card';
import SectionHeader from './section-header';

const PageContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '100%',
  minHeight: '100vh',
  padding: '2rem',
  gap: '2rem',
});


const ProjectsGrid = styled('div')({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
  gap: '2rem',
  width: '100%',
  maxWidth: '1200px',
});

export default function ProjectsContent() {
  return (
    <PageContainer>
  <SectionHeader title="Projects" />
      <ProjectsGrid>
        <ImgMediaCard
          img="/placeholder.jpg"
          header="Personal Website"
          description="A React-based personal website showcasing my work and interests"
        />
        <ImgMediaCard
          img="/placeholder.jpg"
          header="Future Projects"
          description="More projects coming soon..."
        />
      </ProjectsGrid>
    </PageContainer>
  );
}