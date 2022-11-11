import { Box, Container, Grid, IconButton, ImageList, ListItemSecondaryAction, Rating, Typography } from '@mui/material'
import React from 'react'
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
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import MessageIcon from '@mui/icons-material/Message';


const StyledBox = styled(Box)(({ theme }) => ({
  justifyContent:"center",
  textAlign: "center",
  color: theme.palette.white

}))

const StyledRating = styled(Rating)(({theme}) => ({
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
    <Grid container >
      <Grid item xs={3} sx={{bgcolor:theme.palette.darkPurple}}>
        <Stack spacing={2} >
          <StyledBox 
            sx={{ 
              maxHeight:"200px", 
              objectFit:"cover", 
              overflow:"hidden", 
              }}>
            <Image src="https://placekitten.com/300/400"/>
          </StyledBox>

          <StyledBox>
            <Typography
              variant='h3'
              sx={{ fontSize:'2rem'}}
            >
              FirstName, LastName
            </Typography>
            <Typography
              sx={{ fontSize:'1rem'}}
            >
             title / position 
            </Typography>
            <Typography
              variant='body2'
            >
              region / area 
            </Typography>
          </StyledBox>
          <StyledBox>
            <Stack direction={'row'} justifyContent="center" spacing={2}>
              <IconButton>
                <PersonAddIcon fontSize='large'/>
              </IconButton>
              <IconButton>
                <MessageIcon fontSize='large' />
              </IconButton>
            </Stack>
          </StyledBox>

          <StyledBox>
            <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tempor dictum metus, vitae vulputate felis sagittis eu. Aenean porttitor enim ut leo semper cursus. Pellentesque commodo dictum elit vitae congue. Aliquam eget euismod elit. Phasellus.
            </Typography>
          </StyledBox>

          <StyledBox>
            <Typography
              variant='h6'
              >
              Achievements
            </Typography>
            <Carousel sx={{ mt:1}}>
              <ThumbUpOffAltIcon/>
              <StarBorderIcon />
            </Carousel>
            
          </StyledBox>
          <StyledBox>
            <Typography
              variant='h6'
              >
              Proficiencies
            </Typography>
            <Stack>
              <Stack direction={"row"} justifyContent='center' spacing={2}>
                <CssIcon fontSize='large'/>
                <StyledRating 
                  name="CSS" 
                  value={4} 
                  readOnly
                  icon={<CodeIcon fontSize='inherit' />}
                  emptyIcon={<DataObjectOutlinedIcon fontSize='inherit' />}
                  />
              </Stack>
              <Stack direction={"row"} justifyContent='center' spacing={2}>
                <JavascriptIcon fontSize='large'/>
                <StyledRating 
                  name="javascript" 
                  value={5} 
                  readOnly
                  icon={<CodeIcon fontSize='inherit' />}
                  emptyIcon={<DataObjectOutlinedIcon fontSize='inherit' />}
                  />
              </Stack>
              <Stack direction={"row"} justifyContent='center' spacing={2}>
                <HtmlIcon fontSize='large'/>
                <StyledRating 
                  name="html" 
                  value={4} 
                  readOnly
                  icon={<CodeIcon fontSize='inherit' />}
                  emptyIcon={<DataObjectOutlinedIcon fontSize='inherit' />}
                  />
              </Stack>
              <Stack direction={"row"} justifyContent='center' spacing={2}>
                <PhpIcon fontSize='large'/>
                <StyledRating 
                  name="html" 
                  value={4} 
                  readOnly
                  icon={<CodeIcon fontSize='inherit' />}
                  emptyIcon={<DataObjectOutlinedIcon fontSize='inherit' />}
                  />
              </Stack>
            </Stack>
          </StyledBox>
        </Stack>
      </Grid>

      <Grid item xs={9} sx={{bgcolor:"blue"}}>
        Right side
      </Grid>

    </Grid>
  )
}

export default Profile