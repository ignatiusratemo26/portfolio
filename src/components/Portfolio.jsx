import React, { useState } from "react";
import { Box, Typography, Grid2, Card, CardMedia, CardContent, CardActions, Button ,Dialog,  DialogTitle,  DialogContent,  DialogActions } from "@mui/material";
import { motion } from "framer-motion";
import ncapc_project from "../images/projects/ncapc_project.png";
import baybook_project from "../images/projects/baybook_project.png";
import ndula_project from "../images/projects/ndula_project.png";
import la_crime_project from "../images/projects/crime_analysis_project.png";
import sleep_scope_project from "../images/projects/sleepscope_project.png";


const projects = [
  {
    title: "NCA Project Commissioning System",
    description: "Project Commissioning System for the National Construction Authority (NCA), a comprehensive platform that streamlines project management, document approval workflows, and stakeholder collaboration.",
    githubLink: "https://github.com/ignatiusratemo26/project_commissioning",
    liveLink: "https://ncapc.vercel.app/",
    image: ncapc_project,
  },
  {
    title: "BayBook Hotel Booking",
    description: "BayBook is a user-friendly hotel booking platform designed to simplify travel planning. It allows users to explore, compare, and book accommodations effortlessly, featuring detailed listings, photos, and amenities.",
    githubLink: "https://github.com/ignatiusratemo26/baybook_frontend",
    liveLink: "under development",
    image: baybook_project,
  },
  {
    title: "Ndula Kicks™",
    description: "Ndula Kicks™ is a platform that allows users to buy and sell sneakers. It allows users to explore, compare, and buy sneakers effortlessly, featuring detailed listings and photos.",
    githubLink: "https://github.com/ignatiusratemo26/ndula_ke",
    liveLink: "under development",
    image: ndula_project,
  },
  {
    title: "LA Crime Data Analysis",
    description: "LA Crime Data Analysis Workbook using Python and Jupyter Notebook. Analysis of crime data to identify patterns in criminal behavior. The insights were to determine the most effective way to allocate resources effectively to tackle various crimes in different areas.",
    githubLink: "https://github.com/ignatiusratemo26/Crime-Data-Analysis",
    liveLink: "https://github.com/ignatiusratemo26/Crime-Data-Analysis/blob/main/data/notebook.ipynb",
    image: la_crime_project,
  },
  {
    title: "SleepScope Data Analysis",
    description: "Data science project aimed at uncovering insights into sleep quality based on various lifestyle and demographic factors. The analysis was performed using a dataset provided by SleepInc, featuring anonymized sleep and lifestyle metrics for 374 individuals over the past six months.",
    githubLink: "https://github.com/ignatiusratemo26/sleep-tracking",
    liveLink: "https://github.com/ignatiusratemo26/sleep-tracking/blob/master/notebook.ipynb",
    image: sleep_scope_project,
  },
];

const Portfolio = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const handleLiveLinkClick = (project) => {
    if (project.liveLink === "under development") {
      setSelectedProject(project);
      setOpenDialog(true);
    } else {
      window.open(project.liveLink, '_blank');
    }
  };

  return (
    <Box
      id="portfolio"
      sx={{
        py: 6,
        px: 3,
        backgroundColor: 'background.paper',
      }}
    >
      <Typography
        variant="h4"
        fontWeight="bold"
        align="center"
        color="primary"
        gutterBottom
        component={motion.div}
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        My Portfolio
      </Typography>
      <Typography
        variant="body1"
        color="text.secondary"
        align="center"
        mb={4}
        component={motion.div}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Check out some of the projects I’ve worked on!
      </Typography>
      <Grid2
        container
        spacing={4}
        justifyContent="center"
        alignItems="stretch"
      >
        {projects.map((project, index) => (
          <Grid2
            item
            xs={12}
            sm={6}
            md={4}
            key={index}
            component={motion.div}
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05 }} 
            transition={{
              delay: 0.2 * index,
              duration: 0.8,
              type: "spring",
              stiffness: 60,
            }}
            viewport={{ once: true }}
          >
            <Card
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)",
              }}
            >
                <CardMedia
                  component="img"
                  image={project.image}
                  alt={`${project.title} image`}
                  sx={{
                    height: 200,
                    objectFit: "cover",
                  }}
                />
              {/* Project Content */}
              <CardContent>
                <Typography
                  variant="h6"
                  fontWeight="bold"
                  sx={{ mb: 1 }}
                  color="primary"
                >
                  {project.title}
                </Typography>

                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{
                    mb: 2,
                    maxWidth: '500px', // Set a maximum height for the description
                    overflowY: 'hidden', // Hide overflow text vertically
                    display: '-webkit-box',
                    WebkitLineClamp: '5', // Limit to 5 lines
                    WebkitBoxOrient: 'vertical',
                  }}
                >
                  {project.description}
                </Typography>
              </CardContent>
              {/* Project Actions */}
              <CardActions sx={{ justifyContent: "space-between", px: 2 }}>
                {project.githubLink && (
                  <Button
                    size="small"
                    variant="contained"
                    color="primary"
                    href={project.githubLink}
                    target="_blank"
                  >
                    GitHub
                  </Button>
                )}

                  <Button
                    size="small"
                    variant="outlined"
                    color="primary"
                    onClick={() => handleLiveLinkClick(project)}
                    target="_blank"
                  >
                    Live Site
                  </Button>
                
              </CardActions>
              {/* {dialog for under development projects} */}
              <Dialog 
                open={openDialog} 
                onClose={() => setOpenDialog(false)}
                PaperProps={{
                  sx: {
                    borderRadius: 2,
                    boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
                    backdropFilter: 'blur(8px)',
                    backgroundColor: 'rgba(255, 255, 255, 0.9)',
                  }
                }}
                BackdropProps={{
                  sx: {
                    backgroundColor: 'rgba(255, 255, 255, 0.2)',
                    backdropFilter: 'blur(8px)',
                  }
                }}
                sx={{
                  '& .MuiDialog-paper': {
                    margin: 2,
                  }
                }}
              >
                <DialogTitle sx={{ pb: 1 }}>
                  Site To Be Deployed
                </DialogTitle>
                <DialogContent>
                  <Typography>
                    This site has not yet been deployed. You can check it out on GitHub.
                  </Typography>
                </DialogContent>
                <DialogActions>
                  <Button onClick={() => setOpenDialog(false)} color="primary">
                    Close
                  </Button>
                  {selectedProject && (
                    <Button 
                      href={selectedProject.githubLink} 
                      target="_blank" 
                      color="primary" 
                      variant="contained"
                    >
                      View on GitHub
                    </Button>
                  )}
                </DialogActions>
              </Dialog>
            </Card>
          </Grid2>
        ))}
      </Grid2>
    </Box>
  );
};

export default Portfolio;
