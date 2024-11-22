import React, { useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import { Grid, Paper, Typography } from '@mui/material';

const titleStyle = {
  fontWeight: 'bold',
  color: '#22232E',
}


const initialEvents = [
  {
    title: 'Coffee with Alice',
    start: '2024-11-22T10:00:00',
    end: '2024-11-22T11:00:00',
  },
  {
    title: 'Team Coffee Chat',
    start: '2024-11-23T14:00:00',
    end: '2024-11-23T15:30:00',
  },
];

export default function CoffeeConnections() {
  const [events, setEvents] = useState(initialEvents);

  const handleDateClick = (info) => {
    const title = prompt('Enter Event Title');
    if (title) {
      const newEvent = { title, start: info.dateStr, allDay: info.allDay };
      setEvents([...events, newEvent]);
    }
  };

  return (
   
      <Grid item xs={12}>
         <Typography variant="h4" sx={titleStyle} gutterBottom> Coffee Connections</Typography>
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
