import React, { useState } from 'react';
import {
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Box,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import WorkIcon from '@mui/icons-material/Work';
import EmailIcon from '@mui/icons-material/Email';
import { styled } from '@mui/material/styles';
import MiscellaneousServicesIcon from '@mui/icons-material/MiscellaneousServices';

const MenuButton = styled(IconButton)(({ theme }) => ({
  position: 'fixed',
  top: '1rem',
  left: '1rem',
  zIndex: 1200,
  color: theme.palette.primary.main,
  backgroundColor: 'rgba(255, 255, 255, 0.9)',
  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 1)',
  },
}));

const menuItems = [
  { text: 'Home', icon: <HomeIcon />, path: '#home' },
  { text: 'About', icon: <PersonIcon />, path: '#about' },
  { text: 'Services', icon: <MiscellaneousServicesIcon />, path: '#services' },
  { text: 'Portfolio', icon: <WorkIcon />, path: '#portfolio' },
  { text: 'Contact', icon: <EmailIcon />, path: '#contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // Adjust this value based on your navbar height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
       window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsOpen(false);
  };

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setIsOpen(open);
  };

  return (
    <>
      <MenuButton
        aria-label="menu"
        onClick={toggleDrawer(true)}
      >
        <MenuIcon />
      </MenuButton>

      <Drawer
        anchor="left"
        open={isOpen}
        onClose={toggleDrawer(false)}
        PaperProps={{
          sx: {
            width: 250,
            backgroundColor: 'background.default',
            borderRight: '2px solid',
            borderColor: 'primary.main',
          },
        }}
      >
        <Box
          sx={{
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            pt: 8,
          }}
        >
          <List>
            {menuItems.map((item) => (
              <ListItem
                button
                key={item.text}
                onClick={() => scrollToSection(item.path.replace('#', ''))}
                sx={{
                  '&:hover': {
                    backgroundColor: 'primary.light',
                  },
                }}
              >
                <ListItemIcon sx={{ color: 'primary.main' }}>
                  {item.icon}
                </ListItemIcon>
                <ListItemText 
                  primary={item.text}
                  sx={{
                    '& .MuiListItemText-primary': {
                      fontWeight: 500,
                    },
                  }}
                />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default Navbar;