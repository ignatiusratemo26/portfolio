import { useState, useEffect } from 'react';
import { Box, CssBaseline } from '@mui/material';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Blog from './components/Blog';
import About from './components/About';
import ClientSection from './components/ClientSection';
import Newsletter from './components/Newsletter';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';
import { motion, AnimatePresence } from 'framer-motion';

function App() {
 const [loading, setLoading] = useState(true);
 useEffect(() => {
  // Add error handling to the loading state
  try {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => {
      clearTimeout(timer);
    };
  } catch (error) {
    console.error('Loading error:', error);
    setLoading(false); // Ensure loading state is cleared even if there's an error
  }
}, []);
 // Add error boundary wrapper
if (!loading && typeof window === 'undefined') {
  return null; // Prevent rendering during SSR
}

  return (
   <Box
   sx={{
    backgroundColor: 'background.paper',
   }}
   >
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
           <About />
           <Services />
           <Portfolio />
           <ClientSection />
           <Newsletter />
           <Footer />
         </motion.div>
       )}
     </AnimatePresence>
   </Box>
 );
}
export default App;