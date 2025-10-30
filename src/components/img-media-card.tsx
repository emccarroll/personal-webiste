'use client';

import React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { useTheme } from 'next-themes';

interface ImgMediaCardProps {
  img: string;
  imgTitle?: string;
  header: string;
  description: string;
  cardWidth?: number;
  backgroundColor?: 'dark' | 'light';
}

const StyledCard = styled(Card)<{ width?: number }>(({ width }) => ({
  width: width || 776,
  margin: '1rem 0',
}));

const StyledCardContent = styled(CardContent)<{ backgroundcolor: string }>(({ backgroundcolor, theme }) => ({
  backgroundColor: backgroundcolor === 'dark' ? '#282C34' : '#FFFFFF',
  color: backgroundcolor === 'dark' ? '#FFFFFF' : 'inherit',
}));

export default function ImgMediaCard({
  img,
  imgTitle = '',
  header,
  description,
  cardWidth,
  backgroundColor = 'light'
}: ImgMediaCardProps) {
  const { theme } = useTheme();

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
        <StyledCardContent backgroundcolor={backgroundColor}>
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