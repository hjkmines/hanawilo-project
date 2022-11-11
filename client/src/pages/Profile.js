import { Box, Container, ImageList, Typography } from '@mui/material'
import React from 'react'
import { useTheme } from '@mui/material'

const Profile = () => {
  const theme = useTheme();

  return (
   <Container sx={{
    bgcolor:theme.palette.darkPurple,
   }}
   >
     {/* left container sticky? permanent drawer?  */}
     <Container sx={{
      bgcolor:theme.palette.lightPurple,
      
     }}>
       <Typography>
        Left section
       </Typography>
     </Container>

     {/* Featured Section */}
     <Container sx={{
      bgcolor:theme.palette.teal,
      color:theme.palette.white
     }}>
        <Typography>
          Featured Section 
        </Typography>
     </Container>

     {/* upcoming section */}
     <Container sx={{
      bgcolor:theme.palette.lightGreen,
      color:theme.palette.black
     }}>
      <Typography>
        Upcoming Section
      </Typography>
     </Container>
   </Container>
  )
}

export default Profile