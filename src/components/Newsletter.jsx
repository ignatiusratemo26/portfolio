import { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Paper,
  Grid2,
  useTheme,
  useMediaQuery
} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { motion } from 'framer-motion';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted email:', email);
    setEmail('');
  };

  return (
    <Box
      sx={{
      // background: 'linear-gradient(135deg, #E3F2FD, #90CAF9)',
       
       // Option 2: More vibrant blue gradient
      //  background: 'linear-gradient(135deg, #4FC3F7, #2196F3)',
       
       // Option 3: Soft blue to white gradient
       background: 'linear-gradient(135deg, #BBDEFB, #ffffff)',
       
       // Option 4: Modern tech-style gradient
       // background: 'linear-gradient(135deg, #64B5F6, #42A5F5, #2196F3)',
       
       // Option 5: Subtle blue gradient with opacity
       // background: 'linear-gradient(135deg, rgba(33, 150, 243, 0.1), rgba(13, 71, 161, 0.2))',
       
        marginX:3,
        py: 8,
        borderRadius: '16px',
        boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.2)',
      }}
    >
      <Container maxWidth="lg">
        <Grid2 container spacing={4} alignItems="center">
          <Grid2 item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Box sx={{ mb: 4 }}>
                <Typography
                  variant="h3"
                  component="h2"
                  color="primary.main"
                  gutterBottom
                  sx={{
                    fontWeight: 'bold',
                    fontSize: { xs: '2rem', md: '2.5rem' },
                  }}
                >
                  Stay Updated
                </Typography>
                <Typography variant="h6" 
                sx={{ opacity: 0.9,
                  color: 'black'

                 }}>
                  Subscribe to my newsletter for the latest updates and insights
                </Typography>
              </Box>

              <Paper
                component="form"
                onSubmit={handleSubmit}
                sx={{
                  p: '2px',
                  display: 'flex',
                  flexDirection: isMobile ? 'column' : 'row',
                  gap: 1,
                  maxWidth: 500,
                  bgcolor: 'background.paper',
                  borderRadius: '8px',
                  boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
                  transition: 'transform 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'scale(1.02)',
                    boxShadow: '0px 8px 30px rgba(0, 0, 0, 0.3)',
                  },
                }}
              >
                <TextField
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  type="email"
                  required
                  fullWidth
                  variant="outlined"
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      '& fieldset': { border: 'none' },
                    },
                    flex: 1,
                    bgcolor: '#ffffff',
                    borderRadius: '4px',
                    '& input': {
                      paddingLeft: '16px',
                    },
                  }}
                />
                <Button
                  type="submit"
                  variant="contained"
                  bgcolor="primary"
                  endIcon={<SendIcon />}
                  sx={{
                    px: 3,
                    py: 1.5,
                    borderRadius: '4px',
                    whiteSpace: 'nowrap',
                    minWidth: isMobile ? '100%' : 'auto',
                    bgcolor: 'primary.main', // Custom button color
                    '&:hover': {
                      bgcolor: 'primary.light', // Lighter shade on hover
                      boxShadow: '0px 4px 15px rgba(255,64,129,0.3)',
                    },
                  }}
                >
                  Subscribe
                </Button>
              </Paper>
            </motion.div>
          </Grid2>
        </Grid2>
      </Container>
    </Box>
  );
};

export default Newsletter;
