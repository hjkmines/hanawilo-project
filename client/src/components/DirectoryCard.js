import React from 'react'
import  Paper  from '@mui/material/Paper'
import  Grid from '@mui/material/Grid'
import  Typography from '@mui/material/Typography'
// import  Container  from '@mui/material/Container';
import  Box  from '@mui/material/Box';
import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon';
import Rating from '@mui/material/Rating';
import { createTheme, ThemeProvider } from '@mui/material';

const theme = createTheme({
  components: {
    MuiTypography: {
      variants: [
        {
          props: {
            variant: "body2"
          },
          style: {
            fontSize: 11,
          },
        },
        {
          props: {
            variant: "body3"
          },
          style: {
            fontSize: 9,
          },
        }
      ],
    },
  },
});


const HomeCard = () => {
  return (
    <Grid item xs={3}>
      <ThemeProvider theme={theme}>
      <Paper elevation={3} >
          <img
          src="http://placekitten.com/200/300"
          alt='place holder kitten image'
          className='homeImg'
          />
          <Box paddingX={1}>
            <Typography variant='subtitle1' component='h2' >
              sub-header text
            </Typography>
            <Box 
            sx={{
              display: 'flex',
              alignItems: 'center'  
          }}>
            <CatchingPokemonIcon sx={{ width: 13}}/>
              <Typography variant='body2' component='p' marginLeft={0.5}>
                sub-sub header & icon
              </Typography>
            </Box>
            <Box 
              marginTop={3}
              sx={{
                display: 'flex',
                alignItems: 'center'  
          }}>
              <Rating 
                name='read-only'
                size="small"
                precision={0.25}
                readOnly
                value={4.5}
              />
              <Typography variant='body2' component='p' marginLeft={0.5}>
                4.5
              </Typography>
              <Typography variant='body2' component='p' marginLeft={1.5}>
                (60 reviews)
              </Typography>
            </Box>
            <Box>
            <Typography variant='h6' component='h3' marginTop={0}>
                From $147
              </Typography>
            </Box>
          </Box>
      </Paper>
      </ThemeProvider>
    </Grid>
  )
}

export default HomeCard