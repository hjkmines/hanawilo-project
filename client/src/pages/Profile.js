import { Box, Container, ImageList, Typography } from '@mui/material'
import React from 'react'
// import IamgeCollage from '../components/imageCollage';

const Profile = () => {
  return (
    <Container>
      <Typography variant='h3' component='h1' marginTop={3}>
        FirstName | LastName  | Position | location
      </Typography>
      <Box marginTop={3} sx={{ display:'flex'}}>
        <img src='http://placekitten.com/200/300' alt="placeholder profile image" width={325} />
      </Box>
    </Container>
  )
}

export default Profile