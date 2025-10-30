"use client";

import React from 'react';
import { styled } from '@mui/material/styles';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
}

const Header = styled('h1')(({ theme }) => ({
  fontSize: 'clamp(2rem, 5vw, 3.5rem)',
  marginBottom: 'clamp(1rem, 3vw, 2rem)',
  color: theme.palette.text.primary,
  textAlign: 'center',
  position: 'relative',
  lineHeight: 1.05,
  '&::after': {
    content: '""',
    position: 'absolute',
    bottom: '-10px',
    left: '50%',
    transform: 'translateX(-50%)',
    width: '64px',
    height: '4px',
    background: `linear-gradient(to right, ${theme.palette.primary.main}, ${theme.palette.primary.light})`,
    borderRadius: '2px',
  },
}));

const Subtitle = styled('p')(({ theme }) => ({
  fontSize: 'clamp(0.95rem, 1.6vw, 1.1rem)',
  color: theme.palette.text.secondary,
  textAlign: 'center',
  marginTop: '0.25rem',
  marginBottom: '0.5rem',
}));

export default function SectionHeader({ title, subtitle }: SectionHeaderProps) {
  return (
    <header>
      <Header>{title}</Header>
      {subtitle ? <Subtitle>{subtitle}</Subtitle> : null}
    </header>
  );
}
