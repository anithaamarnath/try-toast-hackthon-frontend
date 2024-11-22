import React from 'react';
import { Box, Typography, Paper, Avatar, List, ListItem, ListItemAvatar, ListItemText, Button } from '@mui/material';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';


export default function DashboardFullContent() {
  const titleStyle = {
    fontWeight: 'bold',
    color: '#22232E',
    textAlign: 'center'
  }
  const leaderboardData = [
    { id: 1, name: 'John Doe', points: 1200, profilePic: '/path-to-image1.jpg' },
    { id: 2, name: 'Jane Smith', points: 1100, profilePic: '/path-to-image2.jpg' },
    { id: 3, name: 'Alice Johnson', points: 1050, profilePic: '/path-to-image3.jpg' },
    { id: 4, name: 'Bob Brown', points: 1000, profilePic: '/path-to-image4.jpg' },
    { id: 5, name: 'Charlie White', points: 950, profilePic: '/path-to-image5.jpg' },
  ];

  const generalAnnouncements = [
    { id: 1, title: 'System Maintenance', details: 'Scheduled maintenance on November 25th from 1 AM to 3 AM.' },
    { id: 2, title: 'Holiday Announcement', details: 'The office will be closed on December 25th for Christmas.' },
    { id: 3, title: 'Policy Update', details: 'The company has updated its remote work policy effective January 1st.' },
    { id: 4, title: 'New Office Location', details: 'We are opening a new office in Seattle next month.' },
    { id: 5, title: 'Team Lunch', details: 'Join us for a team lunch on November 30th at the main cafeteria.' },
  ];

  const portfolioAnnouncements = [
    { id: 1, title: 'Funding Round', details: 'Portfolio Company ABC raised $5M in Series A funding.' },
    { id: 2, title: 'New Partnership', details: 'Portfolio Company XYZ partnered with Global Inc.' },
    { id: 3, title: 'Product Launch', details: 'Portfolio Company DEF launched their new app last week.' },
    { id: 4, title: 'Leadership Change', details: 'Portfolio Company GHI appointed a new CEO.' },
    { id: 5, title: 'Acquisition', details: 'Portfolio Company JKL was acquired by a major tech firm.' },
  ];

  const slackMessages = 'Catch up with the latest team discussions on Slack!';
  const upcomingEvents = 'Join our upcoming town hall meeting on November 30th.';
  const meetRedbricker = 'Get to know Jane Doe, our new software engineer!';
  const recentLearning = 'Check out our recent workshop on React best practices.';

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, p: 2, height: '100vh' }}>
      {/* Top Section: Leaderboard and Announcements */}
      <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 2, flex: 1 }}>
        {/* Leaderboard Section - Reduced width */}
        <Box sx={{ flex: 0.5 }}>
          <Paper elevation={3} sx={{ p: 2, height: '100%', backgroundColor: '#E8F0FE' }}>
            <Typography variant="h5" sx={titleStyle} gutterBottom>
              Leaderboard
            </Typography>
            <List>
              {leaderboardData.map((item, index) => (
                <ListItem key={item.id}>
                  <ListItemAvatar>
                    {index < 3 ? (
                      <Avatar sx={{ bgcolor: 'gold' }}>
                        <EmojiEventsIcon />
                      </Avatar>
                    ) : (
                      <Avatar src={item.profilePic} />
                    )}
                  </ListItemAvatar>
                  <ListItemText
                    primary={item.name}
                    secondary={`Points: ${item.points}`}
                  />
                </ListItem>
              ))}
            </List>
          </Paper>
        </Box>

        {/* Announcements Section - Expanded width */}
        <Box sx={{ flex: 1.5 }}>
          <Paper elevation={3} sx={{ p: 2, height: '100%' , backgroundColor: '#E8F0FE'}}>
            <Typography variant="h5" sx={titleStyle} gutterBottom>
              Announcements
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 2 }}>
              {/* General Announcements */}
              <Box sx={{ flex: 1 }}>
                <Paper elevation={1} sx={{ p: 2 }}>
                  <Typography variant="subtitle1" sx={titleStyle} gutterBottom>
                    General Announcements
                  </Typography>
                  {generalAnnouncements.map((announcement) => (
                    <Typography key={announcement.id} variant="body2" gutterBottom>
                      <strong>{announcement.title}:</strong> {announcement.details}
                    </Typography>
                  ))}
                </Paper>
              </Box>

              {/* Portfolio Announcements */}
              <Box sx={{ flex: 1 }}>
                <Paper elevation={1} sx={{ p: 2 }}>
                  <Typography variant="subtitle1" sx={titleStyle} gutterBottom>
                    Portfolio Company Announcements
                  </Typography>
                  {portfolioAnnouncements.map((announcement) => (
                    <Typography key={announcement.id} variant="body2" gutterBottom>
                      <strong>{announcement.title}:</strong> {announcement.details}
                    </Typography>
                  ))}
                </Paper>
              </Box>
            </Box>
          </Paper>
        </Box>
      </Box>

      {/* Bottom Section: Remaining Sections */}
      <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 2, flex: 2 }}>
        <Box sx={{ flex: 1 }}>
          <Paper elevation={3} sx={{ p: 2}}>
            <Typography variant="h5" sx={titleStyle}>Slack Messages</Typography>
            <Paper elevation={3} sx={{ p: 2 }}>
              <Typography variant="body2">{slackMessages}</Typography>
            </Paper>
          </Paper>
        </Box>

        <Box sx={{ flex: 1 }}>
          <Paper elevation={3} sx={{ p: 2 }}>
            <Typography variant="h5" sx={titleStyle}>Upcoming Events</Typography>
            <Paper elevation={3} sx={{ p: 2 }}>
            <Typography variant="body2">{upcomingEvents}</Typography>
            </Paper>
          </Paper>
        </Box>

        <Box sx={{ flex: 1 }}>
          <Paper elevation={3} sx={{ p: 2 }}>
            <Typography variant="h5" sx={titleStyle}>Meet Redbricker</Typography>
            <Paper elevation={3} sx={{ p: 2 }}>
            
            <Typography variant="body2">{meetRedbricker}</Typography>
            </Paper>
            {/* <Button
          sx={{ textTransform: 'none', }}
          onClick={() => alert('View more clicked!')} // Add action or navigation here
        >
          <Typography variant="body2" sx={{ color: '#22232E', textDecoration: 'underline'}}>
            View More
          </Typography>
        </Button> */}
          </Paper>
        </Box>

        <Box sx={{ flex: 1 }}>
          <Paper elevation={3} sx={{ p: 2 }}>
            <Typography variant="h6" sx={titleStyle}>Collective Learning</Typography>
            <Paper elevation={3} sx={{ p: 2 }}>
            <Typography variant="body2">{recentLearning}</Typography>
            </Paper>
          </Paper>
        </Box>
      </Box>
    </Box>
  );
}
