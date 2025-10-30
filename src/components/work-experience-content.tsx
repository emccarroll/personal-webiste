'use client';

import { styled } from '@mui/material/styles';
import { keyframes } from '@mui/system';
import ImgMediaCard from './img-media-card';
import SectionHeader from './section-header';
import { useRouter } from 'next/navigation';

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const PageContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '100%',
  minHeight: '100vh',
  padding: 'clamp(1rem, 5vw, 3rem)',
  background: `linear-gradient(135deg, ${theme.palette.background.paper} 0%, ${theme.palette.background.default} 100%)`,
  position: 'relative',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: `linear-gradient(45deg, ${theme.palette.primary.main}08 0%, transparent 100%)`,
    zIndex: 0,
  },
}));

const CardsContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  gap: 'clamp(1rem, 4vw, 2.5rem)',
  alignItems: 'center',
  marginBottom: 'clamp(1rem, 3vw, 2rem)',
  width: '100%',
  maxWidth: '1200px',
  zIndex: 1,
  '& > *': {
    animation: `${fadeIn} 0.8s ease-out backwards`,
  },
  '& > *:nth-of-type(1)': { animationDelay: '0.2s' },
  '& > *:nth-of-type(2)': { animationDelay: '0.4s' },
});

// attribution was removed from layout; keep markup clean

export default function WorkExperienceContent() {
  const router = useRouter();

  const navigateToCurrentExperience = () => {
    router.push('/current-experience');
  };

  return (
    <PageContainer>
      <SectionHeader title="Work Experience" />
      <CardsContainer>
        <div onClick={navigateToCurrentExperience} style={{ cursor: 'pointer' }}>
          <ImgMediaCard
            img="/paper.jpg"
            imgTitle="Current"
            header="Current Experiences"
            description="Where I am now"
            cardWidth={776}
          />
        </div>
        <ImgMediaCard
          img="/guitar.jpg"
          imgTitle="Past"
          header="Past Experiences"
          description="Places I've worked in the past"
          cardWidth={776}
        />
      </CardsContainer>

    </PageContainer>
  );
}