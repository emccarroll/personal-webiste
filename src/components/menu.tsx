'use client';

import React from 'react';
import { styled } from '@mui/material/styles';
import { keyframes } from '@mui/system';

const staggerAnimation = keyframes`
  from {
    opacity: 0;
    transform: translateX(20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const MenuContainer = styled('nav')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  padding: 'clamp(1rem, 3vw, 2rem)',
  gap: 'clamp(0.5rem, 2vw, 1rem)',
  width: '100%',
  maxWidth: '400px',
  position: 'relative',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: '10%',
    left: '-5%',
    width: '110%',
    height: '80%',
    background: `linear-gradient(135deg, ${theme.palette.primary.main}08 0%, ${theme.palette.primary.main}03 100%)`,
    borderRadius: '16px',
    zIndex: -1,
  },
  '& > *': {
    animation: `${staggerAnimation} 0.5s ease-out backwards`,
  },
  '& > *:nth-of-type(1)': { animationDelay: '0.1s' },
  '& > *:nth-of-type(2)': { animationDelay: '0.2s' },
  '& > *:nth-of-type(3)': { animationDelay: '0.3s' },
  '& > *:nth-of-type(4)': { animationDelay: '0.4s' },
  '@media (max-width: 768px)': {
    maxWidth: '100%',
    padding: '1rem',
  },
}));

interface MenuProps {
  children: React.ReactNode;
}

export default function Menu({ children }: MenuProps) {
  return <MenuContainer>{children}</MenuContainer>;
}