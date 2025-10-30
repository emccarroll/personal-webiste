'use client';

import { styled } from '@mui/material/styles';
import ImgMediaCard from '@/components/img-media-card';
import { useRouter } from 'next/navigation';

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
  gap: '2rem',
  alignItems: 'center',
  marginBottom: '1rem',
});

const Attribution = styled('div')(({ theme }) => ({
  fontSize: '0.8rem',
  color: theme.palette.text.secondary,
  textAlign: 'center',
  padding: '1rem',
}));

export default function WorkExperienceContent() {
  const router = useRouter();

  const navigateToCurrentExperience = () => {
    router.push('/current-experience');
  };

  return (
    <PageContainer>
      <CardsContainer>
        <div onClick={navigateToCurrentExperience} style={{ cursor: 'pointer' }}>
          <ImgMediaCard
            img="/paper.jpg"
            imgTitle="Current"
            header="Current Experiences"
            description="Where I am now"
            cardWidth={776}
            backgroundColor="dark"
          />
        </div>
        <ImgMediaCard
          img="/guitar.jpg"
          imgTitle="Past"
          header="Past Experiences"
          description="Places I've worked in the past"
          cardWidth={776}
          backgroundColor="dark"
        />
      </CardsContainer>
      <Attribution>
        &quot;Writing&quot; by jjpacres is licensed with CC BY-NC-ND 2.0. To view a copy of this license,
        visit https://creativecommons.org/licenses/by-nc-nd/2.0/
      </Attribution>
    </PageContainer>
  );
}