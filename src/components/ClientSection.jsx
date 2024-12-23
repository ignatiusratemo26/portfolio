import { useState } from "react";
import { Paper, IconButton, Box, Typography } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import clients from "../images/clients.png";
import clients_bg from "../images/client-bg.jpg";

const testimonials = [
  {
    id: 1,
    content:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
    author: "Gabriel Eyuren",
    company: "Ndula Kicks™ CEO",
    image: "https://via.placeholder.com/100", // Replace with profile image
  },
  {
    id: 2,
    content:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
    author: "Michael Snowden",
    company: "Creativeland CEO",
    image: "https://via.placeholder.com/100", // Replace with profile image
  },
  {
    id: 3,
    content:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
    author: "Tom Davis",
    company: "GreenWonder",
    image: "https://via.placeholder.com/100", // Replace with profile image
  },
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
    <section style={{ padding: "40px", backgroundColor: 'background.paper' }}>
      <Box
        className="container"
        sx={{ mx: "auto", px: { xs: 2, md: 4 }, maxWidth: "1000px",  }}
      >
        <Typography
          variant="h4"
          fontWeight="bold"
          align="center"
          gutterBottom
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
            <img
              src={clients}
              alt="Clients"
              style={{
                width: "100%",
                height: "auto",
                borderRadius: "8px",
                boxShadow: "0px 4px 8px rgba(0,0,0,0.1)",
              }}
            />
          </motion.div>
          <Box>
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
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
                  }}
                >
                  

                  {/* Testimonial Content */}
                  <Typography
                    variant="body1"
                    sx={{ mb: 2, fontStyle: "italic",
                    zIndex: 1,
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
