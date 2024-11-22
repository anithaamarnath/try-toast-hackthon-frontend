import React, { useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import { Grid, Paper, Typography } from '@mui/material';


const communityEvents = [
  {
    title: 'Community Meeting',
    start: '2024-11-25T10:00:00',
    end: '2024-11-25T12:00:00',
  },
  {
    title: 'Workshop on React',
    start: '2024-11-26T14:00:00',
    end: '2024-11-26T16:00:00',
  },
  {
    title: 'Networking Event',
    start: '2024-11-28T09:00:00',
    end: '2024-11-28T11:00:00',
  },
  {
    title: 'Tech Talk: AI in Development',
    start: '2024-11-30T15:00:00',
    end: '2024-11-30T17:00:00',
  },
];

export default function CommunityEventCalendar() {
  const [events, setEvents] = useState(communityEvents);

  const handleDateClick = (info) => {
    const title = prompt('Enter Event Title');
    if (title) {
      const newEvent = { title, start: info.dateStr, allDay: info.allDay };
      setEvents([...events, newEvent]);
    }
  };

  return (
    <Grid item xs={12}>
      <Typography variant="h4" gutterBottom> Community Events Calender</Typography>
    <Paper elevation={3} style={{ padding: '10px' }}>
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        events={events}
        dateClick={handleDateClick}
        headerToolbar={{
          left: 'prev,next',
          center: 'title',
          right: '',
        }}
        height="auto"
      />
    </Paper>
  </Grid>
  );
}
