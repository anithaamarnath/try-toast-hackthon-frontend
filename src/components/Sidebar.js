import ArticleRoundedIcon from '@mui/icons-material/ArticleRounded';
import AttachMoneyRoundedIcon from '@mui/icons-material/AttachMoneyRounded';
import CalendarMonthRoundedIcon from '@mui/icons-material/CalendarMonthRounded';
import CastForEducationRoundedIcon from '@mui/icons-material/CastForEducationRounded';
import CoffeeRoundedIcon from '@mui/icons-material/CoffeeRounded';
import DashboardIcon from '@mui/icons-material/Dashboard';
import Diversity3RoundedIcon from '@mui/icons-material/Diversity3Rounded';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import GroupsRoundedIcon from '@mui/icons-material/GroupsRounded';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import ShareRoundedIcon from '@mui/icons-material/ShareRounded';
import TextsmsRoundedIcon from '@mui/icons-material/TextsmsRounded';
import TransferWithinAStationRoundedIcon from '@mui/icons-material/TransferWithinAStationRounded';
import {
  Box,
  Collapse,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
  useMediaQuery
} from '@mui/material';
import React, { useState } from 'react';

export default function Sidebar({ onItemClick }) {
  const drawerWidth = 240;

  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down('sm'));

  const [openDashboard, setOpenDashboard] = useState(false);

  const handleDashboardClick = () => {
    setOpenDashboard((prev) => !prev); // Toggle the collapse state
  };

  const handleItemClick = (item) => {
    onItemClick(item);  // Call the parent function to update the selected item
  };

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: isSmallScreen ? 60 : drawerWidth, 
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: {
          width: isSmallScreen ? 60 : drawerWidth, 
          boxSizing: 'border-box',
          overflowX: 'hidden', 
        },
      }}
    >
      <Toolbar />
      <List>
        {/* Dashboard */}
        <ListItem button onClick={() => handleItemClick('dashboard')}>
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          {!isSmallScreen && <ListItemText primary="Dashboard" />}
        </ListItem>
        
        {/* Meet Redbrickers */}
        <ListItem button onClick={() => handleItemClick('meetRedbrickers')}>
          <ListItemIcon>
            <GroupsRoundedIcon />
          </ListItemIcon>
          {!isSmallScreen && <ListItemText primary="Meet Redbrickers" />}
        </ListItem>

        {/* Coffee Connections */}
        <ListItem button onClick={() => handleItemClick('coffeeConnections')}>
          <ListItemIcon>
            <CoffeeRoundedIcon />
          </ListItemIcon>
          {!isSmallScreen && <ListItemText primary="Coffee Connections" />}
        </ListItem>

        {/* Community Calendar */}
        <ListItem button onClick={() => handleItemClick('communityCalendar')}>
          <ListItemIcon>
            <CalendarMonthRoundedIcon />
          </ListItemIcon>
          {!isSmallScreen && <ListItemText primary="Community Calendar" />}
        </ListItem>

        {/* Shared Services */}
        <ListItem button onClick={handleDashboardClick}>
          <ListItemIcon>
            <ShareRoundedIcon />
          </ListItemIcon>
          {!isSmallScreen && <ListItemText primary="Shared Services" />}
          {!isSmallScreen && (openDashboard ? <ExpandLessIcon /> : <ExpandMoreIcon />)}
        </ListItem>

        {/* Collapse Content */}
        <Collapse in={openDashboard} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {/* Finance */}
            <ListItem button sx={{ pl: 4 }} onClick={() => handleItemClick('finance')}>
              <ListItemIcon>
                <AttachMoneyRoundedIcon />
              </ListItemIcon>
              {!isSmallScreen && <ListItemText primary="Finance" />}
            </ListItem>
            {/* People and Culture */}
            <ListItem button sx={{ pl: 4 }} onClick={() => handleItemClick('peopleAndCulture')}>
              <ListItemIcon>
                <Diversity3RoundedIcon />
              </ListItemIcon>
              {!isSmallScreen && <ListItemText primary="People and Culture" />}
            </ListItem>
          </List>
        </Collapse>

        {/* Other Menu Items */}
        <ListItem button onClick={() => handleItemClick('templates')}>
          <ListItemIcon>
            <ArticleRoundedIcon />
          </ListItemIcon>
          {!isSmallScreen && <ListItemText primary="Templates" />}
        </ListItem>

        <ListItem button onClick={() => handleItemClick('devCon')}>
          <ListItemIcon>
            <TransferWithinAStationRoundedIcon />
          </ListItemIcon>
          {!isSmallScreen && <ListItemText primary="DevCon" />}
        </ListItem>

        <ListItem button onClick={() => handleItemClick('collectiveLearning')}>
          <ListItemIcon>
            <CastForEducationRoundedIcon />
          </ListItemIcon>
          {!isSmallScreen && <ListItemText primary="Collective Learning" />}
        </ListItem>

        <ListItem button onClick={() => handleItemClick('slack')}>
          <ListItemIcon>
            <TextsmsRoundedIcon />
          </ListItemIcon>
          {!isSmallScreen && <ListItemText primary="Slack" />}
        </ListItem>
      </List>
      <Box sx={{ flexGrow: 1 }} />
      <List>
        <ListItem button onClick={() => handleItemClick('accountSettings')}>
          <ListItemIcon>
            <SettingsRoundedIcon />
          </ListItemIcon>
          {!isSmallScreen && <ListItemText primary="Account Settings" />}
        </ListItem>
        <ListItem button onClick={() => handleItemClick('logout')}>
          <ListItemIcon>
            <LogoutRoundedIcon />
          </ListItemIcon>
          {!isSmallScreen && <ListItemText primary="Logout" />}
        </ListItem>
      </List>
    </Drawer>
  );
}
