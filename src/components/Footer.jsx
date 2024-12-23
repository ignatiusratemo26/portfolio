import React from 'react';
import { Box, Container, Grid2, Typography, IconButton, Link } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import { motion } from 'framer-motion';
const Footer = () => {
 const currentYear = new Date().getFullYear();
  return (
   <Box
     component="footer"
     sx={{
       backgroundColor: 'background.paper',
       py: 6,
       position: 'relative',
       overflow: 'hidden',
     }}
   >
     {/* Decorative gradient background */}
     <Box
       sx={{
         position: 'absolute',
         top: 0,
         left: 0,
         right: 0,
         height: '100%',
         background: 'linear-gradient(135deg, #E3F2FD 0%, #90CAF9 100%)',
         opacity: 0.1,
         zIndex: 0,
       }}
     />
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
       <Grid2 container spacing={4}>
         {/* Left section - Name and Description */}
         <Grid2 item xs={12} md={6}>
           <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.5 }}
           >
             <Typography variant="h6" color="text.primary" gutterBottom>
               Ignatius Ratemo
             </Typography>
             <Typography variant="body2" color="text.secondary">
               Software Engineer passionate about creating beautiful and functional web applications.
             </Typography>
           </motion.div>
         </Grid2>
          {/* Right section - Quick Links */}
         <Grid2 item xs={12} md={6}>
           <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.5, delay: 0.2 }}
           >
             <Typography variant="h6" color="text.primary" gutterBottom>
               Connect With Me
             </Typography>
             <Box sx={{ mt: 2 }}>
               <IconButton
                 component={Link}
                 href="https://github.com/ignatiusratemo26"
                 target="_blank"
                 rel="noopener noreferrer"
                 color="primary"
               >
                 <GitHubIcon />
               </IconButton>
               <IconButton
                 component={Link}
                 href="https://www.linkedin.com/in/ignatius-ratemo-809aa4341/"
                 target="_blank"
                 rel="noopener noreferrer"
                 color="primary"
               >
                 <LinkedInIcon />
               </IconButton>
               {/* <IconButton
                 component={Link}
                 href="https://twitter.com/yourusername"
                 target="_blank"
                 rel="noopener noreferrer"
                 color="primary"
               >
                 <TwitterIcon />
               </IconButton> */}
               <IconButton
                 component={Link}
                 href="mailto:ignatiusratemo5@gmail.com"
                 color="primary"
               >
                 <EmailIcon />
               </IconButton>
             </Box>
           </motion.div>
         </Grid2>
       </Grid2>
        {/* Copyright section */}
       <Box
         sx={{
           mt: 4,
           pt: 2,
           borderTop: '1px solid',
           borderColor: 'divider',
           textAlign: 'center',
         }}
       >
         <motion.div
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
           transition={{ duration: 0.5, delay: 0.4 }}
         >
           <Typography variant="body2" color="text.secondary">
             © {currentYear} Ignatius Ratemo. All rights reserved.
           </Typography>
         </motion.div>
       </Box>
     </Container>
   </Box>
 );
};
export default Footer;