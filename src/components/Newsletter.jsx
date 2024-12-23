import { useState } from 'react';
import { TextField, Button } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { motion } from 'framer-motion';
const Newsletter = () => {
 const [email, setEmail] = useState('');
  const handleSubmit = (e) => {
   e.preventDefault();
   // Handle newsletter submission
   console.log('Submitted email:', email);
   setEmail('');
 };
  return (
   <section className="bg-primary py-20">
     <div className="container mx-auto px-4">
       <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
         <motion.div
           initial={{ opacity: 0, x: -50 }}
           whileInView={{ opacity: 1, x: 0 }}
           transition={{ duration: 0.5 }}
           className="text-white"
         >
           <h2 className="text-3xl font-bold mb-4">Subscribe to our Newsletter</h2>
           <p className="text-lg mb-6">Stay updated with our latest news and updates</p>
           <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4">
             <TextField
               value={email}
               onChange={(e) => setEmail(e.target.value)}
               variant="outlined"
               placeholder="Enter your email"
               className="bg-white rounded-md w-full md:w-auto"
               required
             />
             <Button
               type="submit"
               variant="contained"
               className="bg-secondary text-primary hover:bg-secondary/90"
               endIcon={<SendIcon />}
             >
               Subscribe
             </Button>
           </form>
         </motion.div>
         <motion.div
           initial={{ opacity: 0, x: 50 }}
           whileInView={{ opacity: 1, x: 0 }}
           transition={{ duration: 0.5 }}
           className="hidden md:block"
         >
           <img 
             src="/img/newsletter.png" 
             alt="Newsletter" 
             className="w-full h-auto"
           />
         </motion.div>
       </div>
     </div>
   </section>
 );
};
export default Newsletter;