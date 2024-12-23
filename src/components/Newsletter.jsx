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
        bgcolor: 'primary.main',
        py: 8,
        color: 'white',
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
                  gutterBottom
                  sx={{
                    fontWeight: 'bold',
                    fontSize: { xs: '2rem', md: '2.5rem' },
                  }}
                >
                  Stay Updated
                </Typography>
                <Typography variant="h6" sx={{ opacity: 0.9 }}>
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
                  borderRadius: 2,
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
                  }}
                />
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  endIcon={<SendIcon />}
                  sx={{
                    px: 3,
                    py: 1.5,
                    borderRadius: 1,
                    whiteSpace: 'nowrap',
                    minWidth: isMobile ? '100%' : 'auto',
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