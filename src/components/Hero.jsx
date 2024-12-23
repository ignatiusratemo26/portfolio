import { Button } from '@mui/material';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';


const Hero = () => {
 const titleVariants = {
   hidden: { opacity: 0, y: -50 },
   visible: { 
     opacity: 1, 
     y: 0,
     transition: { duration: 0.8, ease: "easeOut" }
   }
 };
  const subtitleVariants = {
   hidden: { opacity: 0, y: 50 },
   visible: { 
     opacity: 1, 
     y: 0,
     transition: { duration: 0.8, delay: 0.3, ease: "easeOut" }
   }
 };
  return (
   <section className="min-h-screen relative bg-light flex items-center" id="home">
     <div className="container mx-auto px-4">
       <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
         <div className="text-center md:text-left">
           <motion.h1 
             variants={titleVariants}
             initial="hidden"
             animate="visible"
             className="text-6xl md:text-8xl font-bold mb-4"
           >
             J<span className="text-primary">o</span>hn
             <br />
             D<span className="text-secondary">o</span>e
           </motion.h1>
           
           <motion.div
             variants={subtitleVariants}
             initial="hidden"
             animate="visible"
             className="text-xl md:text-2xl text-gray-600 mb-8"
           >
             <TypewriterText texts={["Web Designer", "Photographer", "3D Artist"]} />
           </motion.div>
            <motion.div
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{ delay: 1 }}
           >
             <Button
               variant="contained"
               color="primary"
               size="large"
               href="#about"
               className="bg-primary hover:bg-primary/90 text-white px-8 py-3"
               endIcon={<KeyboardArrowDownIcon />}
             >
               See More
             </Button>
           </motion.div>
         </div>
          <motion.div
           initial={{ opacity: 0, x: 100 }}
           animate={{ opacity: 1, x: 0 }}
           transition={{ duration: 0.8, delay: 0.5 }}
           className="hidden md:block"
         >
           {/* Add your hero image here */}
           <img 
             src="/img/hero-image.png" 
             alt="Hero" 
             className="w-full h-auto"
           />
         </motion.div>
       </div>
     </div>
      <motion.div
       initial={{ opacity: 0, y: 20 }}
       animate={{ opacity: 1, y: 0 }}
       transition={{ 
         duration: 0.5, 
         delay: 1.5,
         repeat: Infinity,
         repeatType: "reverse" 
       }}
       className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
     >
       <KeyboardArrowDownIcon className="text-primary text-4xl" />
     </motion.div>
   </section>
 );
};

// Typewriter effect component
const TypewriterText = ({ texts }) => {
 const [currentTextIndex, setCurrentTextIndex] = useState(0);
 const [displayText, setDisplayText] = useState('');
 const [isDeleting, setIsDeleting] = useState(false);
  useEffect(() => {
   const typeSpeed = isDeleting ? 50 : 150;
   const currentText = texts[currentTextIndex];
    const timer = setTimeout(() => {
     if (!isDeleting) {
       setDisplayText(currentText.substring(0, displayText.length + 1));
       if (displayText === currentText) {
         setTimeout(() => setIsDeleting(true), 1500);
       }
     } else {
       setDisplayText(currentText.substring(0, displayText.length - 1));
       if (displayText === '') {
         setIsDeleting(false);
         setCurrentTextIndex((currentTextIndex + 1) % texts.length);
       }
     }
   }, typeSpeed);
    return () => clearTimeout(timer);
 }, [displayText, isDeleting, currentTextIndex, texts]);
  return (
   <span className="font-mono">
     {displayText}<span className="animate-pulse">|</span>
   </span>
 );
};
export default Hero;