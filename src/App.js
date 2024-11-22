import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import React from 'react';
import DashboardContent from './components/DashboardContent';
import BotIcon from './components/BotIcon';

const theme = createTheme({
  palette: {
    background: {
      default: '#AB6444',
      paper: '#FFFFFF', 
      backgroundColor: '#AB6444', 
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: '#F4F5F7', 
        },
      },
    },
    MuiListItemText: {
      styleOverrides: {
        primary: {
          color: '#22232E',
          fontWeight: 600, 
          fontSize: '1rem', 
        },
      },
    },
    MuiListItemIcon: {
      styleOverrides: {
        root: {
          color: '#AB6444',
          minWidth: '40px',
        },
      },
    },
  },
});


export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <DashboardContent />
      <BotIcon />
    </ThemeProvider>
  );
}
