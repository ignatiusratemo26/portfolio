import React from "react";
import { Box, Typography, Grid2, Card, CardMedia, CardContent, CardActions, Button } from "@mui/material";
import { motion } from "framer-motion";
import ncapc_project from "../images/projects/ncapc_project.png";
// Example project data
const projects = [
  {
    title: "NCA Project Commissioning System",
    description: "Project Commissioning System for the National Construction Authority (NCA), a comprehensive platform that streamlines project management, document approval workflows, and stakeholder collaboration.",
    githubLink: "https://github.com/ignatiusratemo26/project_commissioning",
    liveLink: "https://ncapc.vercel.app/",
    image: ncapc_project,
  },
  {
    title: "Project Two",
    description: "This is a short description of Project Two. A powerful tool for productivity and efficiency.",
    githubLink: "https://github.com/username/project-two",
    liveLink: "https://projecttwo.example.com",
    image: ncapc_project, 
  },
  {
    title: "Project Three",
    description: "Project Three is a creative solution designed to enhance user experience and engagement.",
    githubLink: "https://github.com/username/project-three",
    liveLink: "https://projectthree.example.com",
    image: "https://via.placeholder.com/300x200", // Replace with your image URL
  },
];

const Portfolio = () => {
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
              {/* Project Image */}
              <CardMedia
                component="img"
                image={project.image}
                alt={`${project.title} image`}
                sx={{
                  height: 200, // Adjust height as needed
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
                {project.liveLink && (
                  <Button
                    size="small"
                    variant="outlined"
                    color="primary"
                    href={project.liveLink}
                    target="_blank"
                  >
                    Live Site
                  </Button>
                )}
              </CardActions>
            </Card>
          </Grid2>
        ))}
      </Grid2>
    </Box>
  );
};

export default Portfolio;
