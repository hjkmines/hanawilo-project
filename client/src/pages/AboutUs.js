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
            <Grid item md={6}>
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
      </Box>
      {/* <Footer /> */}
    </div>
  );
};

export default AboutUs;
