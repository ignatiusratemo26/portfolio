import { useState } from 'react';
import { AppBar, IconButton, Drawer, List, ListItem, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { motion } from 'framer-motion';

const Navbar = () => {
 const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
   setIsOpen(!isOpen);
 };
  const menuItems = [
   { text: 'Home', href: '#home' },
   { text: 'About', href: '#about' },
   { text: 'Services', href: '#services' },
   { text: 'Blog', href: '#blog' },
   { text: 'Contact', href: '#contact' },
 ];
  return (
   <>
     <AppBar 
       position="fixed" 
       className="bg-transparent shadow-none"
     >
       <div className="container mx-auto px-4 py-2 flex justify-between items-center">
         <motion.div
           whileHover={{ scale: 1.1 }}
           className="text-primary text-2xl font-bold"
         >
           Logo
         </motion.div>
         <IconButton
           onClick={toggleMenu}
           className="text-primary hover:bg-primary/10"
         >
           <MenuIcon />
         </IconButton>
       </div>
     </AppBar>
      <Drawer
       anchor="right"
       open={isOpen}
       onClose={toggleMenu}
       className="bg-white"
     >
       <div className="w-64 p-4">
         <div className="flex justify-end">
           <IconButton onClick={toggleMenu}>
             <CloseIcon />
           </IconButton>
         </div>
         <List>
           {menuItems.map((item) => (
             <ListItem 
               key={item.text}
               button 
               component="a"
               href={item.href}
               onClick={toggleMenu}
               className="hover:text-primary transition-colors"
             >
               <ListItemText primary={item.text} />
             </ListItem>
           ))}
         </List>
       </div>
     </Drawer>
   </>
 );
};
export default Navbar;