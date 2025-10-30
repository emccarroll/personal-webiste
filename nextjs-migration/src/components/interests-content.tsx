'use client';

import { styled } from '@mui/material/styles';
import Image from 'next/image';
import { Metadata } from 'next';

const PageContainer = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'flex-start',
  width: '100%',
  minHeight: '100vh',
  padding: '2rem',
  gap: '2rem',
});

const LeftSection = styled('div')({
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

const RightSection = styled('div')({
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '1rem',
});

const Header = styled('h1')(({ theme }) => ({
  fontSize: '2.5rem',
  marginBottom: '1rem',
  color: theme.palette.text.primary,
  textAlign: 'center',
}));

const Statement = styled('div')(({ theme }) => ({
  fontSize: '1.2rem',
  color: theme.palette.text.secondary,
  padding: '1rem',
  textAlign: 'center',
  maxWidth: '600px',
}));

const ImageContainer = styled('div')({
  position: 'relative',
  width: '100%',
  maxWidth: '400px',
  height: '300px',
  marginBottom: '1rem',
});

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