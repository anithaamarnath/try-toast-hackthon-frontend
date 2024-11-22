import React, { useState } from 'react';
import {
  Avatar,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Box,
  Grid,
  TextField,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
} from '@mui/material';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import shift from '../images/shift.png';
import delivra from '../images/delivra.png';
import leadpages from '../images/leadpages.png';
import animoto from '../images/animoto.png';

const companies = [
  { id: 1, companyName: 'Leadpages', logo: leadpages },
  { id: 2, companyName: 'Delivra', logo: delivra },
  { id: 3, companyName: 'Shift', logo: shift },
  { id: 4, companyName: 'Animoto', logo: animoto },
];

const filterData = [
  {
    id: 1,
    name: 'John Doe',
    profile: '/path-to-profile1.jpg',
    role: 'Developer',
    experts: 'React, Node.js',
    company: 'Leadpages',
  },
  {
    id: 2,
    name: 'Jane Smith',
    profile: '/path-to-profile2.jpg',
    role: 'Designer',
    experts: 'UI/UX, Figma',
    company: 'Delivra',
  },
  {
    id: 3,
    name: 'Alice Johnson',
    profile: '/path-to-profile3.jpg',
    role: 'Manager',
    experts: 'Agile, Scrum',
    company: 'Shift',
  },
  {
    id: 4,
    name: 'Bob Brown',
    profile: '/path-to-profile4.jpg',
    role: 'Developer',
    experts: 'Java, Spring',
    company: 'Animoto',
  },
  {
    id: 5,
    name: 'Charlie Blue',
    profile: '/path-to-profile5.jpg',
    role: 'Tester',
    experts: 'Selenium, JUnit',
    company: 'Leadpages',
  },
  {
    id: 6,
    name: 'David Green',
    profile: '/path-to-profile6.jpg',
    role: 'Developer',
    experts: 'Python, Flask',
    company: 'Delivra',
  },
  {
    id: 7,
    name: 'Eve White',
    profile: '/path-to-profile7.jpg',
    role: 'HR',
    experts: 'Employee Relations',
    company: 'Shift',
  },
  {
    id: 8,
    name: 'Frank Black',
    profile: '/path-to-profile8.jpg',
    role: 'QA Engineer',
    experts: 'Automation Testing',
    company: 'Animoto',
  },
];

export default function MeetRedbrickers() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedPortfolio, setSelectedPortfolio] = useState('Leadpages'); // Default to 'Leadpages'
  const [filteredData, setFilteredData] = useState(
    filterData.filter((item) => item.company === 'Leadpages') // Filter only 'Leadpages' initially
  );
  const [calendarOpen, setCalendarOpen] = useState(false);
  const [selectedPerson, setSelectedPerson] = useState(null);

  // Handle Search
  const handleSearchChange = (event) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);
    setFilteredData(
      filterData.filter(
        (item) =>
          (selectedPortfolio ? item.company === selectedPortfolio : true) &&
          (item.name.toLowerCase().includes(query) || item.role.toLowerCase().includes(query))
      )
    );
  };

  // Handle Portfolio Selection
  const handlePortfolioClick = (portfolio) => {
    setSelectedPortfolio(portfolio);
    setFilteredData(filterData.filter((item) => item.company === portfolio));
  };

  // Handle Open Calendar
  const handleOpenCalendar = (person) => {
    setSelectedPerson(person);
    setCalendarOpen(true);
  };

  // Handle Close Calendar
  const handleCloseCalendar = () => {
    setCalendarOpen(false);
    setSelectedPerson(null);
  };

  return (
    <Box sx={{ p: 3 }}>
      <Grid container spacing={3}>
        {/* Portfolio Grid */}
        <Grid item xs={12}>
          <Grid container spacing={2}>
            {companies.map((company) => (
              <Grid item xs={12} sm={6} md={3} key={company.id}>
                <Button
                  sx={{
                    p: 0, // Remove padding to let the logo fill the button area
                    border: '1px solid #ddd',
                    borderRadius: '4px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: selectedPortfolio === company.companyName ? '#A7BBD3' : 'white',
                    width: '100%', // Make button fill the entire grid item
                  }}
                  onClick={() => handlePortfolioClick(company.companyName)}
                >
                  <Avatar
                    alt={company.companyName}
                    src={company.logo}
                    sx={{
                      width: '100%', // Make avatar fill the button area
                      height: '100%',
                      borderRadius: '4px',
                    }}
                  />
                </Button>
               
              </Grid>
            ))}
          </Grid>
        </Grid>

        {/* Filtered Table */}
        <Grid item xs={12}>
          <Typography variant="h5" gutterBottom>
           Search Redbrickers
          </Typography>

          {/* Search Bar */}
          <TextField
            label="Search by Name or Role"
            variant="outlined"
            fullWidth
            value={searchQuery}
            onChange={handleSearchChange}
            sx={{ mb: 2 }}
          />

          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Profile</TableCell>
                  <TableCell>Name</TableCell>
                  <TableCell>Role</TableCell>
                  <TableCell>Experts</TableCell>
                  <TableCell>Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {filteredData.map((row) => (
                  <TableRow key={row.id}>
                    <TableCell>
                      <Avatar src={row.profile} alt={row.name} />
                    </TableCell>
                    <TableCell>{row.name}</TableCell>
                    <TableCell>{row.role}</TableCell>
                    <TableCell>{row.experts}</TableCell>
                    <TableCell>
                      <Button
                        variant="outlined"
                        size="small"
                        sx={{ mr: 1 }}
                        onClick={() => handleOpenCalendar(row)}
                      >
                        View More
                      </Button>
                      <IconButton
                        color="primary"
                        aria-label="calendar"
                        onClick={() => handleOpenCalendar(row)}
                      >
                        <CalendarTodayIcon />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>

      {/* Calendar Modal */}
      <Dialog open={calendarOpen} onClose={handleCloseCalendar} maxWidth="sm" fullWidth>
        <DialogTitle>
          {selectedPerson ? `${selectedPerson.name}'s Availability` : 'Availability'}
        </DialogTitle>
        <DialogContent>
          <FullCalendar
            plugins={[dayGridPlugin, interactionPlugin]}
            initialView="dayGridWeek"
            height="auto"
            events={[
              { title: 'Available', start: '2024-11-22T10:00:00', end: '2024-11-22T12:00:00' },
              { title: 'Meeting', start: '2024-11-23T13:00:00', end: '2024-11-23T14:00:00' },
            ]}
            dateClick={(info) => alert(`Clicked on date: ${info.dateStr}`)}
          />
        </DialogContent>
      </Dialog>
    </Box>
  );
}