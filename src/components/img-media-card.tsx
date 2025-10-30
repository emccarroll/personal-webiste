'use client';

import React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
interface ImgMediaCardProps {
  img: string;
  imgTitle?: string;
  header: string;
  description: string;
  cardWidth?: number;
}

const StyledCard = styled(Card)<{ width?: number }>(({ width, theme }) => ({
  width: width || 'min(776px, 95vw)',
  margin: 'clamp(1rem, 3vw, 2rem) 0',
  borderRadius: '16px',
  overflow: 'hidden',
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  background: theme.palette.background.paper,
  boxShadow: '0 4px 20px rgba(0,0,0,0.1)',

  '&:hover': {
    transform: 'translateY(-4px)',
    boxShadow: '0 8px 20px rgba(0,0,0,0.1)',

    '& .MuiCardMedia-root': {
      transform: 'scale(1.02)',
    },
  },

  '& .MuiCardMedia-root': {
    transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
    transformOrigin: 'center center',
  },

  '@media (max-width: 768px)': {
    width: '100%',
    margin: '1rem 0',
  },
}));

const StyledCardContent = styled(CardContent)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? 
    'rgba(40, 44, 52, 0.95)' : 
    'rgba(255, 255, 255, 0.95)',
  color: theme.palette.text.primary,
  backdropFilter: 'blur(8px)',
  transition: 'all 0.3s ease',
  
  '& .MuiTypography-h5': {
    fontSize: 'clamp(1.25rem, 2.5vw, 1.5rem)',
    fontWeight: 600,
    marginBottom: '0.5rem',
    background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.primary.light})`,
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  },

  '& .MuiTypography-body2': {
    fontSize: 'clamp(0.875rem, 1.5vw, 1rem)',
    color: theme.palette.text.secondary,
    lineHeight: 1.6,
  },
}));

export default function ImgMediaCard({
  img,
  imgTitle = '',
  header,
  description,
  cardWidth
}: ImgMediaCardProps) {
  return (
    <StyledCard width={cardWidth}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Card Image"
          height={476}
          image={img}
          title={imgTitle}
        />
        <StyledCardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {header}
          </Typography>
          <Typography variant="body2" component="p">
            {description}
          </Typography>
        </StyledCardContent>
      </CardActionArea>
    </StyledCard>
  );
}