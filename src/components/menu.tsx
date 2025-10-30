'use client';

import React from 'react';
import { styled } from '@mui/material/styles';

const MenuContainer = styled('div')({
  // We'll migrate the CSS from Menu.css here
  display: 'flex',
  flexDirection: 'column',
  padding: '1rem',
});

interface MenuProps {
  children: React.ReactNode;
}

export default function Menu({ children }: MenuProps) {
  return <MenuContainer>{children}</MenuContainer>;
}