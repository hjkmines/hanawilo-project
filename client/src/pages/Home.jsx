import { Box, Card, Container, Grid, Paper, Stack, Typography } from '@mui/material';
import React from 'react';
import MuiImageList from '../components/MuiImageList';
import HomeCard from '../components/homeCard';
// import Banner from '../components/Banner';
// import { Link } from 'react-router-dom';
// import MuiNavbar from '../components/MuiNavbar';
// import Footer from '../components/Footer';

const Home = () => {
  return (
          <Stack  justifyContent="space-around" alignItems='center'>
              <Container sx={{alignItems:"center"}} >
                <Typography>
              Home screen 1
                </Typography>
              {/* <Box > */}
                <img 
                  src="https://placekitten.com/200/300" 
                  alt="placholder kitten"
                  className='img'
                />
              {/* </Box> */}
              </Container>
          
            <Grid item xs={12}  >
              <Paper>
                <Typography > 
                Interesting quotes / facts here
                </Typography>
              </Paper>
            </Grid>
          </Stack>
  )
}

export default Home
