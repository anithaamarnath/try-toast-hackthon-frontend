import React from 'react';
import { Box, Avatar } from '@mui/material';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';

const BotIcon = () => {
  return (
    <Box 
      sx={{
        position: 'fixed',  
        bottom: 16, 
        right: 16, 
        backgroundColor: '#22232E', 
        borderRadius: '50%',
        padding: '6px',
        zIndex: 9999,  
      }}
    >
      <Avatar sx={{ bgcolor: 'white', color: '#22232E', width: 40, height: 40 }}>
        <QuestionAnswerIcon />
      </Avatar>
    </Box>
  );
};

export default BotIcon;
