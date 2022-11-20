import React from 'react';
import {
  Box,
  Button,
  Card,
  Container,
  Divider,
  Grid,
  Paper,
  Stack,
  styled,
  Typography
} from '@mui/material';
import Image from 'mui-image';
import { Link, Navigate } from 'react-router-dom';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import { useTheme, responsiveFontSizes } from '@mui/material/styles';
import darkBackground from '../assets/darkBackground.svg'
import Navbar from '../components/Navbar';
import Tony from '../assets/tony.png';
import { fontSize } from '@mui/system';


const ActionButton = styled(Button)({
  background: "#3FFF80",
  color: 'black',
  fontWeight: 900,
  textTransform: 'capitalized',
  borderRadius: 50,
  marginTop: 20,
  '&:hover': {
    backgroundColor: 'rgba(63,255,128,.8)'

  },
  '&:active': {
    backgroundColor: 'rgba(63,255,128,.8)'
  },
  '&:focus': {
    backgroundColor: 'rgba(63,255,128,.8)'
  },

})

const Home = () => {

  let theme = useTheme();
  theme = responsiveFontSizes(theme);

  return (
    <Box flex  sx={{ border: 1, borderColor: 'magenta', background: `url(${darkBackground})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'cover', minHeight:{md:'100vh'} }}>
      <Box height="10%">
        <Navbar />
      </Box>

      <Grid container height='90%' sx={{ border: 3, borderColor:'magenta'}} >
        <Grid item flex xs md={5}
          sx={{
            marginBottom: { xs: 0, md: 0 },
            paddingTop: { xs: 2, md: 20 },
            paddingLeft: { xs: 2, md: 6 },
            paddingRight: { xs: 2, md: 0 },
          }}

        >
          <Typography variant='h1' fontWeight={900} sx={{ fontSize: { xs: '3rem', md: '5rem' } }} >
            Web Developers <br></br>on Demand.
          </Typography>

          <Typography
            variant='h6'
            fontWeight={400}
            color='#3FFF80'
          >
            Reduce development time by up to 50%.
          </Typography>

          <Typography
            variant='h5'
            fontWeight={400}
            sx={{ display: { xs: 'none', sm: 'block' } }}
          >
            Save time and resources looking for the right <br></br> developer for your projects.
          </Typography>

          <ActionButton variant='contained'>
            Discover Now
          </ActionButton>

        </Grid>

        <Grid item xs={12} md sx={{ alignSelf: 'flex-end', border: 1, borderColor: 'magenta', marginTop:{xs:-8, md:0}, paddingTop: { md: 5 }, paddingLeft: {xs:10, md:0} }}>
          <Box display="flex" sx={{ alignContent: 'flex-end', justifyContent: { xs: "flex-end", lg: "center" } }}>

            <Image
              src={Tony}
              fit='contain'
              width="auto"
              sx={{
                border: 4,
                borderColor: 'magenta',
                height: '100%'
              }} />
          </Box>
          {/* </Container> */}
        </Grid>
      </Grid>
    </Box >
  )
}

export default Home
