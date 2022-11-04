import React from 'react'
import {
    Grid, //Grid Version 1 -> version 2 is still unstable :(
    Stack,
    Container, 
    IconButton,
    Button,
    Box,
    styled,
    TextField,
    Typography,
    Divider,
} from '@mui/material';
import { Link } from 'react-router-dom';

import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {

    const StyledFooterContainer = styled(Grid)({
        display: "flex",
        margin: 2,
        justifyContent: "space-around",
        alignItems: "space-around",
        justifyContent: "space-around",
        justifyItems: "space-around",
        backgroundColor: "#f4f4f4",
        padding: 3,
        minWidth: '100%',
        spacing: 2
    })

  return (
    // parent container with above styling
    <StyledFooterContainer container  >
       {/* grid to dynamically render footer components */}
        <Grid item xs={12} md={3} mb={2}>
            {/* xs -> md viewport (mobile friendly) */}
            <Box  
                sx={{
                    textAlign:'center', 
                    alignContent:"center", 
                    alignItems:"center",
                    display: { xs:"block", md:"none"}
                     
            }}> 
                <Typography mt={2} > Join Our Mailing List</Typography>
                <br/>
                <Divider variant="middle" />
                <br/>
                <Container mb={2} p={0}> 
                    
                        <TextField type="text" placeholder='jdoe@gmail.com'>
                            email 
                        </TextField>
                        <Button 
                            variant="contained"
                            color="secondary"
                            sx={{
                                minHeight:'3.5rem'
                            }} 
                        // onClick={e => {

                        // } }
                        > 
                            Submit
                        </Button>
                    
                </Container>
            </Box>

            {/* med + viewport */}
            <Box  
                sx={{
                    textAlign:'center', 
                    alignContent:"center", 
                    alignItems:"center",
                    display: { xs:"none", md:"block"},
                    mt: 2,
            }}> 
               <Stack>
                    <Typography 
                        textAlign={'center'} 
                        justifyContent='center' 
                        alignItems='center'
                    > 
                        Join Our Mailing List
                    </Typography>
                    <br />
                    <Divider variant="middle" my={2} />
                    <br />
                    <TextField type="text" placeholder='JohnDoe@gmail.com'>
                        email 
                    </TextField>
                    <Button 
                        size='small'
                        variant="outlined"
                        color="secondary"
                        sx={{
                            minHeight:'3.5rem'
                        }} 
                    // onClick={e => {
                    // will eventually handle email subscription
                    // } }
                    > 
                        Submit
                    </Button>
                </Stack>
            </Box>
        </Grid>
        
        {/* social links */}
        <Grid item xs={12} md={3} my={6}>
            <Box>
                <Grid container  sx={{ justifyContent:"space-evenly"}}>
                    <Grid item >
                        <IconButton aria-label='facebook' color='success' size="large">
                            <a href="https://facebook.com" target="_blank" rel="noreferrer">
                                <FacebookIcon  fontSize='large'/>
                            </a>
                        </IconButton>
                        <IconButton aria-label='instagram' color='warning'>
                            <a href="https://instagram.com" target="_blank" rel="noreferrer">
                                <InstagramIcon fontSize='large' />
                            </a>
                        </IconButton>
                        <IconButton aria-label='twitter' color='primary'>
                            <a href="https://twitter.com" target="_blank" rel="noreferrer">
                                <TwitterIcon fontSize='large' />
                            </a>
                        </IconButton>
                        <IconButton aria-label='github' >
                            <a href="https://github.com" target="_blank" rel="noreferrer">
                                <GitHubIcon fontSize='large' />
                            </a>
                        </IconButton>
                        <IconButton aria-label='linked-in' >
                            <a href="https://linkedin.com" target="_blank" rel="noreferrer">
                                <LinkedInIcon fontSize='large' /> 
                            </a>
                        </IconButton>
                    </Grid>
                </Grid>
            </Box>
        </Grid>
        
        {/* Link Tree */}
        <Grid item xs={12} md={3} my={2}>    
            <Stack>
                <Button
                    component = {Link}
                    to='/'>
                        Home
                </Button>
                <Button
                    component = {Link}
                    to='/about'>
                        About
                </Button>
                <Button
                    component = {Link}
                    to='/directory'>
                        Directory
                </Button>
                <Button
                    component = {Link}
                    to='/messages'>
                        Messages
                </Button>
            </Stack>
        </Grid>  
    </StyledFooterContainer> 
  )
}


export default Footer;

