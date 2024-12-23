import { useState } from 'react';
import { Card, CardContent, CardMedia, Typography, IconButton } from '@mui/material';
import { motion } from 'framer-motion';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const blogPosts = [
 {
   id: 1,
   title: 'Creative Minds',
   content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricies nulla non metus pulvinar imperdiet.',
   image: '/img/blog1.jpg'
 },
 {
   id: 2,
   title: 'Creative Hearts',
   content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricies nulla non metus pulvinar imperdiet.',
   image: '/img/blog2.jpg'
 },
 {
   id: 3,
   title: 'Creative Ideas',
   content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricies nulla non metus pulvinar imperdiet.',
   image: '/img/blog3.jpg'
 },
 // Add more blog posts as needed
];

const Blog = () => {
 const [currentPage, setCurrentPage] = useState(0);
 const postsPerPage = 3;
 const totalPages = Math.ceil(blogPosts.length / postsPerPage);
  const container = {
   hidden: { opacity: 0 },
   show: {
     opacity: 1,
     transition: {
       staggerChildren: 0.2
     }
   }
 };
  const item = {
   hidden: { opacity: 0, y: 20 },
   show: { opacity: 1, y: 0 }
 };
  return (
   <section className="py-20 bg-light" id="blog">
     <div className="container mx-auto px-4">
       <motion.div
         initial={{ opacity: 0, y: -20 }}
         whileInView={{ opacity: 1, y: 0 }}
         transition={{ duration: 0.5 }}
         className="text-center mb-12"
       >
         <h2 className="text-4xl font-bold mb-4">
           My <span className="text-primary">little</span> blog
         </h2>
         <div className="w-16 h-1 bg-primary mx-auto"></div>
       </motion.div>
        <motion.div
         variants={container}
         initial="hidden"
         whileInView="show"
         className="grid grid-cols-1 md:grid-cols-3 gap-8"
       >
         {blogPosts
           .slice(currentPage * postsPerPage, (currentPage + 1) * postsPerPage)
           .map((post) => (
             <motion.div key={post.id} variants={item}>
               <Card className="h-full hover:shadow-xl transition-shadow duration-300">
                 <CardMedia
                   component="img"
                   height="200"
                   image={post.image}
                   alt={post.title}
                   className="h-48 object-cover"
                 />
                 <CardContent>
                   <Typography variant="h5" component="h3" className="mb-4 font-bold">
                     {post.title}
                   </Typography>
                   <Typography variant="body2" color="text.secondary">
                     {post.content}
                   </Typography>
                 </CardContent>
               </Card>
             </motion.div>
           ))}
       </motion.div>
        {totalPages > 1 && (
         <div className="flex justify-center mt-8 gap-4">
           <IconButton
             onClick={() => setCurrentPage((prev) => Math.max(0, prev - 1))}
             disabled={currentPage === 0}
             className="text-primary"
           >
             <ChevronLeftIcon />
           </IconButton>
           <IconButton
             onClick={() => setCurrentPage((prev) => Math.min(totalPages - 1, prev + 1))}
             disabled={currentPage === totalPages - 1}
             className="text-primary"
           >
             <ChevronRightIcon />
           </IconButton>
         </div>
       )}
     </div>
   </section>
 );
};
export default Blog;