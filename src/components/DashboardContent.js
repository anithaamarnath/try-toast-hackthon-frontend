import { AppBar, Box, CssBaseline, Toolbar, Typography } from '@mui/material';
import React, { useState } from 'react';
import Sidebar from './Sidebar';

export default function DashboardContent() {
  const [selectedItem, setSelectedItem] = useState('dashboard');  

  const handleSidebarClick = (item) => {
    setSelectedItem(item);  
  };

  return (
   
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1, backgroundColor: '#22232E' }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            REDBRICK
          </Typography>
        </Toolbar>
      </AppBar>


      <Sidebar onItemClick={handleSidebarClick} />
      
  
      <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
            marginTop: '64px', 
          }}
        >
          <Typography variant="h4" gutterBottom>
            {selectedItem === 'dashboard' && 'Dashboard Content'}
            {selectedItem === 'meetRedbrickers' && 'Meet Redbrickers Content'}
            {selectedItem === 'coffeeConnections' && 'Coffee Connections Content'}
            {selectedItem === 'communityCalendar' && 'Community Calendar Content'}
            {selectedItem === 'sharedServices' && 'Shared Services Content'}
            {selectedItem === 'finance' && 'Finance Content'}
            {selectedItem === 'peopleAndCulture' && 'People and Culture Content'}
            {selectedItem === 'templates' && 'Templates Content'}
            {selectedItem === 'devCon' && 'DevCon Content'}
            {selectedItem === 'collectiveLearning' && 'Collective Learning Content'}
            {selectedItem === 'slack' && 'Slack Content'}
            {selectedItem === 'accountSettings' && 'Account Settings Content'}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
