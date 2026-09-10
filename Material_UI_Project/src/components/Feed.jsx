import React from 'react';
import { Box, Card, CardHeader, CardMedia, CardContent, Typography, Avatar, IconButton } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { red } from '@mui/material/colors';
import heroImg from '../assets/hero.jpg'; // Aapke assets folder mein hero.png already hai!

const Feed = () => {
  return (
    <Box flex={4} p={2}>
      <Card sx={{ maxWidth: '100%' }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              R
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title="Shrimp and Chorizo Paella"
          subheader="September 14, 2016"
        />
        <CardMedia
          component="img"
          height="450"
          image={heroImg}
          alt="Paella dish"
        />
      </Card>
    </Box>
  );
};

export default Feed;