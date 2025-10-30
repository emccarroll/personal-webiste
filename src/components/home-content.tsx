'use client';

import { styled } from '@mui/material/styles';
import Menu from '@/components/menu';
import MenuItem from '@/components/menu-item';

const PageContainer = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  width: '100%',
  height: '100vh',
});

const LeftSection = styled('div')({
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  padding: '2rem',
});

const RightSection = styled('div')({
  flex: 1,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '2rem',
});

const NameHeader = styled('h1')(({ theme }) => ({
  fontSize: '3rem',
  marginBottom: '1rem',
  color: theme.palette.text.primary,
}));

const Statement = styled('div')(({ theme }) => ({
  fontSize: '1.5rem',
  color: theme.palette.text.secondary,
}));

export default function HomeContent() {
  return (
    <PageContainer>
      <LeftSection>
        <NameHeader>Eoghan McCarroll</NameHeader>
        <Statement>Looking to brighten the lives of others</Statement>
      </LeftSection>
      <RightSection>
        <Menu>
          <MenuItem text="Interests" />
          <MenuItem text="Work Experience" />
          <MenuItem text="Projects" />
          <MenuItem text="Future Plans" />
        </Menu>
      </RightSection>
    </PageContainer>
  );
}