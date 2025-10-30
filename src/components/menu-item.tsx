'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { styled } from '@mui/material/styles';

const MenuItemContainer = styled('div')(({ theme }) => ({
  cursor: 'pointer',
  padding: '0.5rem 1rem',
  transition: 'background-color 0.2s ease',
  '&:hover': {
    backgroundColor: theme.palette.action.hover,
  },
  '& hr': {
    border: 'none',
    height: '1px',
    backgroundColor: theme.palette.divider,
    margin: '0.5rem 0',
  },
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