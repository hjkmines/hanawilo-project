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
  Typography } from '@mui/material';
import IamgeCollage from '../components/ImageCollage';
import { Link, Navigate } from 'react-router-dom';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import { useTheme } from '@mui/material';

const BannerContainer = styled(Box) ({
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

const BannerContent = styled(Box) ({
    display: 'flex',
    // flexDirection: 'column',
    justifyContent: 'center',
    alignContent: 'center',
    maxWidth: '100%',
    padding: '20px'
})

const BannerTitle = styled(Typography) ({
    lineHeight: 1.5,
    fontSize: '30px',
    marginBottom: '10px',
    textAlign: 'center',
})


const Home = () => {
  
  const theme = useTheme();

  return (
    <>
    
      <Box sx={{
        backgroundColor: theme.palette.darkPurple,
      }}>

        {/* banner  */}
        <BannerContainer >
          <BannerContent>
            <BannerTitle> Find Your Developer Today!</BannerTitle>
          </BannerContent>
        </BannerContainer>

        {/* additional info / what can you do with this site? */}

        {/* <Container> */}
          <Grid container>

            <Grid item xs={12} md={6} padding={2}>
                <Paper 
                  elevation={3} 
                  sx={{
                    display: 'flex',
                    minHeight:'200px',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignContent: 'center',
                    alignItems: 'center',
                    }}>
                  <Typography textAlign={'center'} >
                    Cut down your development time by 50%!!!
                  </Typography>
                  <Divider variant='middle'  />
                  <Typography textAlign={'center'} >
                    Save time and resources looking for the right employee for the right job
                  </Typography>
                </Paper>
              </Grid>

            <Grid item xs={12} md={6} padding={2}>
              <Paper 
                elevation={3} 
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  minHeight: '200px',
              }}>
                <Typography textAlign={'center'}>
                  Looking for a Software Engineer or Developer?
                </Typography>
                <Container sx={{display:'flex', alignItems:'center', alignContent:'center', justifyContent:'center'}}>
                  <Button 
                    sx={{ justifyContent: 'center' }}
                    color='secondary' 
                    variant='contained'
                    component={Link} 
                    endIcon={<ThumbUpIcon />}
                    to = '/directory'
                    >       
                      Find Your Next Engineer
                  </Button>
                </Container>
              </Paper>
            </Grid> 
            <Grid item xs={12} md={6} margin={1}>
              <Paper elevation={3} sx={{minHeight:'60px'}}>
                <Typography>
                  Place holder text
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        {/* </Container> */}


        {/* images are cool */}
        {/* <IamgeCollage /> */}
      </Box>
    </> 

  )
}

export default Home
