import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Typography, Paper, Box } from '@mui/material';

const Dash = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  return (
    <Box
      sx={{
        padding: 3,
        backgroundColor: '#f5f5f5',
        minHeight: '100vh',
      }}
    >
      <Typography
        variant="h3"
        data-aos="fade-up"
        data-aos-duration="1200"
        sx={{
          marginBottom: 4,
          color: '#333',
        }}
      >
        Dashboard
      </Typography>
      
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 3,
        }}
      >
        <Paper
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-duration="1000"
          sx={{
            padding: 3,
            textAlign: 'center',
            color: 'text.secondary',
            backgroundColor: '#fff',
          }}
        >
          <Typography variant="h6">Overview</Typography>
          <Typography variant="body1">
            This section provides an overview of key metrics and performance indicators. 
            Use this space to summarize important information and insights.
          </Typography>
        </Paper>
        
        <Paper
          data-aos="fade-up"
          data-aos-delay="400"
          data-aos-duration="1000"
          sx={{
            padding: 3,
            textAlign: 'center',
            color: 'text.secondary',
            backgroundColor: '#fff',
          }}
        >
          <Typography variant="h6">Recent Activities</Typography>
          <Typography variant="body1">
            Here you can view the most recent activities and updates. 
            Stay informed about the latest changes and events.
          </Typography>
        </Paper>
        
        <Paper
          data-aos="fade-up"
          data-aos-delay="600"
          data-aos-duration="1000"
          sx={{
            padding: 3,
            textAlign: 'center',
            color: 'text.secondary',
            backgroundColor: '#fff',
          }}
        >
          <Typography variant="h6">Notifications</Typography>
          <Typography variant="body1">
            Check this section for recent notifications and alerts. 
            Make sure to review important messages and updates.
          </Typography>
        </Paper>
      </Box>
    </Box>
  );
};

export default Dash;

