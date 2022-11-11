import { Box, Container, ImageList, Typography } from '@mui/material'
import React from 'react'
import { useTheme } from '@mui/material'

const Profile = () => {
  const theme = useTheme();

  return (
   <Container sx={{
    bgcolor:theme.palette.primary.light,
   }}
   >
     {/* left container sticky? permanent drawer?  */}
     <Container sx={{
      bgcolor:theme.palette.other.main,
      
     }}>
       <Typography>
        Left section
       </Typography>
     </Container>

     {/* Featured Section */}
     <Container sx={{
      bgcolor:theme.palette.secondary.main,
      color:theme.palette.text.main
     }}>
        <Typography>
          Featured Section 
        </Typography>
     </Container>

     {/* upcoming section */}
     <Container sx={{
      bgcolor:theme.palette.primary.mid,
      color:theme.palette.text.main
     }}>
      <Typography>
        Upcoming Section
      </Typography>
     </Container>
   </Container>
  )
}

export default Profile