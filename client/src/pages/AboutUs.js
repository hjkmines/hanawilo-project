import React from "react";
import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";
import PropTypes from "prop-types";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import darkBackground from "../assets/darkBackground.svg";
import { blue } from "@mui/material/colors";
import { Card, CardContent } from "@mui/material";

const mainFeaturedPost = {
  title: "Empowering and pioneering the future engineers",
  description:
    "Hanawilo Edge is a leading education platform that helps connect students to instructors in a wide array of subjects. With thousands of courses and over 100,000 students taking classes each month, Hanawilo Edge is shaping the future of education by getting students learning in their own time, at their own pace and budget.",
  image: "https://source.unsplash.com/random",
  imageText: "main image description",
  linkText: "Continue reading…",
};

const AboutUs = () => {
  return (
    <div>
      <Box
        display="flex"
        minHeight="100vh"
        maxWidth="100vw"
        width={1}
        flexDirection="column"
        sx={{
          background: `url(${darkBackground})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <Navbar />
        <Paper
          sx={{
            position: "relative",
            backgroundColor: "grey.800",
            color: "#fff",
            mb: 4,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundImage: `url(${mainFeaturedPost.image})`,
          }}
        >
          {/* Increase the priority of the hero background image */}
          {
            <img
              style={{ display: "none" }}
              src={mainFeaturedPost.image}
              alt={mainFeaturedPost.imageText}
            />
          }
          <Box
            sx={{
              position: "absolute",
              top: 0,
              bottom: 0,
              right: 0,
              left: 0,
              backgroundColor: "rgba(0,0,0,.3)",
            }}
          />
          <Grid container>
            <Grid item md={4}>
              <Box
                sx={{
                  position: "relative",
                  p: { xs: 3, md: 6 },
                  pr: { md: 0 },
                }}
              >
                <Typography
                  component="h1"
                  variant="h3"
                  color="inherit"
                  gutterBottom
                >
                  {mainFeaturedPost.title}
                </Typography>
                <Typography variant="h5" color="inherit" paragraph>
                  {mainFeaturedPost.description}
                </Typography>
                <Link variant="subtitle1" href="#">
                  {mainFeaturedPost.linkText}
                </Link>
              </Box>
            </Grid>
          </Grid>
        </Paper>
        <Grid container>
            <Grid>
        <Box sx={{
                  position: "relative",
                  p: { xs: 3, md: 6 },
                  pr: { md: 0 },
                 
               
                }}>
        <Typography  sx={{
                        fontWeight: 600,
                        fontSize: '35px',
                        textDecoration: "underline",
                        textDecorationThickness: 6,
                        textDecorationColor:'#A5E6BB',
                        textDecorationSkipInk: "none",
                     textUnderlinePosition: "under",
                    
                }} 
                variant="title" 
              title
        >
           Our philosophy
              </Typography>
              <Typography sx={{
              fontSize: '30px',
               }} 
               variant="h5" 
               color="inherit" 
               paragraph 
        >
           Ullamcorper malesuada at leo at. Egestas viverra vulputate tincidunt tellus. Nisl, nulla est, amet enim fringilla. Enim nunc velit mattis felis tempus, cursus. Nisi orci convallis phasellus cursus orci, nisl, lorem eget quis. Adipiscing posuere tortor, morbi at praesent.
              </Typography >
              <Card sx={{
                borderLeft: "10px solid red",
                display:"flex",
                mr:10,
                position: "relative",
                p: { xs: 3, md: 6 },
                pr: { md: 0 },
                backgroundColor: "CCE4E6",
                opacity: 0.5
              }}>
                <CardContent>
                  <Typography sx={{
              fontSize: '30px',
               }} 
               variant="h5" 
               color="black"  >
                  At in in rhoncus, purus. on, turpis neque bibendum enim id nibh habitant venenatis. Hendrerit in tellus molestie morbi ultrices. Suspendisse adipiscing arcu est, neque a, mattis eget habitant. 
                  </Typography>
                </CardContent>
              </Card>
              </Box>
              </Grid>
              <Grid>
        <Box sx={{
                  position: "relative",
                  p: { xs: 3, md: 6 },
                  pr: { md: 0 },
                }}>
        <Typography  sx={{
                        fontWeight: 600,
                        fontSize: '35px',
                        textDecoration: "underline",
                        textDecorationThickness: 6,
                        textDecorationColor:'#A5E6BB',
                        textDecorationSkipInk: "none",
                     textUnderlinePosition: "under"
              

                }} 
                variant="title"
           
        >
           Our values
              </Typography>
              <Typography sx={{
              fontSize: '30px',
               }} 
               variant="h5" 
               color="inherit" 
               paragraph
        >
           Ullamcorper malesuada at leo at. Egestas viverra vulputate tincidunt tellus. Nisl, nulla est, amet enim fringilla. Enim nunc velit mattis felis tempus, cursus. Nisi orci convallis phasellus cursus orci, nisl, lorem eget quis. Adipiscing posuere tortor, morbi at praesent.
              </Typography >
            
              </Box>
              </Grid>
              </Grid>
              
      
      </Box>
      
    
      {/* <Footer /> */}
    </div>
  );
};

export default AboutUs;
