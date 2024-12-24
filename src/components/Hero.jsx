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
          // direction={isMobile ? 'column' : 'row'}
          direction={{ xs: 'column-reverse', md: 'row' }}
        >
          {/* Profile Image */}
          
          <Grid2 item xs={12} md={5}>
            <Box
              sx={{
                position: 'relative',
                width: 'fit-content',
                mx: 'auto',
              }}
            >
              <motion.div
                animate={{ 
                  y: [0, -20, 0] // Reduced movement range
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <Box
                  component="img"
                  src={ProfilePic}
                  alt="Ignatius Ratemo"
                  sx={{
                    width: { xs: '200px', md: '300px' },
                    height: { xs: '200px', md: '300px' },
                    borderRadius: '50%',
                    objectFit: 'cover',
                    display: 'block',
                    boxShadow: 3,
                    imageRendering: 'crisp-edges',  // Add this
                    WebkitBackfaceVisibility: 'hidden',  // Add this
                    backfaceVisibility: 'hidden',  // Add this
                    filter: 'none', 
                  }}
                />
              </motion.div>
              {/* Shadow */}
              <Box
                sx={{
                  position: 'absolute',
                  bottom: -40,
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: '90%',
                  height: '20px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(0,0,0,0.2)',
                  filter: 'blur(8px)',
                  animation: 'shadowPulse 3s infinite ease-in-out',
                }}
              />
            </Box>

            {/* Add animation keyframes */}
            <style>
              {`
                @keyframes shadowPulse {
                  0%, 100% { transform: translateX(-50%) scale(1); opacity: 0.8; }
                  50% { transform: translateX(-50%) scale(0.8); opacity: 0.6; }
                }
              `}
            </style>
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
                  Passionate about creating innovative solutions. 
                  Let's build something amazing together!
                </Typography>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <Button
                  onClick={(e) => {
                    e.preventDefault();
                    const portfolioSection = document.getElementById('portfolio');
                    if (portfolioSection) {
                      portfolioSection.scrollIntoView({ 
                        behavior: 'smooth',
                        block: 'start'
                      });
                    }
                  }}
                  variant="contained"
                  color="primary"
                  size="large"
                  sx={{
                    textTransform: 'none',
                    borderRadius: 2,
                    px: 4,
                    py: 1.5,
                    background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
                    boxShadow: '0 3px 5px 2px rgba(33, 203, 243, .3)',
                    '&:hover': {
                      transform: 'translateY(-2px)',
                      transition: 'transform 0.2s ease-in-out',
                    },
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
