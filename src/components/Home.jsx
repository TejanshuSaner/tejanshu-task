import React, { useEffect } from 'react';
import { Typography, Box } from '@mui/material';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Home.css';  

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);

  return (
    <Box className="home-container">
      <Typography 
        variant="h4" 
        className="home-heading" 
        gutterBottom
        data-aos="fade-right"
      >
        Welcome to the Home Page
      </Typography>
      <Typography 
        variant="body1" 
        className="home-paragraph" 
        paragraph
        data-aos="fade-right"
        data-aos-delay="200"
      >
        This is the main hub of our application where you can access various features and resources. 
        From here, you can navigate to different sections such as the dashboard, profile, and more.
      </Typography>

      <Typography 
        variant="h5" 
        className="home-heading" 
        gutterBottom
        data-aos="fade-right"
        data-aos-delay="400"
      >
        Latest Updates
      </Typography>
      <Typography 
        variant="body1" 
        className="home-paragraph" 
        paragraph
        data-aos="fade-right"
        data-aos-delay="600"
      >
        Stay up to date with the latest news and updates. Check back often for new content and features 
        that will enhance your experience.
      </Typography>

      <Typography 
        variant="h5" 
        className="home-heading highlight" 
        gutterBottom
        data-aos="fade-right"
        data-aos-delay="800"
      >
        Featured Content
      </Typography>
      <Typography 
        variant="body1" 
        className="home-paragraph" 
        paragraph
        data-aos="fade-right"
        data-aos-delay="1000"
      >
        Explore our featured resources and tools designed to help you get the most out of our platform. 
        Whether you are new or an experienced user, there's something for everyone.
      </Typography>

      <Typography 
        variant="h5" 
        className="home-heading" 
        gutterBottom
        data-aos="fade-right"
        data-aos-delay="1200"
      >
        User Highlights
      </Typography>
      <Typography 
        variant="body1" 
        className="home-paragraph" 
        paragraph
        data-aos="fade-right"
        data-aos-delay="1400"
      >
        Meet some of our top users and see how they are using the platform to achieve their goals. 
        Get inspired and join the community!
      </Typography>

      <Typography 
        variant="h5" 
        className="home-heading" 
        gutterBottom
        data-aos="fade-right"
        data-aos-delay="1600"
      >
        Explore More
      </Typography>
      <Typography 
        variant="body1" 
        className="home-paragraph" 
        paragraph
        data-aos="fade-right"
        data-aos-delay="1800"
      >
        Dive deeper into our platform by exploring additional features, settings, and tools designed 
        to improve your productivity and experience.
      </Typography>
    </Box>
  );
}

export default Home;
