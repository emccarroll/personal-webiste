'use client';

import { styled } from '@mui/material/styles';
import Menu from '@/components/menu';
import MenuItem from '@/components/menu-item';
import { useTheme } from '@mui/material/styles';
import { keyframes } from '@mui/system';

// Animations
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const PageContainer = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  width: '100%',
  height: '100vh',
  '@media (max-width: 768px)': {
    flexDirection: 'column',
    height: 'auto',
    minHeight: '100vh',
  },
});

const LeftSection = styled('div')(({ theme }) => ({
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  padding: 'clamp(1rem, 5vw, 4rem)',
  background: `linear-gradient(135deg, ${theme.palette.background.paper} 0%, ${theme.palette.background.default} 100%)`,
  position: 'relative',
  overflow: 'hidden',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: `linear-gradient(45deg, ${theme.palette.primary.main}15 0%, transparent 100%)`,
    zIndex: 0,
  },
  '& > *': {
    zIndex: 1,
  },
}));

const RightSection = styled('div')(({ theme }) => ({
  flex: 1,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: 'clamp(1rem, 5vw, 4rem)',
  backdropFilter: 'blur(8px)',
  backgroundColor: theme.palette.mode === 'dark' 
    ? 'rgba(18, 18, 18, 0.8)'
    : 'rgba(255, 255, 255, 0.8)',
  '@media (max-width: 768px)': {
    padding: '2rem 1rem',
  },
}));

const NameHeader = styled('h1')(({ theme }) => ({
  fontSize: 'clamp(2rem, 5vw, 4rem)',
  marginBottom: 'clamp(0.5rem, 2vw, 2rem)',
  color: theme.palette.text.primary,
  fontWeight: 700,
  animation: `${fadeIn} 0.8s ease-out`,
  '& span': {
    color: theme.palette.primary.main,
  },
}));

const Statement = styled('div')(({ theme }) => ({
  fontSize: 'clamp(1rem, 2vw, 1.5rem)',
  color: theme.palette.text.secondary,
  maxWidth: '600px',
  animation: `${fadeIn} 0.8s ease-out 0.2s backwards`,
  position: 'relative',
  '&::after': {
    content: '""',
    position: 'absolute',
    bottom: '-10px',
    left: 0,
    width: '60px',
    height: '4px',
    background: theme.palette.primary.main,
    borderRadius: '2px',
  },
}));

export default function HomeContent() {
  const theme = useTheme();

  return (
    <PageContainer>
      <LeftSection>
        <NameHeader>
          Eoghan <span>McCarroll</span>
        </NameHeader>
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