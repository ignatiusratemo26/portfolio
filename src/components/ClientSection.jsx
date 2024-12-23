import { useState } from 'react';
import { Paper, IconButton } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const testimonials = [
 {
   id: 1,
   content: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
   author: "Pete Rock",
   company: "A New Tomorrow"
 },
 {
   id: 2,
   content: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
   author: "Michael Snowden",
   company: "Creativeland CEO"
 },
 {
   id: 3,
   content: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
   author: "Tom Davis",
   company: "GreenWonder"
 }
];

const ClientSection = () => {
 const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const nextTestimonial = () => {
   setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
 };
  const prevTestimonial = () => {
   setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
 };
  return (
   <section className="py-20 bg-white">
     <div className="container mx-auto px-4">
       <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
         <motion.div
           initial={{ opacity: 0, x: -50 }}
           whileInView={{ opacity: 1, x: 0 }}
           transition={{ duration: 0.5 }}
           className="relative"
         >
           <img 
             src="/img/clients.png" 
             alt="Clients" 
             className="w-full h-auto rounded-lg shadow-lg"
           />
         </motion.div>
          <div className="relative">
           <motion.h2
             initial={{ opacity: 0, y: -20 }}
             whileInView={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.5 }}
             className="text-3xl font-bold mb-8"
           >
             What our clients said
           </motion.h2>
            <div className="relative h-64">
             <AnimatePresence mode="wait">
               <motion.div
                 key={currentTestimonial}
                 initial={{ opacity: 0, x: 50 }}
                 animate={{ opacity: 1, x: 0 }}
                 exit={{ opacity: 0, x: -50 }}
                 transition={{ duration: 0.5 }}
               >
                 <Paper elevation={3} className="p-6 bg-light">
                   <p className="text-lg mb-4 text-gray-700">
                     {testimonials[currentTestimonial].content}
                   </p>
                   <div className="font-semibold text-primary">
                     {testimonials[currentTestimonial].author}
                   </div>
                   <div className="text-sm text-gray-500">
                     {testimonials[currentTestimonial].company}
                   </div>
                 </Paper>
               </motion.div>
             </AnimatePresence>
           </div>
            <div className="flex justify-end mt-4 gap-2">
             <IconButton 
               onClick={prevTestimonial}
               className="text-primary hover:bg-primary/10"
             >
               <ChevronLeftIcon />
             </IconButton>
             <IconButton 
               onClick={nextTestimonial}
               className="text-primary hover:bg-primary/10"
             >
               <ChevronRightIcon />
             </IconButton>
           </div>
         </div>
       </div>
     </div>
   </section>
 );
};
export default ClientSection;