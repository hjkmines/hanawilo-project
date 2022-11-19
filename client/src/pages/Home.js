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
import { useTheme } from '@mui/material';
import darkBackground from '../assets/darkBackground.svg'
import Navbar from '../components/Navbar';
import Tony from '../assets/tony.png';
import { fontSize } from '@mui/system';

const BannerContainer = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  width: '100%',
  height: '100%',
  padding: '0px 0px',
  // backgroundColor: 'theme.palette.primary.light',
  marginTop: 4,
  marginBottom: 4,
  // [theme.breakpoints.down('sm')]: {
  //     flexDirection: 'column',
  //     alignItems: 'center',
  // }

});

const BannerContent = styled(Box)({
  display: 'flex',
  // flexDirection: 'column',
  justifyContent: 'center',
  alignContent: 'center',
  maxWidth: '100%',
  padding: '20px'
})

const BannerTitle = styled(Typography)({
  lineHeight: 1.5,
  fontSize: '30px',
  marginBottom: '10px',
  textAlign: 'center',
})

const ActionButton = styled(Button)({
  background: "#3FFF80",
  color: 'black',
  fontWeight: 900,
  textTransform: 'capitalized',
  borderRadius: 50,
  marginTop: 20
})


const Home = () => {

  const theme = useTheme();

  return (
    <Box   height='100vh' width='100vw'  flexDirection="column" sx={{ overflow:'auto',  border:1, borderColor: 'magenta', background: `url(${darkBackground})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'cover'}}>
      <Box height="10%" border={1}>
      <Navbar />
      </Box>
      <Grid container height='90%'   >
        <Grid item flex  xs={12} md={5}  paddingLeft={6} paddingTop={20} >

          <Typography variant='h1' fontWeight={900} sx={{fontSize: {xs:'3rem', md:'5rem'}}} >
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
          >
            Save time and resources looking for the right <br></br> developer for your projects.
          </Typography>

          <ActionButton variant='contained'>
            Discover Now
          </ActionButton>

        </Grid>

        <Grid  item  xs={12} md height="100%" sx={{border:1, borderColor:'magenta', marginTop:{xs:-4, md: 0}}}>
            <Box display="flex" height="100%" justifyContent="flex-end">
            <Image src={Tony} fit='contain' height="100%" sx={{border:4, borderColor: 'magenta', }}  />
            </Box>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Home
