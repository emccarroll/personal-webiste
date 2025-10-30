'use client';

import { styled } from '@mui/material/styles';
import ImgMediaCard from '@/components/img-media-card';

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
      <Header>Projects</Header>
      <ProjectsGrid>
        <ImgMediaCard
          img="/placeholder.jpg"
          header="Personal Website"
          description="A React-based personal website showcasing my work and interests"
          backgroundColor="dark"
        />
        <ImgMediaCard
          img="/placeholder.jpg"
          header="Future Projects"
          description="More projects coming soon..."
          backgroundColor="dark"
        />
      </ProjectsGrid>
    </PageContainer>
  );
}