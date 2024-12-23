// import React from 'react';
// import { Box, Typography, Grid2, Paper } from '@mui/material';
// import { motion } from 'framer-motion'; // Install with `npm install framer-motion`

// const services = [
//   {
//     title: "Web Development",
//     description:
//       "With a comprehensive understanding of web development technologies, I create responsive and user-friendly websites. My skill set includes HTML, CSS, JavaScript, and various front-end frameworks.",
//     icon: "🌐",
//   },
//   {
//     title: "Data Analysis",
//     description:
//       "I excel in transforming raw data into meaningful insights. With strong analytical skills and proficiency in data visualization tools, I can interpret complex data sets to support decision-making processes.",
//     icon: "📊",
//   },
//   {
//     title: "Backend Development",
//     description:
//       "I specialize in designing and implementing server-side logic, ensuring seamless communication between the front end and the database.",
//     icon: "💻",
//   },
//   {
//     title: "Database Development & Design",
//     description:
//       "I have a strong foundation in database design and architecture, enabling me to create efficient and scalable database solutions. My expertise includes normalization, indexing, and query optimization.",
//     icon: "🛢️",
//   },
// ];

// const Services = () => {
//   return (
//     <Box
//       sx={{
//         py: 10,
//         px: 3,
//         textAlign: "center",
//         background: "#f9f9f9",
//       }}
//     >
//       <Typography variant="h4" fontWeight="bold" color="secondary" gutterBottom>
//         SERVICES
//       </Typography>
//       <Typography variant="body1" sx={{ mb: 6 }}>
//         Here are the services that I provide
//       </Typography>
//       <Grid2 container spacing={4}>
//         {services.map((service, index) => (
//           <Grid2
//             item
//             xs={12}
//             sm={6}
//             md={3}
//             key={index}
//             component={motion.div}
//             initial={{ opacity: 0, y: 100 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{
//               delay: 0.2 * index,
//               duration: 1,
//               type: "spring",
//               stiffness: 50,
//             }}
//             viewport={{ once: true }}
//           >
//             <Paper
//               elevation={3}
//               sx={{
//                 p: 3,
//                 textAlign: "center",
//                 height: "100%",
//                 display: "flex",
//                 flexDirection: "column",
//                 justifyContent: "space-between",
//                 background: "#fff",
//                 borderRadius: 3,
//                 boxShadow: "0px 10px 20px rgba(0,0,0,0.1)",
//               }}
//             >
//               <Box
//                 sx={{
//                   fontSize: 50,
//                   color: "primary.main",
//                   mb: 2,
//                 }}
//               >
//                 {service.icon}
//               </Box>
//               <Typography variant="h6" fontWeight="bold" sx={{ mb: 1 }}>
//                 {service.title}
//               </Typography>
//               <Typography variant="body2">{service.description}</Typography>
//             </Paper>
//           </Grid2>
//         ))}
//       </Grid2>
//     </Box>
//   );
// };

// export default Services;
import React from 'react';
import { Box, Typography, Grid2, Paper, useTheme, useMediaQuery } from '@mui/material';
import { motion } from 'framer-motion'; // Install with `npm install framer-motion`

const services = [
  
  {
    title: "Web Development",
    description:
      "With a comprehensive understanding of web development technologies, I create responsive and user-friendly websites. My skill set includes HTML, CSS, JavaScript, and various front-end frameworks.",
    icon: "🌐",
  },
  {
    title: "Data Analysis",
    description:
      "I excel in transforming raw data into meaningful insights. With strong analytical skills and proficiency in data visualization tools, I can interpret complex data sets to support decision-making processes.",
    icon: "📊",
  },
  {
    title: "Backend Development",
    description:
      "I specialize in designing and implementing server-side logic, ensuring seamless communication between the front end and the database.",
    icon: "💻",
  },
  {
    title: "Database Development",
    description:
      "I have a strong foundation in database design and architecture, enabling me to create efficient and scalable database solutions. My expertise includes normalization, indexing, and query optimization.",
    icon: "🛢️",
  },
];

const Services = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box
      sx={{
        py: 10,
        px: 3,
        textAlign: "center",
        background: "#f9f9f9",
      }}
    >
      <Typography variant="h4" fontWeight="bold" color="secondary" gutterBottom>
        SERVICES
      </Typography>
      <Typography variant="body1" sx={{ mb: 6 }}>
        Here are the services that I provide
      </Typography>
      <Grid2 container spacing={4} justifyContent="center">
        {services.map((service, index) => (
          <Grid2
            item
            xs={12} // Full width on extra small screens
            sm={6}  // Half width on small screens
            md={3}  // Quarter width on medium screens and larger
            key={index}
            component={motion.div}
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.2 * index,
              duration: 1,
              type: "spring",
              stiffness: 50,
            }}
            viewport={{ once: true }}
          >
            <Paper
              elevation={3}
              sx={{
                p: 3,
                textAlign: "center",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                background: "#fff",
                borderRadius: 3,
                boxShadow: "0px 10px 20px rgba(0,0,0,0.1)",
              }}
            >
              <Box
                sx={{
                  fontSize: 50,
                  color: "primary.main",
                  mb: 2,
                }}
              >
                {service.icon}
              </Box>
              <Typography variant="h6" fontWeight="bold" sx={{ mb: 1 }}>
                {service.title}
              </Typography>
              <Box
                  sx={{
                    maxWidth: isMobile ? '100%' : '250px',
                    mx: 'auto',
                  }}
                >
                  <Typography variant="body2" color="text.secondary">
                    {service.description}
                  </Typography>
                </Box>
            </Paper>
          </Grid2>
        ))}
      </Grid2>
    </Box>
  );
};

export default Services;
