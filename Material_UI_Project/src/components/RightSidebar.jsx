import React from 'react';
import { Box, Typography, Avatar, AvatarGroup, List, ListItem, ListItemAvatar, ListItemText, Divider } from '@mui/material';

const RightSidebar = () => {
  return (
    <Box flex={2} p={2} sx={{ display: { xs: 'none', md: 'block' } }}>
      <Box position="fixed" width={300}>
        <Typography variant="h6" fontWeight={100} mb={2}>
          Online Friends
        </Typography>
        
        {/* Avatar Group */}
        <AvatarGroup max={7} sx={{ mb: 3, justifyContent: 'start' }}>
          <Avatar alt="Remy Sharp" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500" />
          <Avatar alt="Travis Howard" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500" />
          <Avatar alt="Cindy Baker" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500" />
          <Avatar alt="Agnes Walker" src="" />
          <Avatar alt="Trevor Henderson" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500" />
          <Avatar alt="Profile" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500" />
        </AvatarGroup>

        <Typography variant="h6" fontWeight={100} mb={2}>
          Latest Conversations
        </Typography>

        {/* Conversations List */}
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Brunch this weekend?" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500" />
            </ListItemAvatar>
            <ListItemText
              primary="Brunch this weekend?"
              secondary="Ali Connors — I'll be in your neighborhood doing errands this..."
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Summer BBQ" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500" />
            </ListItemAvatar>
            <ListItemText
              primary="Summer BBQ"
              secondary="to Scott, Alex, Jennifer — Wish I could come, but I'm out of town this..."
            />
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default RightSidebar;