import { useState } from "react";
import { Paper, IconButton, Box, Typography } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import clients_bg from "../images/client-bg.jpg";
import client_video from "../images/client_vid.mp4";

const testimonials = [
  {
    id: 1,
    content:
      "Working with Ignatius has been a game-changer for our business. His expertise in web development and software engineering is evident in every project he completed for us. The new website he built has not only improved our online presence but also increased our sales by 30%. I highly recommend Ignatius for any web development needs.",
    author: "Gabriel",
    company: "Ndula Kicks™ CEO",
    image: "https://via.placeholder.com/100", 
  },
  {
    id: 2,
    content:
      "Collaborating with Ignatius on the Project Commissioning System for the National Construction Authority was a fantastic experience. He created a comprehensive platform that seamlessly streamlines project management, document approval workflows, and stakeholder collaboration. His expertise and dedication to delivering high-quality solutions exceeded our expectations.",
    author: "Karen",
    company: "Project Manager",
    image: "https://via.placeholder.com/100",
  },
  {
    id: 3,
    content:
      "Collaborating with Ignatius on our data science project was an incredible learning experience. He guided our analysis of sleep quality based on lifestyle and demographic factors using a dataset from SleepInc. His insights and expertise were invaluable in uncovering meaningful trends and patterns.",
    author: "Peter Mwenda",
    company: "Student, Software Engineer",
    image: "https://via.placeholder.com/100",
  },
];

const ClientSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [dragDirection, setDragDirection] = useState(0);

  const handleDragEnd = (event, info) => {
    const swipeThreshold = 50; // minimum distance for swipe
    const dragDistance = info.offset.x;

    if (Math.abs(dragDistance) > swipeThreshold) {
      if (dragDistance > 0) {
        // Swiped right
        prevTestimonial();
      } else {
        // Swiped left
        nextTestimonial();
      }
    }
  };

  const nextTestimonial = () => {
    setDragDirection(-1);
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setDragDirection(1);
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section style={{ padding: "40px", backgroundColor: 'white' }}>
      <Box
        className="container"
        sx={{ mx: "auto", px: { xs: 2, md: 4 }, maxWidth: "1000px",  }}
      >
        <Typography
          variant="h4"
          fontWeight="bold"
          align="center"
          gutterBottom
          color="primary"
          component={motion.div}
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Client Testimonials
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            gap: 4,
          }}
        >
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <video
              autoPlay
              muted
              loop
              playsInline
              style={{
                width: "100%",
                height: "auto",
                borderRadius: "8px",
                boxShadow: "0px 4px 8px rgba(0,0,0,0.1)",
                objectFit: "cover"
              }}
            >
              <source src={client_video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </motion.div>
          <Box>
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={currentTestimonial}
                initial={{ opacity: 0, x: dragDirection > 0 ? -300 : 300 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: dragDirection > 0 ? 300 : -300 }}
                transition={{ duration: 0.5 }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={1}
                onDragEnd={handleDragEnd}
                whileTap={{ cursor: "grabbing" }}
              >
                <Paper
                  elevation={3}
                  sx={{
                    position: "relative",
                    p: 4,
                    textAlign: "center",
                    borderRadius: "16px",
                    backgroundImage: clients_bg,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    boxShadow: "0px 10px 20px rgba(0,0,0,0.1)",
                    overflow: "hidden",
                    mx:"auto",
                    cursor:"grab",
                    touchAction:"none",
                  }}
                >
                  

                  {/* Testimonial Content */}
                  <Typography
                    variant="body1"
                    sx={{ mb: 2, fontStyle: "italic",
                    zIndex: 1,
                    maxWidth: "700px",
                    
                     }}
                  >
                    {testimonials[currentTestimonial].content}
                  </Typography>
                  <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                    {testimonials[currentTestimonial].author}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {testimonials[currentTestimonial].company}
                  </Typography>
                </Paper>
              </motion.div>
            </AnimatePresence>
            {/* Navigation Buttons */}
            <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
              <IconButton
                onClick={prevTestimonial}
                sx={{
                  color: "primary.main",
                  "&:hover": { backgroundColor: "rgba(25,118,210,0.08)" },
                }}
              >
                <ChevronLeftIcon />
              </IconButton>
              <IconButton
                onClick={nextTestimonial}
                sx={{
                  color: "primary.main",
                  "&:hover": { backgroundColor: "rgba(25,118,210,0.08)" },
                }}
              >
                <ChevronRightIcon />
              </IconButton>
            </Box>
          </Box>
        </Box>
      </Box>
    </section>
  );
};

export default ClientSection;
