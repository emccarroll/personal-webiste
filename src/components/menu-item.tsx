'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { styled } from '@mui/material/styles';

const MenuItemContainer = styled('div')(({ theme }) => ({
  cursor: 'pointer',
  padding: 'clamp(0.5rem, 2vw, 1rem) clamp(1rem, 3vw, 1.5rem)',
  transition: 'all 0.3s ease-in-out',
  position: 'relative',
  borderRadius: '8px',
  fontSize: 'clamp(1rem, 2vw, 1.25rem)',
  fontWeight: 500,
  color: theme.palette.text.primary,
  background: `linear-gradient(to right, ${theme.palette.background.paper}, ${theme.palette.background.default})`,
  boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
  
  '&:hover': {
    transform: 'translateY(-1px)',
    boxShadow: '0 3px 8px rgba(0,0,0,0.1)',
    background: `linear-gradient(135deg, ${theme.palette.primary.main}10, ${theme.palette.background.paper})`,
    
    '& hr': {
      transform: 'scaleX(1)',
      opacity: 0.7,
    }
  },

  '& hr': {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    height: '2px',
    background: `linear-gradient(to right, ${theme.palette.primary.main}, ${theme.palette.primary.light})`,
    border: 'none',
    margin: 0,
    transform: 'scaleX(0)',
    opacity: 0,
    transition: 'transform 0.3s ease-in-out, opacity 0.2s ease-in-out',
    transformOrigin: 'left',
  },

  '@media (max-width: 768px)': {
    fontSize: '1rem',
    padding: '0.75rem 1rem',
  }
}));

interface MenuItemProps {
  text: string;
}

export default function MenuItem({ text }: MenuItemProps) {
  const router = useRouter();

  const navigate = () => {
    router.push(`/${text.replace(/\s/g, '').toLowerCase()}`);
  };

  return (
    <MenuItemContainer onClick={navigate}>
      {text}
      <hr />
    </MenuItemContainer>
  );
}