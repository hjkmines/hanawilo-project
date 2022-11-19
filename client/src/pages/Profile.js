import React from 'react'
import { Box, Container, Grid, IconButton, ImageList, ListItemSecondaryAction, Rating, Tooltip, Typography } from '@mui/material'
import { useTheme, styled } from '@mui/material'
import Stack from '@mui/material/Stack'
import Image from 'mui-image';
import JavascriptIcon from '@mui/icons-material/Javascript';
import CssIcon from '@mui/icons-material/Css';
import CodeIcon from '@mui/icons-material/Code';
import PhpIcon from '@mui/icons-material/Php';
import HtmlIcon from '@mui/icons-material/Html';
import DataObjectOutlinedIcon from '@mui/icons-material/DataObjectOutlined';
import Carousel from 'react-material-ui-carousel';
import "react-multi-carousel/lib/styles.css";
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import MessageIcon from '@mui/icons-material/Message';
import BasicCard from '../components/BasicCard';
import Navbar from '../components/Navbar';
import DeadlineTable from '../components/DeadlineTable';
import WorkshopTable from '../components/WorkshopTable';

const StyledBox = styled(Box)(({ theme }) => ({
  justifyContent: "center",
  margin: 2,
  borderColor: theme.palette.white,
  color: theme.palette.white

}))

const StyledRating = styled(Rating)(({ theme }) => ({
  '& .MuiRating-iconFilled': {
    color: theme.palette.lightGreen,
  },
  '& .MuiRating-iconHover': {
    color: theme.palette.lightGreen,
  },
}));

const Profile = () => {
  const theme = useTheme();

  return (
    <>
    <Navbar/>

    <Grid container marginTop={2}  >
      {/* left side content */}
      <Grid item xs md={3}  
        sx={{ bgcolor: 'transparent', borderRadius: 5, marginTop: 9, marginLeft: 2}}
        >
        <Box spacing={2} sx={{ border: 1, borderColor: "white", borderTopLeftRadius: 5, borderTopRightRadius: 5, }} >
          <Box padding={3} >
          <Image 
            src="https://placekitten.com/500/500" 
            sx={{
              borderBottom: 1,
              objectFit: 'fill',
              borderColor: 'white',
              overflow: "hidden"
            }} 
          />
          </Box>

          <StyledBox sx={{  margin: 2 }}>
            <Typography
              variant='h3'
              sx={{ fontSize: '1.4rem', fontWeight: 900 }}
              >
              First, Last
            </Typography>
            <Typography
              sx={{ fontSize: '1rem' }}
            >
              title / position
            </Typography>
            <Typography
              variant='body2'
              >
              region / area
            </Typography>
          </StyledBox>

          <StyledBox sx={{  margin: 2 }}>
            <Stack direction={'row'} justifyContent="center" spacing={2}>
              <IconButton>
                <PersonAddIcon fontSize='large' sx={{color:theme.palette.white}} />
              </IconButton>
              <IconButton>
                <MessageIcon fontSize='large' sx={{color:theme.palette.white}}/>
              </IconButton>
            </Stack>
          </StyledBox>

          <StyledBox sx={{  margin: 2 }}>
            <Typography fontWeight={400}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tempor dictum metus, vitae vulputate felis sagittis eu. Aenean porttitor enim ut leo semper cursus. Pellentesque commodo dictum elit vitae congue. Aliquam eget euismod elit. Phasellus.
            </Typography>
          </StyledBox>

          <StyledBox sx={{  margin: 2 }}>
            <Typography
              variant='h6'
              fontWeight={900}
              >

              Achievements
            </Typography>
            <StyledBox sx={{ textAlign: 'center' }}>

              <Carousel >
                {/* card for achievements */}
                <Tooltip title="always on time">
                  <ThumbUpOffAltIcon />
                </Tooltip>
                <Tooltip title="5-star Club">
                  <StarBorderIcon />
                </Tooltip>

              </Carousel>
            </StyledBox>
          </StyledBox>

          <StyledBox sx={{  margin: 2 }}>


            <StyledBox>

              <Typography
                variant='h6'
                fontWeight={900}
                >
                Skills
              </Typography>

              <Box justifyContent='flex-start'>
                <Stack direction={"row"} justifyContent='flex-start' spacing={2}>
                  <CssIcon fontSize='large' />
                  <StyledRating
                    name="CSS"
                    value={4}
                    readOnly
                    icon={<CodeIcon fontSize='inherit' />}
                    emptyIcon={<DataObjectOutlinedIcon fontSize='inherit' />}
                    />
                </Stack>
                <Stack direction={"row"} justifyContent='flex-start' spacing={2}>
                  <JavascriptIcon fontSize='large' />
                  <StyledRating
                    name="javascript"
                    value={5}
                    readOnly
                    icon={<CodeIcon fontSize='inherit' />}
                    emptyIcon={<DataObjectOutlinedIcon fontSize='inherit' />}
                    />

                </Stack>
                <Stack direction={"row"} justifyContent='flex-start' spacing={2}>
                  <HtmlIcon fontSize='large' />
                  <StyledRating
                    name="html"
                    value={4}
                    readOnly
                    icon={<CodeIcon fontSize='inherit' />}
                    emptyIcon={<DataObjectOutlinedIcon fontSize='inherit' />}
                    />
                </Stack>
                
                <Stack direction={"row"} justifyContent='flex-start' spacing={2}>
                  <PhpIcon fontSize='large' />
                  <StyledRating
                    name="html"
                    value={4}
                    readOnly
                    icon={<CodeIcon fontSize='inherit' />}
                    emptyIcon={<DataObjectOutlinedIcon fontSize='inherit' />}
                    />
                </Stack>
              </Box>
            </StyledBox>
          </StyledBox>
        </Box>
      </Grid>

      {/*Right side content*/}
      <Grid item xs  sx={{ bgcolor: "transparent", marginX: 2, marginTop: 4 }}>
        <Box >
          <Typography
          variant='h6'
          fontWeight={900}
          fontSize={'1.5rem'}
          color={'white'}
          marginLeft >Featured</Typography>
          <Box sx={{ border: 1, borderColor: 'white', borderRadius: 5 , padding: 5}}>

            <Carousel >
                <BasicCard />
                <BasicCard />
                <BasicCard />
                <BasicCard />
            </Carousel>

          </Box>
        </Box>

        <Box sx={{ marginTop: 2 }}>

        <Typography
          variant='h6'
          fontWeight={900}
          fontSize={'1.5rem'}
          color={'white'}>Courses</Typography>

          <Box sx={{ border: 1, borderColor: 'white', borderRadius: 5, padding: 5 }}>

          <Carousel >
           
                <BasicCard />
                <BasicCard />
                <BasicCard />
                <BasicCard />
            </Carousel>

          </Box>
        </Box>

        <Box sx={{ marginTop: 2,  }}>

          <Typography
          variant='h6'
          fontWeight={900}
          fontSize={'1.5rem'}
          color={'white'}
          >
            Upcoming
          </Typography>

          <Grid container spacing={2} marginTop={2} >
            <Grid item xs={12} sm={6}>
              <DeadlineTable  />
            </Grid>

            <Grid item xs={12} sm={6}>
              <WorkshopTable />
            </Grid>
          </Grid>
        </Box>
      </Grid>
    </Grid>

          </>
  )
}

export default Profile