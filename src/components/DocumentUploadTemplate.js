import React, { useState } from 'react';
import { Grid, Paper, Typography, TextField, IconButton, Box, InputAdornment, Pagination, Tooltip } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import UploadIcon from '@mui/icons-material/Upload';

const initialData = [
  { title: 'Marketing Plan Template', description: 'A comprehensive marketing plan for your brand.' },
  { title: 'HR Employee Onboarding Template', description: 'A detailed guide for new employee onboarding.' },
  { title: 'Finance Budget Planning Template', description: 'Track your annual budget with ease.' },
  { title: 'Operations Process Documentation Template', description: 'Document and optimize your business processes.' },
  { title: 'Legal Contract Agreement Template', description: 'A legally binding contract template for businesses.' },
  { title: 'IT Network Architecture Template', description: 'Map out your network infrastructure with this template.' },
  { title: 'Product Roadmap Template', description: 'Organize your product development strategy.' },
  { title: 'Project Management Template', description: 'Track your project milestones and deadlines.' },
  { title: 'Customer Feedback Template', description: 'Collect valuable feedback from your customers.' },
  { title: 'Sales Pipeline Template', description: 'Manage and track your sales process effectively.' },
];

export default function DocumentUploadTemplate() {
  const [documents, setDocuments] = useState(initialData);
  const [successMessage, setSuccessMessage] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [uploadedFile, setUploadedFile] = useState(null);
  const [statusMessage, setStatusMessage] = useState(''); // Track upload status
  const [page, setPage] = useState(1);
  const itemsPerPage = 4;

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
    setPage(1); // Reset to the first page on new search
  };

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      // Simulate the process of uploading the PDF file
      setUploadedFile(file);
      setStatusMessage('Uploading...');
      
      // Simulate a file upload delay (for demo purposes)
      setTimeout(() => {
        setStatusMessage('File uploaded successfully!');
        setTimeout(() => setStatusMessage(''), 3000); // Hide the success message after 3 seconds
      }, 2000);
    }
  };

  // Filter documents based on the search query
  const filteredDocuments = documents.filter(doc =>
    doc.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Pagination logic
  const startIndex = (page - 1) * itemsPerPage;
  const currentDocuments = filteredDocuments.slice(startIndex, startIndex + itemsPerPage);

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  return (
    <Box sx={{ margin: '20px' }}>
      <Typography variant="h4" gutterBottom>Template</Typography>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={12} md={8} container spacing={2} alignItems="center">
          <Grid item xs={9}>
            <TextField
              label="Search Documents"
              variant="outlined"
              size="medium" // Medium size for the input field
              fullWidth
              value={searchQuery}
              onChange={handleSearchChange}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item xs={3} sx={{ display: 'flex', alignItems: 'center' }}>
            <IconButton
              color="primary"
              aria-label="upload PDF"
              component="label"
              size="medium" // Medium size for the icon button
              fullWidth
            >
              <input
                type="file"
                accept="application/pdf"
                hidden
                onChange={handleFileUpload}
              />
              <UploadIcon />
            </IconButton>
            {/* Display status next to the upload icon */}
            {statusMessage && (
              <Typography variant="body2" sx={{ marginLeft: '8px', color: 'green' }}>
                {statusMessage}
              </Typography>
            )}
          </Grid>
        </Grid>

        {/* Success Message */}
        {successMessage && (
          <Grid item xs={12}>
            <Paper elevation={3} sx={{ padding: 2 }}>
              <Typography variant="h6">{successMessage}</Typography>
            </Paper>
          </Grid>
        )}

        {/* Display Documents in Containers */}
        <Grid item xs={12}>
          <Grid container spacing={3}>
            {currentDocuments.length > 0 ? (
              currentDocuments.map((doc, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <Paper elevation={3} sx={{ padding: 2 }}>
                    <Typography variant="h6">{doc.title}</Typography>
                    <Typography variant="body1">{doc.description}</Typography>
                  </Paper>
                </Grid>
              ))
            ) : (
              <Grid item xs={12}>
                <Paper elevation={3} sx={{ padding: 2 }}>
                  <Typography variant="h6">No documents found</Typography>
                </Paper>
              </Grid>
            )}
          </Grid>
        </Grid>

        {/* Pagination */}
        <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
          <Pagination
            count={Math.ceil(filteredDocuments.length / itemsPerPage)}
            page={page}
            onChange={handlePageChange}
            color="primary"
          />
        </Grid>
      </Grid>
    </Box>
  );
}
