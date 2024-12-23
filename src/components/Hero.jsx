import React, { useState, useEffect } from 'react';
import { Box, Typography, Button, Container, Grid2 } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import ProfilePic from '../images/profile_pic.jpg';
import { motion } from 'framer-motion';

const roles = ['Software Engineer','Web Developer', 'Data Analyst'];

const Hero = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        bgcolor: 'background.default',
        py: 4,
      }}
    >
      <Container maxWidth="lg">
        <Grid2 
          container 
          spacing={4} 
          alignItems="center"
          direction={isMobile ? 'column' : 'row'}
        >
          {/* Profile Image */}
          <Grid2 item xs={12} md={5}>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Box
                component="img"
                src={ProfilePic}
                alt="Ignatius Ratemo"
                sx={{
                  width: isMobile ? '200px' : '300px',
                  height: isMobile ? '200px' : '300px',
                  borderRadius: '50%',
                  objectFit: 'cover',
                  mx: 'auto',
                  display: 'block',
                  boxShadow: 3,
                }}
              />
            </motion.div>
          </Grid2>

          {/* Content */}
          <Grid2 item xs={12} md={7}>
            <Box sx={{ textAlign: isMobile ? 'center' : 'left' }}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Typography 
                  variant="h3" 
                  component="h1" 
                  gutterBottom
                  sx={{ 
                    fontWeight: 'bold',
                    color: 'text.primary',
                  }}
                >
                  Hello, I'm Ignatius Ratemo
                </Typography>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Typography variant="h5" gutterBottom>
                  I'm a{' '}
                  <Typography
                    component="span"
                    variant="h5"
                    color="primary"
                    sx={{ fontWeight: 'bold' }}
                  >
                    {roles[currentRole]}
                  </Typography>
                </Typography>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <Typography 
                  variant="body1" 
                  paragraph
                  sx={{ color: 'text.secondary' }}
                >
                  Passionate about creating innovative solutions and turning data into insights. 
                  Let's build something amazing together!
                </Typography>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <Button
                  href="#portfolio"
                  variant="contained"
                  color="primary"
                  size="large"
                  sx={{
                    textTransform: 'none',
                    borderRadius: 2,
                    px: 4,
                    py: 1.5,
                  }}
                >
                  View My Work
                </Button>
              </motion.div>
            </Box>
          </Grid2>
        </Grid2>
      </Container>
    </Box>
  );
};

export default Hero;
