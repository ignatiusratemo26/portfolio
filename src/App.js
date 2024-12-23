import { useState, useEffect } from 'react';
import { Box, CssBaseline } from '@mui/material';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Blog from './components/Blog';
import ClientSection from './components/ClientSection';
import Newsletter from './components/Newsletter';
import { motion, AnimatePresence } from 'framer-motion';
function App() {
 const [loading, setLoading] = useState(true);
  useEffect(() => {
   // Simulating preloader
   const timer = setTimeout(() => {
     setLoading(false);
   }, 1000);
   return () => clearTimeout(timer);
 }, []);
  return (
   <Box>
     <CssBaseline />
     <AnimatePresence>
       {loading ? (
         <motion.div
           initial={{ opacity: 1 }}
           exit={{ opacity: 0 }}
           className="fixed inset-0 bg-white z-50 flex items-center justify-center"
         >
           <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-primary"></div>
         </motion.div>
       ) : (
         <motion.div
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           transition={{ duration: 0.5 }}
         >
           <Navbar />
           <Hero />
           <Blog />
           <ClientSection />
           <Newsletter />
         </motion.div>
       )}
     </AnimatePresence>
   </Box>
 );
}
export default App;