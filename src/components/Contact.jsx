import React, { useState } from 'react';
import {Container,Typography,Box,TextField,Button,Paper,Grid2,IconButton} from '@mui/material';
import { motion } from 'framer-motion';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import emailjs from '@emailjs/browser';

const Contact = () => {
 const [formData, setFormData] = useState({
   name: '',
   email: '',
   message: '',
 });
  const handleChange = (e) => {
   setFormData({
     ...formData,
     [e.target.name]: e.target.value,
   });
 };
 const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_name: 'Ignatius Ratemo',
      };
       await emailjs.send(
        'MY_SERVICE_ID',  // Replace with  EmailJS service ID
        'MY_TEMPLATE_ID', // Replace with your EmailJS template ID
        templateParams,
        'MY_PUBLIC_KEY'   // Replace with your EmailJS public key
      );
       // Clear form after successful submission
      setFormData({
        name: '',
        email: '',
        message: '',
      });
       alert('Message sent successfully!');
    } catch (error) {
      console.error('Error sending email:', error);
      alert('Failed to send message. Please try again.');
    }
  };
  return (
   <Box
     component="section"
     sx={{
       py: 8,
       bgcolor: 'background.paper',
       minHeight: '100vh',
       display: 'flex',
       alignItems: 'center',
       justifyContent: 'center',
     }}
   >
     <Container maxWidth="lg" sx={{ mx: "auto", px: { xs: 2, md: 4 }, maxWidth: "1000px", justifyContent: "center" }}>
       <motion.div
         initial={{ opacity: 0, y: 20 }}
         animate={{ opacity: 1, y: 0 }}
         transition={{ duration: 0.5 }}
       >
        <Typography
        variant="h2"
        component="h1"
        gutterBottom
        sx={{
        fontWeight: 'bold',
        textAlign: 'center',
        mb: 6,
        fontSize: { xs: '2.5rem', md: '3.5rem' },
        color: 'primary.main',  
        }}
        >

        Get In Touch
        </Typography>


          <Grid2 container spacing={6}>
           {/* Contact Form */}
           <Grid2 item xs={12} md={6}
           >
             <Paper 
               elevation={3}
               sx={{
                 p: 4,
                 height: '100%',
               }}
             >
               <form onSubmit={handleSubmit}>
                 <TextField
                   fullWidth
                   label="Name"
                   name="name"
                   value={formData.name}
                   onChange={handleChange}
                   margin="normal"
                   required
                   variant="outlined"
                 />
                 <TextField
                   fullWidth
                   label="Email"
                   name="email"
                   type="email"
                   value={formData.email}
                   onChange={handleChange}
                   margin="normal"
                   required
                   variant="outlined"
                 />
                 <TextField
                   fullWidth label="Message"  name="message" value={formData.message}
                   onChange={handleChange} margin="normal" required multiline   rows={4} variant="outlined"
                 />
                 <motion.div
                   whileHover={{ scale: 1.02 }}
                   whileTap={{ scale: 0.98 }}
                 >
                   <Button
                     type="submit"
                     variant="contained" fullWidth size="large"
                     sx={{
                       mt: 3,
                       background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
                       color: 'white',
                       py: 1.5,
                       borderRadius: '28px',
                     }}
                   >
                     Send Message
                   </Button>
                 </motion.div>
               </form>
             </Paper>
           </Grid2>
           
            {/* Contact Information */}
           <Grid2 item xs={12} md={6}>
             <Paper
               elevation={3}
               sx={{
                 p: 4,
                 height: '100%',
                 display: 'flex',
                 flexDirection: 'column',
                 justifyContent: 'center',
               }}
             >
               <Typography
                 variant="h4"
                 gutterBottom
                 sx={{
                   fontWeight: 'bold',
                   mb: 4,
                 }}
               >
                 Contact Information
               </Typography>
               <Typography
                 variant="body1"
                 sx={{
                   mb: 3,
                   fontSize: '1.1rem',
                   color: 'text.secondary',
                 }}
               >
                 Feel free to reach out to me through any of these platforms. I'll get back to you as <br />
                 soon as possible!
               </Typography>
                <Box sx={{ mt: 2 }}>
                 <motion.div whileHover={{ scale: 1.05 }}>
                   <Button
                     startIcon={<EmailIcon />}
                     href="mailto:ignatiusratemo5@gmail.com"
                     sx={{
                       mb: 2,
                       width: '100%',
                       justifyContent: 'flex-start',
                       color: 'text.primary',
                     }}
                   >
                     ignatiusratemo5@gmail.com
                   </Button>
                 </motion.div>
                  <Box sx={{ mt: 4 }}>
                   <Typography variant="h6" gutterBottom>
                     Social Media
                   </Typography>
                   <Box sx={{ display: 'flex', gap: 2 }}>
                     <motion.div whileHover={{ scale: 1.2 }}>
                       <IconButton
                         href="https://www.linkedin.com/in/ignatius-ratemo-809aa4341/"
                         target="_blank"
                         rel="noopener noreferrer"
                         sx={{ color: '#0077B5' }}
                       >
                         <LinkedInIcon fontSize="large" />
                       </IconButton>
                     </motion.div>
                     <motion.div whileHover={{ scale: 1.2 }}>
                       <IconButton
                         href="https://github.com/ignatiusratemo26"
                         target="_blank"
                         rel="noopener noreferrer"
                         sx={{ color: '#333' }}
                       >
                         <GitHubIcon fontSize="large" />
                       </IconButton>
                     </motion.div>
                   </Box>
                 </Box>
               </Box>
             </Paper>
           </Grid2>
         </Grid2>
       </motion.div>
     </Container>
   </Box>
 );
};
export default Contact;