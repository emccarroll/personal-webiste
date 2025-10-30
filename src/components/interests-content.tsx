'use client';

import { styled } from '@mui/material/styles';
import Image from 'next/image';
import { keyframes } from '@mui/system';

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const PageContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'flex-start',
  width: '100%',
  minHeight: '100vh',
  padding: 'clamp(1rem, 5vw, 3rem)',
  gap: 'clamp(1rem, 5vw, 3rem)',
  background: `linear-gradient(135deg, ${theme.palette.background.paper} 0%, ${theme.palette.background.default} 100%)`,
  '@media (max-width: 768px)': {
    flexDirection: 'column',
    alignItems: 'center',
  },
}));

const LeftSection = styled('div')(({ theme }) => ({
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  position: 'sticky',
  top: 0,
  padding: 'clamp(1rem, 3vw, 2rem)',
  animation: `${fadeIn} 0.8s ease-out`,
}));

const RightSection = styled('div')(({ theme }) => ({
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: 'clamp(1rem, 3vw, 2rem)',
  animation: `${fadeIn} 0.8s ease-out 0.2s backwards`,
}));

const Header = styled('h1')(({ theme }) => ({
  fontSize: 'clamp(2rem, 5vw, 3.5rem)',
  marginBottom: 'clamp(1rem, 3vw, 2rem)',
  color: theme.palette.text.primary,
  textAlign: 'center',
  position: 'relative',
  '&::after': {
    content: '""',
    position: 'absolute',
    bottom: '-10px',
    left: '50%',
    transform: 'translateX(-50%)',
    width: '60px',
    height: '4px',
    background: `linear-gradient(to right, ${theme.palette.primary.main}, ${theme.palette.primary.light})`,
    borderRadius: '2px',
  },
}));

const Statement = styled('div')(({ theme }) => ({
  fontSize: 'clamp(1rem, 2vw, 1.25rem)',
  lineHeight: 1.6,
  color: theme.palette.text.secondary,
  padding: 'clamp(1rem, 3vw, 2rem)',
  textAlign: 'center',
  maxWidth: '600px',
  background: theme.palette.mode === 'dark' 
    ? 'rgba(18, 18, 18, 0.5)'
    : 'rgba(255, 255, 255, 0.5)',
  backdropFilter: 'blur(8px)',
  borderRadius: '16px',
  boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
}));

const ImageContainer = styled('div')(({ theme }) => ({
  position: 'relative',
  width: '100%',
  maxWidth: '400px',
  height: 'clamp(250px, 40vw, 300px)',
  marginBottom: 'clamp(0.5rem, 2vw, 1rem)',
  borderRadius: '16px',
  overflow: 'hidden',
  boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
  transition: 'transform 0.3s ease-in-out',
  '&:hover': {
    transform: 'translateY(-2px)',
  },
  '& img': {
    transition: 'transform 0.6s ease-in-out',
  },
  '&:hover img': {
    transform: 'scale(1.02)',
  },
}));

export default function InterestsContent() {
  return (
    <PageContainer>
      <LeftSection>
        <Header>Interests</Header>
        <Statement>
          Playing guitar and listening to music are two of my favorite things to do.
          Music motivates and inspires me throughout the day while playing guitar is
          a great way to decompress.
        </Statement>
      </LeftSection>
      <RightSection>
        <ImageContainer>
          <Image
            src="/guitar.JPG"
            alt="Guitar"
            fill
            style={{ objectFit: 'cover' }}
          />
        </ImageContainer>
        <ImageContainer>
          <Image
            src="/album.JPG"
            alt="Album"
            fill
            style={{ objectFit: 'cover' }}
          />
        </ImageContainer>
        <Statement>I started a vinyl collection a few years ago.</Statement>
      </RightSection>
    </PageContainer>
  );
}